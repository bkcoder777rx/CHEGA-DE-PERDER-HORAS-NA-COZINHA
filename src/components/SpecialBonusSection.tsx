import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SITE_CONTENT } from '../content';

interface SpecialBonusSectionProps {
  onCtaClick: () => void;
}

export const SpecialBonusSection: React.FC<SpecialBonusSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative w-full bg-[#0B0F1A] text-white py-16 md:py-24 overflow-hidden">
      {/* Brilho Radial Verde Sutil */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#00C853]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Esquerda: Foto da autora com livro e marmitas com glow suave */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00C853]/30 to-[#FFC107]/20 rounded-3xl blur-md opacity-70"></div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900">
                <img
                  src={SITE_CONTENT.specialBonus.image}
                  alt="Plano de Refeições Inteligentes da Amanda Gama"
                  loading="lazy"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Direita: Textos e CTA */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            {/* Label amarela pequena espaçada */}
            <span className="text-xs sm:text-sm font-extrabold text-[#FFC107] tracking-[0.25em] uppercase mb-4 inline-block">
              {SITE_CONTENT.specialBonus.label}
            </span>

            {/* Título Branco Enorme em 3 Linhas */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.1] mb-6">
              PLANO DE<br />
              REFEIÇÕES<br />
              INTELIGENTES
            </h2>

            {/* Texto */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {SITE_CONTENT.specialBonus.description}
            </p>

            {/* Lista com ícones de check em círculo amarelo */}
            <ul className="space-y-4 mb-10 w-full">
              {SITE_CONTENT.specialBonus.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#FFC107]/15 border border-[#FFC107]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFC107]" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm sm:text-base text-slate-200 font-medium">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* Botão AMARELO com glow */}
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#FFC107] text-[#0B0F1A] font-extrabold text-base sm:text-lg uppercase px-10 py-4.5 rounded-full btn-yellow-glow cursor-pointer transition"
            >
              {SITE_CONTENT.specialBonus.ctaText}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
