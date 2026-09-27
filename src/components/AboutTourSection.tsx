import React, { useState, useEffect } from 'react';
import { COUNTRY_ROUTES, CountryTourRoute } from '@/src/data/countryRoutesData';
import { TimelineCity } from '@/src/data/japanTourData';
import { ArrowRight, MapPin, CheckCircle2, Globe2 } from 'lucide-react';
import { WORLD_EXPEDITIONS } from './GlobalHeroSection';

interface AboutTourSectionProps {
  onTriggerAuth: (intent: string) => void;
  onSelectCityDays?: (cityId: string) => void;
  activeCountryId?: string;
  onSelectCountry?: (countryId: string) => void;
}

export const AboutTourSection: React.FC<AboutTourSectionProps> = ({
  onTriggerAuth,
  onSelectCityDays,
  activeCountryId = 'japan',
  onSelectCountry,
}) => {
  const currentRoute: CountryTourRoute =
    COUNTRY_ROUTES[activeCountryId] || COUNTRY_ROUTES.japan;

  const [selectedStage, setSelectedStage] = useState<TimelineCity>(
    currentRoute.stages[0]
  );

  // Sync selected stage when active country changes
  useEffect(() => {
    if (currentRoute && currentRoute.stages.length > 0) {
      setSelectedStage(currentRoute.stages[0]);
    }
  }, [activeCountryId]);

  return (
    <section id="about" className="relative w-full py-20 bg-[#0c0a0c] text-white overflow-hidden border-t border-[#EAADC3]/20">
      {/* Ambient background glow using #EAADC3 */}
      <div 
        className="absolute top-1/4 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none" 
        style={{ backgroundColor: 'rgba(234, 173, 195, 0.08)' }}
      />
      <div 
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none" 
        style={{ backgroundColor: 'rgba(234, 173, 195, 0.08)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header: — ABOUT THE TOUR — */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-r from-transparent to-[#EAADC3]/60" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-[0.2em] uppercase font-light text-stone-100">
            About The Expedition
          </h2>
          <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-l from-transparent to-[#EAADC3]/60" />
        </div>

        {/* Global Country Filter Chips */}
        {onSelectCountry && (
          <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
            <span className="text-xs uppercase tracking-wider text-stone-400 font-medium mr-2 flex items-center gap-1">
              <Globe2 className="w-3.5 h-3.5 text-[#EAADC3]" />
              <span>Select Destination:</span>
            </span>
            {WORLD_EXPEDITIONS.map((exp) => {
              const isCurrent = exp.id === activeCountryId;
              return (
                <button
                  key={exp.id}
                  onClick={() => onSelectCountry(exp.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    isCurrent
                      ? 'bg-[#EAADC3] text-stone-950 font-bold shadow-md shadow-[#EAADC3]/30 scale-105'
                      : 'bg-[#1a1418] text-stone-300 border border-[#EAADC3]/20 hover:border-[#EAADC3] hover:text-white'
                  }`}
                >
                  <span>{exp.flag}</span>
                  <span>{exp.country}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Descriptive Editorial Text */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#EAADC3] font-semibold flex items-center gap-1.5">
                <span>{currentRoute.badge}</span>
              </span>
              <h3 className="text-2xl sm:text-3xl text-stone-100 font-serif font-light leading-relaxed">
                {currentRoute.title}
              </h3>
              <p className="text-base text-stone-300 font-light leading-relaxed">
                {currentRoute.summary}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#161214]/80 border border-[#EAADC3]/20 backdrop-blur-sm space-y-3 shadow-lg">
              <p className="text-stone-300 text-sm leading-relaxed">
                {currentRoute.subDescription}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e171b] text-xs text-stone-300 border border-[#EAADC3]/20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EAADC3]" />
                  Small group (Max 12)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e171b] text-xs text-stone-300 border border-[#EAADC3]/20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EAADC3]" />
                  Luggage & transfer logistics
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e171b] text-xs text-stone-300 border border-[#EAADC3]/20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EAADC3]" />
                  UIAGM / Local certified guides
                </span>
              </div>
            </div>

            {/* Floral Pink Button & Booking Action */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => onTriggerAuth(`Reserve Spot for ${currentRoute.countryName} Expedition`)}
                className="btn-floral w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Book This {currentRoute.countryName} Expedition</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-stone-500">
                ⚡ Real-time trail permit allocation with TripForge flexible policy.
              </p>
            </div>

            {/* Currently Inspected Stage Card Preview */}
            <div className="p-5 rounded-3xl bg-gradient-to-br from-[#181216] to-[#0c0a0c] border border-[#EAADC3]/30 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#EAADC3]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#EAADC3]">
                    Selected Stage: {selectedStage.city}
                  </span>
                </div>
                <span className="text-xs text-[#EAADC3]/90 font-mono">{selectedStage.days}</span>
              </div>
              <p className="text-xs text-stone-300 mb-3">{selectedStage.description}</p>
              <div className="flex items-center justify-between text-[11px] text-stone-400 pt-2 border-t border-stone-800">
                <span>🚆 {selectedStage.transit}</span>
                <span>🌤️ {selectedStage.weather}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Connected Timeline */}
          <div className="lg:col-span-7 relative">
            {/* The Vertical Route Line with #EAADC3 */}
            <div 
              className="absolute left-6 md:left-8 top-8 bottom-12 w-0.5 bg-gradient-to-b from-[#EAADC3] via-[#EAADC3]/60 to-[#EAADC3]" 
              style={{ boxShadow: '0 0 10px rgba(234, 173, 195, 0.4)' }}
            />

            <div className="space-y-12 relative">
              {currentRoute.stages.map((stageNode) => {
                const isSelected = selectedStage.id === stageNode.id;

                return (
                  <div
                    key={stageNode.id}
                    className={`relative pl-14 md:pl-20 transition-all duration-300 ${
                      isSelected ? 'opacity-100' : 'opacity-85 hover:opacity-100'
                    }`}
                  >
                    {/* Glowing Node on Timeline */}
                    <button
                      onClick={() => {
                        setSelectedStage(stageNode);
                        if (onSelectCityDays) onSelectCityDays(stageNode.id);
                      }}
                      className={`absolute left-4 md:left-6 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer ${
                        isSelected
                          ? 'bg-[#EAADC3] border-white ring-4 ring-[#EAADC3]/40 shadow-lg shadow-[#EAADC3]/50 scale-125'
                          : 'bg-[#161214] border-[#EAADC3]/60 hover:border-[#EAADC3]'
                      }`}
                      title={`Select ${stageNode.city}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-950" />
                    </button>

                    {/* Node Header Label */}
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                      <div>
                        <span className="text-xs uppercase tracking-widest text-[#EAADC3] font-semibold mr-2">
                          {stageNode.days}
                        </span>
                        <h3 className="inline text-2xl sm:text-3xl font-serif font-light text-white">
                          {stageNode.city}
                        </h3>
                      </div>
                      <span className="text-xs text-[#EAADC3]/90 italic font-mono">
                        {stageNode.tag}
                      </span>
                    </div>

                    {/* Image Cards Row for this Stage */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {stageNode.images.map((img, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setSelectedStage(stageNode);
                            if (onSelectCityDays) onSelectCityDays(stageNode.id);
                          }}
                          className="group relative h-36 sm:h-44 rounded-2xl overflow-hidden border border-stone-800 hover:border-[#EAADC3] shadow-lg cursor-pointer transition-all duration-300 hover:shadow-[#EAADC3]/20"
                        >
                          <img
                            src={img.url}
                            alt={img.caption}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />
                          <span className="absolute bottom-2 left-2 right-2 text-[11px] font-medium text-stone-200 truncate">
                            {img.caption}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights Pills & Action to Fork */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {stageNode.highlights.slice(0, 3).map((hl, hIdx) => (
                          <span
                            key={hIdx}
                            className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#161214] border border-[#EAADC3]/20 text-stone-300"
                          >
                            {hl}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => onTriggerAuth(`Customize ${stageNode.city} Itinerary Stops`)}
                        className="text-xs text-[#EAADC3] hover:underline font-medium inline-flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>Fork {stageNode.city} Stage</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
