import React from 'react';
import { Clock, Search, Snowflake, Heart } from 'lucide-react';
import { SITE_CONTENT } from '../content';

export const LifeIsEasySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-[#00C853]", strokeWidth: 2 };
    switch (iconName) {
      case 'clock':
        return <Clock {...props} />;
      case 'search':
        return <Search {...props} />;
      case 'snowflake':
        return <Snowflake {...props} />;
      case 'heart':
        return <Heart {...props} />;
      default:
        return <Clock {...props} />;
    }
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Centralizado */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B0F1A]">
            {SITE_CONTENT.lifeIsEasy.title}
          </h2>
        </div>

        {/* 4 Colunas (2x2 no mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SITE_CONTENT.lifeIsEasy.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200/70 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ECFDF3] flex items-center justify-center mb-5 shrink-0">
                {getIcon(item.icon)}
              </div>

              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0B0F1A] mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
