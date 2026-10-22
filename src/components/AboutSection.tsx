import React from 'react';
import { UserCheck } from 'lucide-react';
import { SITE_CONTENT } from '../content';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cartão Grande Centralizado com Sombra */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Esquerda: Foto da autora */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50">
                <img
                  src={SITE_CONTENT.about.image}
                  alt="Nutricionista Amanda Gama"
                  loading="lazy"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center"
                />
              </div>
            </div>

            {/* Direita: Biografia, Citação e Assinatura */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B0F1A] mb-6">
                {SITE_CONTENT.about.title}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                <p>
                  {SITE_CONTENT.about.bio1}
                </p>
                <p>
                  {SITE_CONTENT.about.bio2Part1}
                  <strong className="font-bold text-slate-950">{SITE_CONTENT.about.bio2Bold}</strong>
                  {SITE_CONTENT.about.bio2Part2}
                </p>
                <p>
                  {SITE_CONTENT.about.bio3Part1}
                  <strong className="font-bold text-slate-950">{SITE_CONTENT.about.bio3Bold}</strong>
                  {SITE_CONTENT.about.bio3Part2}
                </p>
              </div>

              {/* Citação em itálico grande com barra vertical verde clara à esquerda */}
              <div className="border-l-4 border-l-[#00C853] pl-4 sm:pl-5 py-2 my-2 bg-emerald-50/40 rounded-r-xl">
                <p className="text-base sm:text-lg italic font-medium text-slate-800 leading-relaxed">
                  "{SITE_CONTENT.about.quote}"
                </p>
              </div>

              {/* Assinatura */}
              <div className="flex items-center gap-3.5 mt-6 pt-6 border-t border-slate-100 w-full">
                <div className="w-12 h-12 rounded-full bg-[#ECFDF3] flex items-center justify-center shrink-0 border border-emerald-200">
                  <UserCheck className="w-6 h-6 text-[#00C853]" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-[#0B0F1A] tracking-wide">
                    {SITE_CONTENT.about.authorName}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748B] font-medium">
                    {SITE_CONTENT.about.authorTitle}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
