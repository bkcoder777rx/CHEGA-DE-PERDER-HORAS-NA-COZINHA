import React from 'react';
import { SITE_CONTENT } from '../content';

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="w-full bg-[#0B0F1A] text-white py-16 md:py-24 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Título Branco Grande */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white mb-6 leading-tight">
          {SITE_CONTENT.finalCta.title}
        </h2>

        {/* Texto Cinza */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl">
          {SITE_CONTENT.finalCta.description}
        </p>

        {/* Botão AMARELO Largo Pílula com Glow */}
        <button
          onClick={onCtaClick}
          className="w-full sm:w-auto inline-flex items-center justify-center bg-[#FFC107] text-[#0B0F1A] font-black text-base sm:text-lg uppercase px-10 sm:px-14 py-5 rounded-full btn-yellow-glow cursor-pointer transition tracking-wide"
        >
          {SITE_CONTENT.finalCta.ctaText}
        </button>

      </div>
    </section>
  );
};
