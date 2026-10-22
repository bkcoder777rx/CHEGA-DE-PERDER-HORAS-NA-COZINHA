import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { SITE_CONTENT } from '../content';

interface GuaranteeSectionProps {
  onCtaClick: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-24 border-b border-slate-200/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Círculo Amarelo Grande com Ícone de Escudo com Check */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FFC107]/20 border-4 border-[#FFC107] flex items-center justify-center mb-6 shadow-lg shadow-amber-200/50">
          <ShieldCheck className="w-12 h-12 sm:w-14 sm:h-14 text-[#FFC107]" strokeWidth={2.2} />
        </div>

        {/* Título e Subtítulo */}
        <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#0B0F1A] mb-2">
          {SITE_CONTENT.guarantee.title}
        </h2>
        <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#00C853] mb-6">
          {SITE_CONTENT.guarantee.subtitle}
        </h3>

        {/* Texto com 7 dias bold */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8 max-w-2xl">
          {SITE_CONTENT.guarantee.textPart1}
          <strong className="font-bold text-slate-950">{SITE_CONTENT.guarantee.textBold}</strong>
          {SITE_CONTENT.guarantee.textPart2}
        </p>

        {/* Botão Verde */}
        <button
          onClick={onCtaClick}
          className="w-full sm:w-auto inline-flex items-center justify-center bg-[#00C853] text-white font-extrabold text-base sm:text-lg uppercase px-10 py-4.5 rounded-full btn-green-glow cursor-pointer transition"
        >
          {SITE_CONTENT.guarantee.ctaText}
        </button>

      </div>
    </section>
  );
};
