import React from 'react';
import { INCLUDED_SERVICES } from '@/src/data/japanTourData';
import { Compass, Plane, Train, Building2, Check, ShieldCheck, ArrowRight } from 'lucide-react';

interface WhatsIncludedSectionProps {
  onTriggerAuth: (intent: string) => void;
}

export const WhatsIncludedSection: React.FC<WhatsIncludedSectionProps> = ({ onTriggerAuth }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#EAADC3]" />;
      case 'Plane':
        return <Plane className="w-6 h-6 text-[#EAADC3]" />;
      case 'Train':
        return <Train className="w-6 h-6 text-[#EAADC3]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#EAADC3]" />;
      default:
        return <Compass className="w-6 h-6 text-[#EAADC3]" />;
    }
  };

  return (
    <section id="included" className="relative w-full py-20 bg-[#0c0a0c] text-white border-t border-[#EAADC3]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header: — WHAT'S INCLUDED — */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-r from-transparent to-[#EAADC3]/60" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-[0.2em] uppercase font-light text-stone-100">
            What's Included
          </h2>
          <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-l from-transparent to-[#EAADC3]/60" />
        </div>

        {/* 4 Cards Grid in #EAADC3 styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INCLUDED_SERVICES.map((item) => (
            <div
              key={item.id}
              onClick={() => onTriggerAuth(`Verify inclusions and booking details for ${item.title}`)}
              className="group p-6 rounded-3xl bg-[#161214]/80 border border-[#EAADC3]/20 hover:border-[#EAADC3] hover:bg-[#1b1518] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-lg hover:shadow-[#EAADC3]/15"
            >
              <div>
                {/* Icon Container with #EAADC3 Accent */}
                <div className="w-12 h-12 rounded-2xl bg-[#1e171b] border border-[#EAADC3]/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#EAADC3] transition-all shadow-md shadow-[#EAADC3]/10">
                  {getIcon(item.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-medium text-white mb-2 group-hover:text-[#EAADC3] transition-colors">
                  {item.title}
                </h3>

                {/* Short Description */}
                <p className="text-stone-300 text-sm font-light leading-relaxed whitespace-pre-line mb-4">
                  {item.shortDesc}
                </p>

                {/* Sub Features */}
                <div className="space-y-1.5 pt-3 border-t border-stone-800">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-stone-400">
                      <Check className="w-3.5 h-3.5 text-[#EAADC3] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Link */}
              <div className="pt-5 mt-4 flex items-center justify-between text-xs text-stone-500 group-hover:text-[#EAADC3] transition-colors">
                <span>View policy</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Confidence Assurance Bar with #EAADC3 styling */}
        <div className="mt-12 p-4 sm:p-5 rounded-3xl bg-[#161214]/50 border border-[#EAADC3]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#EAADC3] flex-shrink-0" />
            <span>
              <strong>All-inclusive transparency guarantee:</strong> No hidden tourist surcharges, park entry taxes, or surprise booking fees.
            </span>
          </div>
          <button
            onClick={() => onTriggerAuth('Review complete Japan tour pricing and inclusions agreement')}
            className="btn-floral-outline px-5 py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap text-xs font-semibold"
          >
            Download Expedition Brief (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};
