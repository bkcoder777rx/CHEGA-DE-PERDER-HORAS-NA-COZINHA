import React from 'react';
import { SITE_CONTENT } from '../content';

interface MenusSectionProps {
  onCtaClick: () => void;
}

export const MenusSection: React.FC<MenusSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B0F1A]">
            {SITE_CONTENT.menus.title}
          </h2>
        </div>

        {/* Galeria 4 colunas x 2 linhas (2 colunas no mobile) de fotos quadradas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {SITE_CONTENT.menus.items.map((menu, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-square shadow-sm border border-slate-100 bg-slate-100 flex flex-col justify-end"
            >
              <img
                src={menu.image}
                alt={menu.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
              
              <div className="relative p-3.5 sm:p-4 z-10">
                <span className="text-[11px] sm:text-xs font-semibold text-emerald-300 uppercase tracking-wider block mb-0.5">
                  Menu 0{idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-bold text-white leading-snug drop-shadow-sm">
                  {menu.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Texto pequeno em itálico cinza e Botão Amarelo */}
        <div className="text-center flex flex-col items-center">
          <p className="text-xs sm:text-sm italic text-[#64748B] mb-5">
            "{SITE_CONTENT.menus.disclaimer}"
          </p>

          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#FFC107] text-[#0B0F1A] font-extrabold text-base sm:text-lg uppercase px-10 py-4.5 rounded-full btn-yellow-glow cursor-pointer transition"
          >
            {SITE_CONTENT.menus.ctaText}
          </button>
        </div>

      </div>
    </section>
  );
};
