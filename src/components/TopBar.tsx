import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SITE_CONTENT } from '../content';

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#ECFDF3] border-b border-[#00C853]/15 py-2.5 px-4 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-center">
        <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0" strokeWidth={2.5} />
        <span className="text-xs sm:text-sm font-bold text-[#00C853] tracking-wider uppercase">
          {SITE_CONTENT.topBar.text}
        </span>
      </div>
    </div>
  );
};
