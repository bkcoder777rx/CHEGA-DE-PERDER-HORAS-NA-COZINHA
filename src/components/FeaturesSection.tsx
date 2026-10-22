import React from 'react';
import { ChefHat, Calendar, Snowflake, Heart, Utensils, Zap } from 'lucide-react';
import { SITE_CONTENT } from '../content';

interface FeaturesSectionProps {
  onCtaClick: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onCtaClick }) => {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6 text-[#00C853]", strokeWidth: 1.8 };
    switch (iconName) {
      case 'chef-hat':
        return <ChefHat {...iconProps} />;
      case 'calendar':
        return <Calendar {...iconProps} />;
      case 'snowflake':
        return <Snowflake {...iconProps} />;
      case 'heart':
        return <Heart {...iconProps} />;
      case 'utensils':
        return <Utensils {...iconProps} />;
      case 'zap':
        return <Zap {...iconProps} />;
      default:
        return <ChefHat {...iconProps} />;
    }
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-24 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B0F1A] mb-4">
            {SITE_CONTENT.features.title}
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            {SITE_CONTENT.features.subtitle}
          </p>
        </div>

        {/* Grid 3x2 de Cartões */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {SITE_CONTENT.features.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-slate-200/70 hover:shadow-md transition-shadow flex flex-col items-start"
            >
              {/* Ícone dentro de quadradinho com fundo verde claro */}
              <div className="w-12 h-12 rounded-xl bg-[#ECFDF3] flex items-center justify-center mb-5 shrink-0">
                {getIcon(item.icon)}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0B0F1A] mb-2.5 leading-snug">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Botão centralizado PRETO/azul-marinho pílula */}
        <div className="text-center">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0B0F1A] text-white font-extrabold text-base sm:text-lg uppercase px-10 py-4.5 rounded-full btn-dark-glow hover:bg-slate-900 cursor-pointer transition"
          >
            {SITE_CONTENT.features.ctaText}
          </button>
        </div>

      </div>
    </section>
  );
};
