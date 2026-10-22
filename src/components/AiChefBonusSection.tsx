import React, { useState } from 'react';
import { Zap, Search, Loader2, Sparkles, AlertCircle, ChefHat, Flame, Snowflake, Clock, Check } from 'lucide-react';
import { SITE_CONTENT } from '../content';

interface AiChefBonusSectionProps {
  onCtaClick: () => void;
}

interface RecipeResult {
  recipeName: string;
  ingredients: string[];
  instructions: string[];
  howToFreeze: string;
  howToDefrostAndReheat: string;
  caloriesApprox: string;
}

export const AiChefBonusSection: React.FC<AiChefBonusSectionProps> = ({ onCtaClick }) => {
  const [ingredientsInput, setIngredientsInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recipe, setRecipe] = useState<RecipeResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ingredientsInput.trim()) return;

    setLoading(true);
    setError(null);
    setRecipe(null);

    try {
      const response = await fetch('/api/recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients: ingredientsInput.trim() }),
      });

      if (!response.ok) {
        throw new Error('Erro ao gerar receita.');
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setRecipe(data);
    } catch (err: any) {
      console.error(err);
      setError('Não foi possível gerar a receita neste momento. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          {/* Badge verde claro com ícone de raio */}
          <div className="inline-flex items-center gap-1.5 bg-[#ECFDF3] border border-[#00C853]/20 px-3.5 py-1.5 rounded-full mb-4">
            <Zap className="w-3.5 h-3.5 text-[#00C853]" />
            <span className="text-xs font-bold text-[#00C853] tracking-wider uppercase">
              {SITE_CONTENT.aiChef.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B0F1A] mb-3">
            {SITE_CONTENT.aiChef.title}
          </h2>

          <p className="text-base sm:text-lg text-[#64748B]">
            {SITE_CONTENT.aiChef.subtitle}
          </p>
        </div>

        {/* Caixa Arredondada Fundo Cinza Claro com Input Pílula */}
        <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-4 sm:p-6 mb-8 shadow-inner">
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <input
              type="text"
              value={ingredientsInput}
              onChange={(e) => setIngredientsInput(e.target.value)}
              placeholder={SITE_CONTENT.aiChef.inputPlaceholder}
              className="w-full pl-5 pr-14 py-4 rounded-full bg-white border border-slate-300 text-slate-800 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00C853] focus:border-transparent shadow-sm"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !ingredientsInput.trim()}
              aria-label="Gerar receita"
              className="absolute right-2 w-11 h-11 rounded-full bg-[#00C853] text-white flex items-center justify-center btn-green-glow disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Search className="w-5 h-5" strokeWidth={2.5} />
              )}
            </button>
          </form>

          {/* Sugestões rápidas de clique */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
            <span className="font-medium">Ideias:</span>
            {['Frango e brócolis', 'Carne moída e cenoura', 'Abobrinha e ricota'].map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setIngredientsInput(chip)}
                className="px-2.5 py-1 rounded-full bg-white border border-slate-200 hover:border-[#00C853] hover:text-[#00C853] transition cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Estado de Carregamento */}
        {loading && (
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md text-center flex flex-col items-center justify-center animate-pulse">
            <div className="w-14 h-14 rounded-full bg-[#ECFDF3] flex items-center justify-center mb-3 text-[#00C853]">
              <Loader2 className="w-7 h-7 animate-spin" />
            </div>
            <p className="text-lg font-bold text-[#0B0F1A]">Criando sua receita...</p>
            <p className="text-sm text-[#64748B] mt-1">
              Otimizando ingredientes e técnicas para congelamento perfeito sem perda de nutrientes.
            </p>
          </div>
        )}

        {/* Mensagem de Erro */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-5 text-red-700 flex items-center gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 text-[#DC2626]" />
            <span>{error}</span>
          </div>
        )}

        {/* Cartão de Resultado */}
        {recipe && !loading && (
          <div className="bg-white rounded-2xl p-6 sm:p-9 border border-slate-200/80 shadow-xl transition-all">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF3] flex items-center justify-center text-[#00C853]">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-[#00C853]">
                    Receita Gerada pelo Chef IA
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B0F1A] leading-tight">
                    {recipe.recipeName}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full border border-amber-200/60">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>{recipe.caloriesApprox}</span>
              </div>
            </div>

            {/* Grid Ingredientes e Preparo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
              {/* Ingredientes */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C853]"></span>
                  Ingredientes Necessários
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {recipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modo de Preparo */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C853]"></span>
                  Modo de Preparo
                </h4>
                <ol className="space-y-2.5 text-sm text-slate-700 list-decimal list-inside">
                  {recipe.instructions.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <span className="text-slate-800">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Técnicas de Congelamento e Descongelamento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F8FAFC] rounded-xl p-5 mb-8 border border-slate-200/60">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Snowflake className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                    Como Congelar Corretamente
                  </h5>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {recipe.howToFreeze}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#00C853] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                    Como Descongelar & Reaquecer
                  </h5>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {recipe.howToDefrostAndReheat}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Verde no final do resultado */}
            <div className="text-center pt-2 border-t border-slate-100">
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00C853] text-white font-extrabold text-sm sm:text-base uppercase px-8 py-4 rounded-full btn-green-glow cursor-pointer transition"
              >
                <Sparkles className="w-4 h-4" />
                <span>{SITE_CONTENT.aiChef.ctaText}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
