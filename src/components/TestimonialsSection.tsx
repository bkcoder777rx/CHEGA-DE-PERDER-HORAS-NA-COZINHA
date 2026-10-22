import React from 'react';
import { Star } from 'lucide-react';
import { SITE_CONTENT } from '../content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-24 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B0F1A] mb-3">
            {SITE_CONTENT.testimonials.title}
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            {SITE_CONTENT.testimonials.subtitle}
          </p>
        </div>

        {/* Grid 3x2 (1 coluna no mobile) de cartões brancos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SITE_CONTENT.testimonials.items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-slate-200/70 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* 5 Estrelas Amarelas */}
                <div className="flex items-center gap-1 mb-4 text-[#FFC107]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFC107]" />
                  ))}
                </div>

                {/* Depoimento em itálico */}
                <p className="text-sm sm:text-base italic text-slate-700 leading-relaxed mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Informações da Aluna */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover shrink-0 border border-slate-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#0B0F1A]">
                    {item.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
