/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AiChefBonusSection } from './components/AiChefBonusSection';
import { MethodSection } from './components/MethodSection';
import { MenusSection } from './components/MenusSection';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SpecialBonusSection } from './components/SpecialBonusSection';
import { ExclusiveBonusesSection } from './components/ExclusiveBonusesSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { AboutSection } from './components/AboutSection';
import { LifeIsEasySection } from './components/LifeIsEasySection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#00C853] selection:text-white">
      {/* 1) Barra Superior */}
      <TopBar />

      <main className="flex-grow">
        {/* 2) Hero Section */}
        <Hero onCtaClick={scrollToOffer} />

        {/* 3) Seção Dor */}
        <PainSection />

        {/* 4) O que você vai encontrar nesse livro? */}
        <FeaturesSection onCtaClick={scrollToOffer} />

        {/* 5) Bônus Chef IA: O que você tem na sua geladeira? */}
        <AiChefBonusSection onCtaClick={scrollToOffer} />

        {/* 6) Método */}
        <MethodSection />

        {/* 7) 8 Menus Exclusivos para a sua semana */}
        <MenusSection onCtaClick={scrollToOffer} />

        {/* 8) Benefícios Garantidos com Acesso Vitalício */}
        <BenefitsSection />

        {/* 9) Depoimentos */}
        <TestimonialsSection />

        {/* 10) Bônus Especial - Plano de Refeições Inteligentes */}
        <SpecialBonusSection onCtaClick={scrollToOffer} />

        {/* 11) Bônus Exclusivos */}
        <ExclusiveBonusesSection />

        {/* 12) Garantia - Risco Zero */}
        <GuaranteeSection onCtaClick={scrollToOffer} />

        {/* 13) Oferta / Preço (id="oferta") */}
        <OfferSection />

        {/* 14) Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* 15) Quem é Amanda Gama? */}
        <AboutSection />

        {/* 16) A sua vida nunca foi tão fácil */}
        <LifeIsEasySection />

        {/* 17) CTA Final */}
        <FinalCtaSection onCtaClick={scrollToOffer} />
      </main>

      {/* 18) Rodapé */}
      <Footer />
    </div>
  );
}
