import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Compass, 
  ArrowRight,
  Mountain,
  Globe2,
  Clock,
  Star
} from 'lucide-react';

import machuPicchuImg from '@/src/assets/images/machu_picchu_hero_1790456470973.jpg';
import chamonixImg from '@/src/assets/images/chamonix_france_hero_1790456484738.jpg';
import mimosaRocksImg from '@/src/assets/images/mimisa_rocks_hero_1790456496876.jpg';
import dolomitesImg from '@/src/assets/images/dolomites_italy_hero_1790456508786.jpg';
import japanHeroBg from '@/src/assets/images/japan_hero_bg_1790465455426.jpg';

export interface WorldCountryExpedition {
  id: string;
  country: string;
  title: string;
  region: string;
  continent: string;
  flag: string;
  watermark: string;
  image: string;
  tagline: string;
  highlight: string;
  duration: string;
  altitude: string;
  difficulty: string;
  rating: number;
  reviewCount: number;
  estimatedCost: string;
  bestSeason: string;
  featuredPoints: string[];
}

export const WORLD_EXPEDITIONS: WorldCountryExpedition[] = [
  {
    id: 'japan',
    country: 'JAPAN',
    title: 'Kyoto & Mount Fuji',
    region: 'Honshu Island',
    continent: 'East Asia',
    flag: '🇯🇵',
    watermark: 'JAPAN',
    image: japanHeroBg,
    tagline: 'Sakura Blossoms, Zen Shrines & High-Speed Shinkansen',
    highlight: 'Traverse from ancient cedar temple paths and thousand vermilion Torii gates to golden dawn overlooking Mount Fuji.',
    duration: '10 Days',
    altitude: '3,776 m',
    difficulty: 'Moderate',
    rating: 4.98,
    reviewCount: 384,
    estimatedCost: '$2,850',
    bestSeason: 'Spring & Autumn',
    featuredPoints: ['Fushimi Inari Dawn Walk', 'Arashiyama Bamboo Grove', 'Hakone Mineral Onsen', 'Shibuya Rooftop Sky'],
  },
  {
    id: 'peru',
    country: 'PERU',
    title: 'Machu Picchu & Sacred Valley',
    region: 'Andean Highlands',
    continent: 'South America',
    flag: '🇵🇪',
    watermark: 'PERU',
    image: machuPicchuImg,
    tagline: 'Ancient Inca Citadels & Mystic Cloud Mist Terraces',
    highlight: 'Ascend stone stairways carved through high Polylepis dwarf forests and Dead Woman’s Pass to first light at the Sun Gate.',
    duration: '7 Days',
    altitude: '4,215 m',
    difficulty: 'Challenging',
    rating: 4.97,
    reviewCount: 420,
    estimatedCost: '$1,480',
    bestSeason: 'May – October',
    featuredPoints: ['Inca Trail High Pass', 'Sacred Valley Terraces', 'Inti Punku Sunrise', 'Cusco Acclimatization'],
  },
  {
    id: 'france',
    country: 'FRANCE',
    title: 'Chamonix & Mont Blanc',
    region: 'Haute-Savoie Alps',
    continent: 'Western Europe',
    flag: '🇫🇷',
    watermark: 'FRANCE',
    image: chamonixImg,
    tagline: 'Granite Needles, High Glaciers & Cradle of Mountaineering',
    highlight: 'Step into the Void suspended above Chamonix valley, traverse glacial moraines facing Mer de Glace, and sleep in alpine refuges.',
    duration: '6 Days',
    altitude: '3,842 m',
    difficulty: 'Expert',
    rating: 4.95,
    reviewCount: 412,
    estimatedCost: '€1,820',
    bestSeason: 'June – September',
    featuredPoints: ['Aiguille du Midi Skywalk', 'Grand Balcon Traverse', 'Refugio Fondue Evenings', 'Mer de Glace Glacier'],
  },
  {
    id: 'italy',
    country: 'ITALY',
    title: 'Tre Cime di Lavaredo',
    region: 'Dolomites UNESCO',
    continent: 'Southern Europe',
    flag: '🇮🇹',
    watermark: 'ITALY',
    image: dolomitesImg,
    tagline: 'Colossal Limestone Towers & Emerald Alpine Lake Reflections',
    highlight: 'Hike classic Via Ferrata iron routes carved through solid rock and gaze upon sheer 3,000m limestone monoliths.',
    duration: '6 Days',
    altitude: '2,999 m',
    difficulty: 'Challenging',
    rating: 4.98,
    reviewCount: 519,
    estimatedCost: '€1,750',
    bestSeason: 'June – October',
    featuredPoints: ['Drei Zinnen Circuit', 'Rifugio Locatelli', 'Via Ferrata Innerkofler', 'Lake Misurina Reflections'],
  },
  {
    id: 'australia',
    country: 'AUSTRALIA',
    title: 'Mimosa Rocks & Coast',
    region: 'Southern Wilderness',
    continent: 'Oceania',
    flag: '🇦🇺',
    watermark: 'AUSTRALIA',
    image: mimosaRocksImg,
    tagline: 'Untamed Ocean Sea Stacks & Turquoise Pacific Surf',
    highlight: 'Paddle through sea caves, sleep under the Southern Cross on deserted sands, and photograph sea stacks ablaze in golden hour rays.',
    duration: '5 Days',
    altitude: '45 m',
    difficulty: 'Accessible',
    rating: 4.92,
    reviewCount: 226,
    estimatedCost: 'A$1,650',
    bestSeason: 'September – April',
    featuredPoints: ['Tidal Sea Kayaking', 'Golden Hour Stack Photography', 'Secluded Beach Bivouac', 'Marine Sanctuary Trek'],
  },
];

