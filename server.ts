import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Instanciação da API Gemini no servidor
const apiKey = process.env.GEMINI_API_KEY || '';
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Endpoint de geração de receita com Chef IA
app.post('/api/recipe', async (req, res) => {
  try {
    const { ingredients } = req.body;
    if (!ingredients || typeof ingredients !== 'string' || !ingredients.trim()) {
      return res.status(400).json({ error: 'Por favor, informe ao menos um ingrediente.' });
    }

    if (!ai) {
      // Fallback amigável caso a chave não esteja injetada
      return res.json({
        recipeName: `Refogado Prático de ${ingredients.split(',')[0]?.trim() || 'Legumes'} Congelável`,
        ingredients: [
          `${ingredients.trim()}`,
          "1 colher de sopa de azeite de oliva extra virgem",
          "2 dentes de alho picados",
          "1 cebola média picadinha",
          "Ervas finas (alecrim, tomilho ou orégano) e sal a gosto",
        ],
        instructions: [
          "Higienize e corte todos os ingredientes em cubos médios uniformes para garantir cozimento homogêneo.",
          "Em fogo médio, aqueça o azeite e doure levemente o alho e a cebola até ficarem translúcidos.",
          "Adicione os ingredientes principais e refogue em fogo alto rapidamente (deixe 'al dente' para não amolecer demais ao descongelar).",
          "Ajuste o sal e as ervas. Desligue o fogo e espere esfriar completamente antes de porcionar.",
        ],
        howToFreeze: "Divida em potes de vidro herméticos ou sacos próprios para freezer (retirando todo o ar). Etiquete com a data. Dura até 90 dias no freezer a -18°C.",
        howToDefrostAndReheat: "Transfira para a geladeira na noite anterior ou aqueça direto do congelador no micro-ondas por 3 a 4 minutos, ou em frigideira tampada com 2 colheres de água.",
        caloriesApprox: "Aprox. 240 kcal por porção (rende 2 porções equilibradas)",
      });
    }

    const prompt = `Você é a nutricionista Amanda Gama, criadora do "Método Freezer Inteligente".
O usuário tem os seguintes ingredientes na geladeira: "${ingredients.trim()}".
Crie UMA receita saudável, equilibrada, saborosa e especificamente pensada para CONGELAR e DESCONGELAR mantendo sabor, textura e nutrientes.
A resposta DEVE ser em Português do Brasil e estritamente no formato JSON solicitado.`;

    // Tentamos gemini-2.5-flash conforme solicitado pelo usuário, com fallback para gemini-3.8-flash
    let response;
    try {
      response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: 'Você é Amanda Gama, nutricionista especialista em marmitas saudáveis congeladas. Responda em JSON válido.',
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              recipeName: {
                type: Type.STRING,
                description: 'Nome apetitoso e saudável do prato',
              },
              ingredients: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'Lista de ingredientes com quantidades',
              },
              instructions: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'Passo a passo do modo de preparo rápido e prático',
              },
              howToFreeze: {
                type: Type.STRING,
                description: 'Instruções técnicas para embalar e congelar sem perder sabor ou textura',
              },
              howToDefrostAndReheat: {
                type: Type.STRING,
                description: 'Como descongelar e reaquecer para ficar como fresca',
              },
              caloriesApprox: {
                type: Type.STRING,
                description: 'Calorias aproximadas e macronutrientes por porção',
              },
            },
            required: ['recipeName', 'ingredients', 'instructions', 'howToFreeze', 'howToDefrostAndReheat', 'caloriesApprox'],
          },
        },
      });
    } catch {
      // Fallback se o modelo 2.5 não responder
      response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction: 'Você é Amanda Gama, nutricionista especialista em marmitas saudáveis congeladas. Responda em JSON válido.',
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              recipeName: { type: Type.STRING },
              ingredients: { type: Type.ARRAY, items: { type: Type.STRING } },
              instructions: { type: Type.ARRAY, items: { type: Type.STRING } },
              howToFreeze: { type: Type.STRING },
              howToDefrostAndReheat: { type: Type.STRING },
              caloriesApprox: { type: Type.STRING },
            },
            required: ['recipeName', 'ingredients', 'instructions', 'howToFreeze', 'howToDefrostAndReheat', 'caloriesApprox'],
          },
        },
      });
    }

    const text = response.text;
    if (!text) {
      throw new Error('Nenhum texto retornado pelo modelo.');
    }

    const parsed = JSON.parse(text);
    return res.json(parsed);
  } catch (error: any) {
    console.error('Erro ao gerar receita:', error);
    return res.status(500).json({
      error: 'Não foi possível gerar a receita no momento. Tente novamente em alguns instantes.',
    });
  }
});

// Setup Vite middleware em desenvolvimento ou servir build estático em produção
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}

startServer();
