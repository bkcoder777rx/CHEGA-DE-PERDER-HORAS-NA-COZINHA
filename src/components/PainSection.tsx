import React from 'react';
import { TrendingDown } from 'lucide-react';
import { SITE_CONTENT } from '../content';

export const PainSection: React.FC = () => {
  return (
    <section className="w-full bg-[#0B0F1A] text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Coluna Esquerda: Problemas e Citação */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-8">
              {SITE_CONTENT.painSection.title}
            </h2>

            <ul className="space-y-4 sm:space-y-5 mb-8">
              {SITE_CONTENT.painSection.pains.map((pain, index) => (
                <li key={index} className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-red-950/70 border border-red-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingDown className="w-4 h-4 text-[#DC2626]" strokeWidth={2.5} />
                  </div>
                  <span className="text-base sm:text-lg text-slate-200 font-medium leading-snug">
                    {pain}
                  </span>
                </li>
              ))}
            </ul>

            {/* Caixa de Citação */}
            <div className="bg-[#161B26] border border-slate-700/60 rounded-2xl p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626]"></div>
              <p className="text-base sm:text-lg italic text-slate-300 leading-relaxed">
                "{SITE_CONTENT.painSection.quote}"
              </p>
            </div>
          </div>

          {/* Coluna Direita: Foto da autora com comida saudável e marmitas */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-slate-800">
                <img
                  src={SITE_CONTENT.painSection.image}
                  alt={SITE_CONTENT.painSection.imageAlt}
                  loading="lazy"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