interface GlobalHeroSectionProps {
  onTriggerAuth: (intent: string) => void;
  onExploreItinerary: () => void;
  activeDestinationId: string;
  onSelectDestination: (destination: WorldCountryExpedition) => void;
}

export const GlobalHeroSection: React.FC<GlobalHeroSectionProps> = ({
  onTriggerAuth,
  onExploreItinerary,
  activeDestinationId,
  onSelectDestination,
}) => {
  // hoveredId controls the live reactive background transformation!
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Determine current active item (hovered takes priority for instant visual delight)
  const currentActiveIndex = WORLD_EXPEDITIONS.findIndex(
    (e) => e.id === (hoveredId || activeDestinationId)
  );
  const activeExpedition =
    WORLD_EXPEDITIONS[currentActiveIndex >= 0 ? currentActiveIndex : 0];

  // Auto-advance cards smoothly when idle
  useEffect(() => {
    if (!isAutoPlaying || hoveredId !== null) return;

    autoPlayTimerRef.current = setInterval(() => {
      const currentIdx = WORLD_EXPEDITIONS.findIndex((e) => e.id === activeDestinationId);
      const nextIdx = (currentIdx + 1) % WORLD_EXPEDITIONS.length;
      const nextExp = WORLD_EXPEDITIONS[nextIdx];
      onSelectDestination(nextExp);
      scrollToCard(nextIdx);
    }, 5500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, hoveredId, activeDestinationId, onSelectDestination]);

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const panels = container.getElementsByClassName('global-country-panel');
      if (panels[index]) {
        const panel = panels[index] as HTMLElement;
        const scrollLeft = panel.offsetLeft - container.offsetWidth / 2 + panel.offsetWidth / 2;
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
      }
    }
  };

  const handlePanelClick = (expedition: WorldCountryExpedition, index: number) => {
    onSelectDestination(expedition);
    scrollToCard(index);
  };

  const handlePrev = () => {
    const currentIdx = WORLD_EXPEDITIONS.findIndex((e) => e.id === activeDestinationId);
    const prevIdx = (currentIdx - 1 + WORLD_EXPEDITIONS.length) % WORLD_EXPEDITIONS.length;
    const prevExp = WORLD_EXPEDITIONS[prevIdx];
    onSelectDestination(prevExp);
    scrollToCard(prevIdx);
  };

  const handleNext = () => {
    const currentIdx = WORLD_EXPEDITIONS.findIndex((e) => e.id === activeDestinationId);
    const nextIdx = (currentIdx + 1) % WORLD_EXPEDITIONS.length;
    const nextExp = WORLD_EXPEDITIONS[nextIdx];
    onSelectDestination(nextExp);
    scrollToCard(nextIdx);
  };

  return (
    <section className="relative w-full min-h-[96vh] flex flex-col justify-between overflow-hidden bg-stone-950 text-white select-none">
      {/* 
        REACTIVE MULTI-COUNTRY BACKGROUND SYSTEM:
        Every country's photograph is layered with smooth cross-fade transition.
        Hovering or selecting any country card instantly cross-fades into that country's breathtaking photography!
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {WORLD_EXPEDITIONS.map((exp) => {
          const isVisible = exp.id === activeExpedition.id;
          return (
            <div
              key={exp.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
              style={{ transitionProperty: 'opacity, transform' }}
            >
              <img
                src={exp.image}
                alt={`${exp.country} - ${exp.title}`}
                className="w-full h-full object-cover object-center filter brightness-90 contrast-[1.05]"
              />
            </div>
          );
        })}

        {/* Cinematic Vignettes & Theme Lighting in #EAADC3 Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/20 to-stone-950/40" />

        {/* Ambient Glows using #EAADC3 */}
        <div 
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-1000 opacity-20"
          style={{ backgroundColor: '#EAADC3' }}
        />
      </div>

      {/* Floating Vertical Country Quick-Switch Ticker on Right Side */}
      <div className="hidden lg:flex fixed right-6 top-32 z-30 flex-col items-center gap-3 text-white/80">
        <span className="text-[10px] uppercase tracking-widest text-[#EAADC3] font-mono [writing-mode:vertical-lr] mb-1">
          WORLD EXPEDITIONS
        </span>
        {WORLD_EXPEDITIONS.map((exp) => {
          const isActive = exp.id === activeExpedition.id;
          return (
            <button
              key={exp.id}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onSelectDestination(exp)}
              className={`w-9 h-9 rounded-full border transition-all flex items-center justify-center cursor-pointer text-xs ${
                isActive
                  ? 'border-[#EAADC3] bg-[#EAADC3] text-stone-950 font-bold scale-110 shadow-lg shadow-[#EAADC3]/30'
                  : 'border-white/20 bg-stone-900/70 text-stone-300 hover:border-[#EAADC3] hover:text-white'
              }`}
              title={`${exp.country}: ${exp.title}`}
            >
              <span>{exp.flag}</span>
            </button>
          );
        })}
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#EAADC3]/50 to-transparent mt-1" />
      </div>

      {/* GIANT DYNAMIC WATERMARK: Updates with the hovered/active country name! */}
      <div className="relative z-10 w-full pt-16 md:pt-24 text-center pointer-events-none">
        <h1 
          className="text-6xl sm:text-8xl md:text-[130px] lg:text-[160px] font-light tracking-[0.25em] sm:tracking-[0.3em] font-serif uppercase transition-all duration-700 drop-shadow-md text-white/30"
        >
          {activeExpedition.watermark}
        </h1>

        {/* Country Badge & Tagline Sub-Header */}
        <div className="flex items-center justify-center gap-2 -mt-4 sm:-mt-8 md:-mt-10">
          <span className="h-[1px] w-12 bg-[#EAADC3]/80" />
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#EAADC3] font-medium flex items-center gap-1.5">
            <span>{activeExpedition.flag}</span>
            <span>{activeExpedition.country} • {activeExpedition.region}</span>
          </p>
          <span className="h-[1px] w-12 bg-[#EAADC3]/80" />
        </div>
      </div>

      {/* Reactive Destination Summary Bar */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-2 md:mt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 border border-[#EAADC3]/30 backdrop-blur-md mb-2 shadow-lg shadow-[#EAADC3]/10">
          <Sparkles className="w-3.5 h-3.5 text-[#EAADC3] animate-spin" />
          <span className="text-xs text-stone-200 font-medium">
            Active Destination: <strong className="text-white">{activeExpedition.title}</strong>
          </span>
          <span className="text-[11px] text-[#EAADC3] font-mono">({activeExpedition.duration} • {activeExpedition.altitude})</span>
        </div>
        <p className="text-sm md:text-base text-stone-200 font-light max-w-2xl mx-auto drop-shadow-md">
          {activeExpedition.highlight}
        </p>
      </div>

      {/* 
        WIDE PANELS & SCROLLABLE + REACTIVE DECK:
        Each card is for a different country!
        Hovering changes the background instantly.
      */}
      <div 
        className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-8 md:pb-12"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Header Controls for Country Panels */}
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-2 text-xs text-stone-200 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EAADC3] animate-ping" />
            <span className="text-[#EAADC3] font-semibold">Worldwide Expeditions</span>
            <span className="hidden sm:inline text-stone-400 font-light text-[11px]">
              • Hover over any country card to change background scenery
            </span>
          </div>

          {/* Navigation Controls & Book Button with #EAADC3 */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-[#EAADC3]/30 bg-stone-900/80 hover:bg-[#EAADC3] hover:text-stone-950 transition-all text-[#EAADC3] cursor-pointer shadow-md shadow-[#EAADC3]/10"
              title="Previous destination"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Book Now Action with #EAADC3 */}
            <button
              onClick={() => onTriggerAuth(`Book ${activeExpedition.country} - ${activeExpedition.title} Expedition`)}
              className="btn-floral px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Book Expedition</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-[#EAADC3]/30 bg-stone-900/80 hover:bg-[#EAADC3] hover:text-stone-950 transition-all text-[#EAADC3] cursor-pointer shadow-md shadow-[#EAADC3]/10"
              title="Next destination"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Wide Panels Track (Snap-x, Smooth, Hover Reactive Background) */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto py-3 px-2 no-scrollbar scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none' }}
        >
          {WORLD_EXPEDITIONS.map((exp, idx) => {
            const isSelected = exp.id === activeDestinationId;
            const isHovered = exp.id === hoveredId;
            const isFocused = isHovered || (isSelected && hoveredId === null);

            return (
              <div
                key={exp.id}
                onClick={() => handlePanelClick(exp, idx)}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`global-country-panel relative group cursor-pointer rounded-3xl overflow-hidden transition-all duration-500 ease-out flex-shrink-0 snap-center ${
                  isFocused
                    ? 'w-[320px] sm:w-[380px] md:w-[420px] h-[260px] sm:h-[280px] ring-2 ring-[#EAADC3] shadow-2xl shadow-[#EAADC3]/30 scale-100 z-20'
                    : 'w-[260px] sm:w-[300px] md:w-[340px] h-[240px] sm:h-[260px] opacity-75 hover:opacity-100 hover:scale-[1.02] z-10 brightness-90 hover:brightness-100 ring-1 ring-white/10 hover:ring-[#EAADC3]/50'
                }`}
              >
                {/* Panel Image */}
                <img
                  src={exp.image}
                  alt={`${exp.country} - ${exp.title}`}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                    isFocused ? 'scale-110' : 'scale-100'
                  }`}
                />

                {/* Dark Vignette Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isFocused
                      ? 'bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent'
                      : 'bg-gradient-to-t from-stone-950 via-stone-950/80 to-black/30'
                  }`}
                />

                {/* Top Badge: Country Flag & Region */}
                <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/80 border border-[#EAADC3]/40 backdrop-blur-md shadow-sm">
                    <span className="text-sm">{exp.flag}</span>
                    <span className="text-[11px] font-semibold tracking-wider text-[#EAADC3] uppercase">
                      {exp.country}
                    </span>
                  </div>

                  {isFocused ? (
                    <span className="flex items-center gap-1 text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EAADC3] text-stone-950 shadow-sm shadow-[#EAADC3]/50 animate-pulse">
                      Active View
                    </span>
                  ) : (
                    <span className="text-[10px] text-stone-300 font-mono px-2 py-0.5 rounded-full bg-stone-900/60 border border-white/10">
                      Hover To View
                    </span>
                  )}
                </div>

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-left z-10 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#EAADC3] font-medium">
                    <span>{exp.title}</span>
                    <span className="font-mono text-stone-300">{exp.duration} • {exp.altitude}</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-white group-hover:text-[#EAADC3] transition-colors leading-tight">
                      {exp.tagline}
                    </h3>
                  </div>

                  {/* Highlights Mini-Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.featuredPoints.slice(0, 2).map((pt, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-stone-900/80 border border-white/10 text-stone-300"
                      >
                        {pt}
                      </span>
                    ))}
                  </div>

                  {/* Reactive Action Footer */}
                  <div className={`pt-2 border-t border-white/15 flex items-center justify-between transition-all duration-300 ${
                    isFocused ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                  }`}>
                    <span className="text-[11px] text-[#EAADC3] font-medium flex items-center gap-1">
                      <span>Explore this route</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onTriggerAuth(`Book and customize stage: ${exp.country} (${exp.title})`);
                      }}
                      className="px-3 py-1 rounded-full bg-[#EAADC3]/20 hover:bg-[#EAADC3] text-[#EAADC3] hover:text-stone-950 border border-[#EAADC3]/40 text-[11px] font-semibold transition-all cursor-pointer"
                    >
                      Book {exp.estimatedCost}
                    </button>
                  </div>
                </div>

                {/* Glowing Border when focused */}
                {isFocused && (
                  <div className="absolute inset-0 pointer-events-none border-2 border-[#EAADC3] rounded-3xl" />
                )}
              </div>
            );
          })}
        </div>

        {/* Carousel Progress Indicators */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10 text-xs text-stone-400 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#EAADC3] animate-pulse" />
            <span>Viewing: <strong className="text-white">{activeExpedition.flag} {activeExpedition.country}</strong> – {activeExpedition.title}</span>
          </div>

          <div className="flex items-center gap-2">
            {WORLD_EXPEDITIONS.map((exp, i) => (
              <button
                key={exp.id}
                onClick={() => handlePanelClick(exp, i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  exp.id === activeExpedition.id
                    ? 'w-8 bg-[#EAADC3] shadow-sm shadow-[#EAADC3]/50'
                    : 'w-2 bg-white/30 hover:bg-[#EAADC3]/50'
                }`}
                title={`Go to ${exp.country}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                const el = document.getElementById('about');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#EAADC3] hover:underline transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Explore Expedition Route</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
