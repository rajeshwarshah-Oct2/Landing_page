import React from 'react';
import { Compass, ArrowRight, ShieldCheck, Sparkles, Navigation } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';

interface TripTypesSectionProps {
  onNavigateLogin: (reason: string) => void;
  onSelectDestinationById: (id: string) => void;
}

export const TripTypesSection: React.FC<TripTypesSectionProps> = ({
  onNavigateLogin,
  onSelectDestinationById,
}) => {
  const tripCategories = [
    {
      title: 'High Alpine Treks',
      tagline: 'Granite needles, high passes, and glacial balcony traverses',
      image: '/src/assets/images/chamonix_france_hero_1790456484738.jpg',
      stat: '2,500m – 4,810m',
      difficulty: 'Expert & Challenging',
      destId: 'chamonix-france',
    },
    {
      title: 'Ancient Sanctuary Routes',
      tagline: 'Inca stone highways, sacred valleys, and cloud forest citadels',
      image: '/src/assets/images/machu_picchu_hero_1790456470973.jpg',
      stat: '500+ Years Heritage',
      difficulty: 'Moderate to High',
      destId: 'machu-picchu',
    },
    {
      title: 'Coastal Stack Expeditions',
      tagline: 'Crashing turquoise swells, sea stacks, and wild ocean bivouacs',
      image: '/src/assets/images/mimisa_rocks_hero_1790456496876.jpg',
      stat: 'Zero Altitude · Ocean Kayak',
      difficulty: 'Moderate',
      destId: 'mimisa-rocks',
    },
    {
      title: 'Dolomite Limestone Passes',
      tagline: 'Iron Via Ferrata cables, vertical towers, and alpine refuges',
      image: '/src/assets/images/dolomites_italy_hero_1790456508786.jpg',
      stat: 'Via Ferrata Grade 3B',
      difficulty: 'Challenging',
      destId: 'dolomites-italy',
    },
  ];

  return (
    <section id="trip-types" className="py-20 bg-[#0c1017] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400 mb-2">
              <Navigation className="w-3.5 h-3.5" />
              <span>Curated Terrains</span>
              <span aria-hidden="true">·</span>
              <span>Trip Types</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Tailored For Every Expedition Scale
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              From vertical alpine ridges to tranquil bamboo groves. Filter and customize with your team in minutes.
            </p>
          </div>

          <button
            onClick={() => onNavigateLogin('Browse all 120+ expedition styles and custom routes')}
            className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-bold uppercase tracking-wider border border-white/10 transition-colors flex items-center gap-2 cursor-pointer self-start md:self-auto"
          >
            <span>Explore All Types</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tripCategories.map((cat, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-[#10151f] border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10151f] via-transparent to-black/30" />
                <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider text-amber-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                  {cat.stat}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {cat.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    {cat.difficulty}
                  </span>
                  <button
                    onClick={() =>
                      onNavigateLogin(`Start planning a ${cat.title} expedition`)
                    }
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Plan Trip</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
