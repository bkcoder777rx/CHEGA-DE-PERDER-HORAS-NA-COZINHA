import React from 'react';
import { ArrowRight, ShieldCheck, Calendar, Zap, BookOpen } from 'lucide-react';
import { SITE_CONTENT } from '../content';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24 overflow-hidden border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna Esquerda: Textos e CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold uppercase tracking-tight text-[#0B0F1A] leading-[1.15] mb-6">
              {SITE_CONTENT.hero.titlePrefix}
              <span className="text-[#00C853]">{SITE_CONTENT.hero.titleHighlight1}</span>
              {SITE_CONTENT.hero.titleMiddle}
              <span className="text-[#00C853]">{SITE_CONTENT.hero.titleHighlight2}</span>
              {SITE_CONTENT.hero.titleSuffix}
            </h1>

            <p className="text-lg sm:text-xl text-slate-800 leading-relaxed mb-4">
              Descubra <strong className="font-bold text-slate-950">120 receitas saudáveis e equilibradas</strong>, fáceis, rápidas, prontas para preparar e perfeitas para congelar.
            </p>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-8">
              Com o <em className="italic font-medium text-slate-700">Método Freezer Inteligente</em>, você terá refeições prontas em poucos minutos — sem estresse e sempre saudáveis.
            </p>

            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#00C853] text-white font-extrabold text-base sm:text-lg uppercase px-8 sm:px-10 py-4 sm:py-4.5 rounded-full btn-green-glow cursor-pointer transition"
            >
              <span>{SITE_CONTENT.hero.ctaText}</span>
              <ArrowRight className="w-5 h-5 shrink-0" strokeWidth={2.5} />
            </button>

            {/* 3 Mini Selos */}
            <div className="mt-8 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-semibold tracking-wider text-[#64748B] uppercase">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00C853]" />
                <span>COMPRA SEGURA</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#00C853]" />
                <span>GARANTIA DE 7 DIAS</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#00C853]" />
                <span>ACESSO VITALÍCIO</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Foto da autora com marmitas e Card Flutuante */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Efeito de fundo decorativo */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#00C853]/20 via-emerald-100/30 to-transparent rounded-3xl filter blur-xl opacity-70"></div>
              
              {/* Imagem Principal */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src={SITE_CONTENT.hero.image}
                  alt={SITE_CONTENT.hero.imageAlt}
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                />
              </div>

              {/* Cartão Flutuante Sobreposto no Canto Inferior Direito */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3.5 z-10 animate-bounce-slow">
                <div className="w-11 h-11 rounded-xl bg-[#ECFDF3] flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-[#00C853]" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-wider text-[#64748B] uppercase">
                    {SITE_CONTENT.hero.badgeLabel}
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-[#0B0F1A]">
                    {SITE_CONTENT.hero.badgeValue}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
