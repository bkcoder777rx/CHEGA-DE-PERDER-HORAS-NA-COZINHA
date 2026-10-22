import React from 'react';
import { SITE_CONTENT } from '../content';

export const BenefitsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#0B0F1A] text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Branco */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            {SITE_CONTENT.benefits.title}
          </h2>
        </div>

        {/* Grid 3x2 (1 coluna no mobile) com foto de fundo e overlay gradiente */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONTENT.benefits.items.map((benefit, idx) => (
            <div
              key={idx}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group flex flex-col justify-end p-6"
            >
              {/* Foto de Fundo */}
              <img
                src={benefit.image}
                alt={benefit.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay Escuro em Gradiente de baixo para cima */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/85 to-transparent"></div>

              {/* Conteúdo Alinhado na Parte de Baixo */}
              <div className="relative z-10">
                <span className="w-7 h-1 bg-[#00C853] rounded-full block mb-2.5"></span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
