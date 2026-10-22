import React, { useState } from 'react';
import { X } from 'lucide-react';
import { SITE_CONTENT } from '../content';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'termos' | 'privacidade' | 'contato' | null>(null);

  return (
    <footer className="w-full bg-[#0B0F1A] text-[#64748B] py-12 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-xs leading-relaxed space-y-4">
        
        {/* Linha 1 */}
        <p className="text-slate-400 font-medium">
          {SITE_CONTENT.footer.line1}
        </p>

        {/* Linha 2: Disclaimer */}
        <p className="text-slate-500 max-w-2xl mx-auto">
          {SITE_CONTENT.footer.line2}
        </p>

        {/* Links em Caixa Alta */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 pt-2 font-bold tracking-wider text-slate-400">
          {SITE_CONTENT.footer.links.map((link, idx) => (
            <React.Fragment key={link.key}>
              <button
                type="button"
                onClick={() => setActiveModal(link.key as any)}
                className="hover:text-white transition cursor-pointer"
              >
                {link.text}
              </button>
              {idx < SITE_CONTENT.footer.links.length - 1 && (
                <span className="text-slate-700">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-slate-600 pt-2 text-[11px]">
          {SITE_CONTENT.footer.copyright}
        </p>

      </div>

      {/* Modal Simples de Políticas / Contato */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="bg-white text-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              aria-label="Fechar"
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'termos' && (
              <div>
                <h3 className="text-xl font-bold uppercase mb-4 text-[#0B0F1A]">Termos de Uso</h3>
                <div className="text-sm text-slate-600 space-y-3 max-h-80 overflow-y-auto pr-2">
                  <p>
                    Ao adquirir o <strong>Método Freezer Inteligente</strong>, você recebe acesso vitalício e intransferível ao conteúdo digital (e-book e bônus associados).
                  </p>
                  <p>
                    O compartilhamento, revenda ou distribuição não autorizada deste material é expressamente proibido pela lei de direitos autorais.
                  </p>
                  <p>
                    Oferecemos garantia incondicional de 7 dias a partir da data de compra. Caso deseje reembolso, basta solicitar dentro deste prazo.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'privacidade' && (
              <div>
                <h3 className="text-xl font-bold uppercase mb-4 text-[#0B0F1A]">Política de Privacidade</h3>
                <div className="text-sm text-slate-600 space-y-3 max-h-80 overflow-y-auto pr-2">
                  <p>
                    Seus dados pessoais (como e-mail e nome) são utilizados única e exclusivamente para a entrega do produto e comunicações referentes ao seu acesso.
                  </p>
                  <p>
                    Todas as transações de pagamento são processadas em ambiente 100% seguro com criptografia de ponta a ponta. Não armazenamos informações de cartões de crédito.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'contato' && (
              <div>
                <h3 className="text-xl font-bold uppercase mb-4 text-[#0B0F1A]">Fale Conosco</h3>
                <div className="text-sm text-slate-600 space-y-3">
                  <p>
                    Tem dúvidas sobre o método ou precisa de suporte para acessar o material?
                  </p>
                  <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-slate-200">
                    <p className="font-semibold text-slate-900">E-mail de Suporte:</p>
                    <p className="text-[#00C853] font-bold">suporte@amandagama.com.br</p>
                    <p className="text-xs text-[#64748B] mt-2">Horário de atendimento: Segunda a Sexta, das 09h às 18h.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 text-center">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-[#0B0F1A] text-white text-sm font-bold uppercase px-6 py-2.5 rounded-full cursor-pointer hover:bg-slate-800 transition"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
