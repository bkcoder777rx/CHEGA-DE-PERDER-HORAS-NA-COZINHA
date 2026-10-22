import React from 'react';
import { Check, Lock, ShieldCheck, Calendar, ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '../content';

export const OfferSection: React.FC = () => {
  return (
    <section id="oferta" className="w-full bg-[#0B0F1A] text-white py-16 md:py-24 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cartão Central (fundo #161B26, borda superior verde grossa de 4px) */}
        <div className="bg-[#161B26] rounded-3xl border-t-4 border-t-[#00C853] border-x border-b border-slate-800 shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Topo do Cartão: Título e Badge */}
          <div className="text-center mb-10">
            <div className="inline-block bg-[#FFC107] text-[#0B0F1A] text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-sm">
              {SITE_CONTENT.offer.badge}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
              {SITE_CONTENT.offer.cardTitle}
            </h2>
          </div>

          {/* Duas Colunas dentro do Cartão */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center mb-10">
            
            {/* Esquerda: Lista de Itens Inclusos */}
            <div className="md:col-span-7 space-y-3.5">
              {SITE_CONTENT.offer.includedList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ECFDF3] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00C853]" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-200 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Direita: Preço e Botão de Checkout */}
            <div className="md:col-span-5 flex flex-col items-center md:items-end text-center md:text-right bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
              <span className="text-sm line-through text-[#64748B] font-semibold">
                {SITE_CONTENT.offer.fromPrice}
              </span>
              
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium mt-1">
                {SITE_CONTENT.offer.byPriceLabel}
              </span>

              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight my-1">
                {SITE_CONTENT.offer.price}
              </div>

              <span className="text-xs sm:text-sm text-[#00C853] font-bold mb-6">
                {SITE_CONTENT.offer.paymentNote}
              </span>

              <a
                href={SITE_CONTENT.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#00C853] text-white font-black text-sm sm:text-base uppercase px-6 py-4 rounded-full btn-green-glow transition text-center"
              >
                <span>{SITE_CONTENT.offer.ctaButtonText}</span>
                <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.5} />
              </a>

              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2.5">
                {SITE_CONTENT.offer.immediateAccessText}
              </span>
            </div>

          </div>

          {/* Divisória Fina e Rodapé com 3 Selos Cinza */}
          <div className="pt-6 border-t border-slate-800/80">
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-semibold tracking-wider text-[#64748B] uppercase">
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-slate-400" />
                <span>{SITE_CONTENT.offer.footerSeals[0].text}</span>
              </div>
              <span className="text-slate-700 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-slate-400" />
                <span>{SITE_CONTENT.offer.footerSeals[1].text}</span>
              </div>
              <span className="text-slate-700 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{SITE_CONTENT.offer.footerSeals[2].text}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
