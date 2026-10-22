import React from 'react';
import { Zap, Heart, Snowflake, Utensils } from 'lucide-react';
import { SITE_CONTENT } from '../content';

export const MethodSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-7 h-7 text-[#00C853]", strokeWidth: 2 };
    switch (iconName) {
      case 'zap':
        return <Zap {...props} />;
      case 'heart':
        return <Heart {...props} />;
      case 'snowflake':
        return <Snowflake {...props} />;
      case 'utensils':
        return <Utensils {...props} />;
      default:
        return <Zap {...props} />;
    }
  };

  return (
    <section className="w-full bg-[#F0FDF4] py-16 md:py-20 border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Centralizado */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B0F1A]">
            <span className="text-[#00C853]">{SITE_CONTENT.method.titlePrefix}</span>
            {SITE_CONTENT.method.titleSuffix}
          </h2>
        </div>

        {/* 4 Cartões Brancos em Linha (2x2 no mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {SITE_CONTENT.method.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-emerald-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#ECFDF3] flex items-center justify-center mb-4 text-[#00C853]">
                {getIcon(step.icon)}
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold text-[#0B0F1A] uppercase tracking-wider leading-snug">
                {step.text}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
