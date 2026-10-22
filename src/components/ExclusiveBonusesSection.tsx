import React from 'react';
import { Zap } from 'lucide-react';
import { SITE_CONTENT } from '../content';

export const ExclusiveBonusesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-24 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Centralizado */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B0F1A]">
            {SITE_CONTENT.bonuses.title}
          </h2>
        </div>

        {/* Grid de 6 Cartões (1 col mobile, 2 tablet, 3 ou 4 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {SITE_CONTENT.bonuses.items.map((bonus) => (
            <div
              key={bonus.number}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/70 hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Imagem no Topo (3:2) */}
              <div className="aspect-[3/2] w-full overflow-hidden bg-slate-100">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Corpo do Cartão */}
              <div className="p-6 flex flex-col items-start flex-grow">
                {/* Badge Verde Claro */}
                <span className="inline-block bg-[#ECFDF3] text-[#00C853] text-xs font-extrabold tracking-wider px-3 py-1 rounded-full mb-3 uppercase">
                  BÔNUS {bonus.number}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-[#0B0F1A] mb-2 leading-snug">
                  {bonus.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Aviso em Vermelho, Caixa Alta, Bold, com Ícone de Raio */}
        <div className="bg-red-50 border border-red-200/80 rounded-2xl p-4 sm:p-5 text-center flex items-center justify-center gap-2.5 max-w-3xl mx-auto">
          <Zap className="w-5 h-5 text-[#DC2626] shrink-0" strokeWidth={2.5} />
          <p className="text-xs sm:text-sm font-extrabold text-[#DC2626] uppercase tracking-wide">
            {SITE_CONTENT.bonuses.alert}
          </p>
        </div>

      </div>
    </section>
  );
};
