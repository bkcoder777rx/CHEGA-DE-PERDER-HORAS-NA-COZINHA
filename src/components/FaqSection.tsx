import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SITE_CONTENT } from '../content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primeiro aberto por padrão

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6">
        
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B0F1A]">
            {SITE_CONTENT.faq.title}
          </h2>
        </div>

        {/* Acordeão */}
        <div className="space-y-4">
          {SITE_CONTENT.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0B0F1A] pr-4 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#ECFDF3] flex items-center justify-center shrink-0 text-[#00C853] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#00C853] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#64748B] leading-relaxed border-t border-slate-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
