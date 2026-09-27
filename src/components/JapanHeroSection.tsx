import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Camera, 
  Utensils, 
  HeartHandshake, 
  Compass, 
  ArrowRight,
  Flame
} from 'lucide-react';
import japanHeroBg from '@/src/assets/images/japan_hero_bg_1790465455426.jpg';
import pagodaFujiSakura from '@/src/assets/images/pagoda_fuji_sakura_1790465473618.jpg';
import osakaCastleThumb from '@/src/assets/images/osaka_castle_thumb_1790465487052.jpg';
import tokyoNeonAlley from '@/src/assets/images/tokyo_neon_alley_1790465499670.jpg';
import kyotoThumb from '@/src/assets/images/kyoto_japan_hero_1790456521006.jpg';

interface JapanHeroSectionProps {
  onTriggerAuth: (intent: string) => void;
  onExploreItinerary: () => void;
}

export interface WideHeroPanel {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  highlight: string;
  stats: string;
  location: string;
  icon: React.ReactNode;
}

const PANELS_DATA: WideHeroPanel[] = [
  {
    id: 'cities',
    title: '3 Iconic Cities in Japan',
    subtitle: 'Osaka • Kyoto • Tokyo',
    badge: 'Golden Triangle',
    image: osakaCastleThumb,
    highlight: 'Experience feudal samurai castles, thousand-torii shrines & futuristic neon skyscrapers across Japan’s top three cities.',
    stats: '10 Days • 3 Regional Passes',
    location: 'Kansai to Kanto Express',
    icon: <MapPin className="w-4 h-4 text-[#EAADC3]" />,
  },
  {
    id: 'days',
    title: '10 Days Perfect Rhythm',
    subtitle: 'Curated Sakura & Autumn Pacing',
    badge: 'Zero Rush Pacing',
    image: kyotoThumb,
    highlight: 'Calculated transit schedules, luggage forward service, and private Shinkansen bullet train green-cars so you never feel rushed.',
    stats: '300 km/h Shinkansen • Ryokan Stay',
    location: 'Osaka → Kyoto → Hakone → Tokyo',
    icon: <Calendar className="w-4 h-4 text-[#EAADC3]" />,
  },
  {
    id: 'photos',
    title: 'Gigabytes of Breathtaking Photos',
    subtitle: 'Mount Fuji, Pagodas & Sakura',
    badge: 'Pro Photography Guided',
    image: pagodaFujiSakura,
    highlight: 'Photographer-guided dawn excursions to Chureito Pagoda, Arashiyama Sagano Bamboo Grove, and Shibuya Sky sunset decks.',
    stats: 'Golden Hour Access • 4K Drone Footage',
    location: 'Mount Fuji Viewpoints & Gion',
    icon: <Camera className="w-4 h-4 text-[#EAADC3]" />,
  },
  {
    id: 'ramen',
    title: 'Eat Authentic Ramen & Wagyu',
    subtitle: 'Michelin Stalls & Hidden Yokocho',
    badge: 'Culinary Masterclass',
    image: tokyoNeonAlley,
    highlight: 'From smoky yakitori skewers in Omoide Yokocho to private Kaiseki banquets in Kyoto and melt-in-your-mouth A5 Kobe beef.',
    stats: '14 Curated Feasts • Private Sake Tasting',
    location: 'Dotonbori & Shinjuku Alleys',
    icon: <Utensils className="w-4 h-4 text-[#EAADC3]" />,
  },
  {
    id: 'vibe',
    title: 'Enjoy The Authentic Zen Vibe',
    subtitle: 'Cedar Onsen, Ryokan & Monasteries',
    badge: 'Mineral Hot Springs',
    image: japanHeroBg,
    highlight: 'Soak in private volcanic mineral onsens in Hakone overlooking snowcapped peaks, sleep on tatami mats, and drink stone-ground matcha.',
    stats: '100% Mineral Onsen • 400-Year Heritage',
    location: 'Hakone Valley & Uji Kyoto',
    icon: <HeartHandshake className="w-4 h-4 text-[#EAADC3]" />,
  },
];

export const JapanHeroSection: React.FC<JapanHeroSectionProps> = ({
  onTriggerAuth,
  onExploreItinerary,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredPanelId, setHoveredPanelId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance cards continuously like previous version, keeping motion
  useEffect(() => {
    if (!isAutoPlaying) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % PANELS_DATA.length;
        scrollToPanel(next);
        return next;
      });
    }, 4200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying]);

  const scrollToPanel = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const panels = container.getElementsByClassName('wide-hero-panel');
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

  const handleSelectPanel = (index: number) => {
    setActiveIndex(index);
    scrollToPanel(index);
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + PANELS_DATA.length) % PANELS_DATA.length;
    handleSelectPanel(prev);
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % PANELS_DATA.length;
    handleSelectPanel(next);
  };

  const activePanel = PANELS_DATA[activeIndex];

  return (
    <section className="relative w-full min-h-[96vh] flex flex-col justify-between overflow-hidden bg-[#0c0a0c] text-white select-none">
      {/* Background Image: Mount Fuji sunrise with soft #EAADC3 floral glow */}
      <div className="absolute inset-0 z-0">
        <img
          src={japanHeroBg}
          alt="Mount Fuji sunrise Japan tour"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-[1.05]"
        />
        {/* Floral Pink & Midnight Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a0c] via-[#0c0a0c]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a0c]/85 via-[#0c0a0c]/30 to-[#0c0a0c]/40" />

        {/* Floating #EAADC3 Petal Ambience */}
        <div 
          className="absolute top-10 left-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none animate-pulse" 
          style={{ backgroundColor: 'rgba(234, 173, 195, 0.12)' }}
        />
        <div 
          className="absolute top-1/3 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none" 
          style={{ backgroundColor: 'rgba(234, 173, 195, 0.15)' }}
        />
      </div>

      {/* Floating Vertical Social Indicators */}
      <div className="hidden lg:flex fixed right-6 top-36 z-30 flex-col items-center gap-4 text-white/70">
        <button
          onClick={() => onTriggerAuth('Follow TripForge Japan on Instagram')}
          title="TripForge Instagram"
          className="w-10 h-10 rounded-full border border-[#EAADC3]/30 bg-[#161214]/80 backdrop-blur-md flex items-center justify-center hover:text-[#EAADC3] hover:border-[#EAADC3] hover:scale-110 hover:shadow-lg hover:shadow-[#EAADC3]/30 transition-all cursor-pointer"
        >
          <span className="text-xs font-semibold text-[#EAADC3]">IG</span>
        </button>
        <button
          onClick={() => onTriggerAuth('Join Japan Tour Telegram Channel')}
          title="TripForge Telegram"
          className="w-10 h-10 rounded-full border border-[#EAADC3]/30 bg-[#161214]/80 backdrop-blur-md flex items-center justify-center hover:text-[#EAADC3] hover:border-[#EAADC3] hover:scale-110 hover:shadow-lg hover:shadow-[#EAADC3]/30 transition-all cursor-pointer"
        >
          <span className="text-xs font-semibold text-[#EAADC3]">TG</span>
        </button>
        <button
          onClick={() => onTriggerAuth('Chat with Tour Curators on WhatsApp')}
          title="TripForge WhatsApp"
          className="w-10 h-10 rounded-full border border-[#EAADC3]/30 bg-[#161214]/80 backdrop-blur-md flex items-center justify-center hover:text-[#EAADC3] hover:border-[#EAADC3] hover:scale-110 hover:shadow-lg hover:shadow-[#EAADC3]/30 transition-all cursor-pointer"
        >
          <span className="text-xs font-semibold text-[#EAADC3]">WA</span>
        </button>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#EAADC3]/40 to-transparent mt-2" />
      </div>

      {/* GIANT "JAPAN" WATERMARK */}
      <div className="relative z-10 w-full pt-16 md:pt-24 text-center pointer-events-none">
        <h1 className="text-6xl sm:text-8xl md:text-[140px] lg:text-[170px] font-light tracking-[0.25em] sm:tracking-[0.35em] text-[#EAADC3]/25 font-serif uppercase transition-all duration-700 drop-shadow-sm">
          JAPAN
        </h1>
        <div className="flex items-center justify-center gap-2 -mt-4 sm:-mt-8 md:-mt-10">
          <span className="h-[1px] w-12 bg-[#EAADC3]" />
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-[#EAADC3] font-medium">
            🌸 Sakura Floral Tour • #EAADC3 Edition
          </p>
          <span className="h-[1px] w-12 bg-[#EAADC3]" />
        </div>
      </div>

      {/* Active Panel Reactive Highlight Bar */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-2 md:mt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181115]/80 border border-[#EAADC3]/30 backdrop-blur-md mb-2 shadow-lg shadow-[#EAADC3]/10">
          <Sparkles className="w-3.5 h-3.5 text-[#EAADC3] animate-spin" />
          <span className="text-xs text-[#EAADC3] font-medium">
            Stage {activeIndex + 1} of 5: <strong className="text-white">{activePanel.title}</strong>
          </span>
          <span className="text-[10px] text-[#EAADC3]/80 font-mono">({activePanel.stats})</span>
        </div>
        <p className="text-sm md:text-base text-stone-200 font-light max-w-2xl mx-auto drop-shadow-md">
          {activePanel.highlight}
        </p>
      </div>

      {/* WIDE PANELS & SCROLLABLE + REACTIVE DECK */}
      <div 
        className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-8 md:pb-12"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Navigation & Controls Bar Above Panels */}
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-2 text-xs text-[#EAADC3] font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EAADC3] animate-ping" />
            <span>Interactive Wide Panels</span>
            <span className="hidden sm:inline text-stone-400 font-light text-[11px]">
              • Scroll, drag or click to inspect
            </span>
          </div>

          {/* Action Button & Navigation Controls with #EAADC3 Theme */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-[#EAADC3]/30 bg-[#161214]/80 hover:bg-[#EAADC3] hover:text-[#24131b] hover:border-[#EAADC3] transition-all text-[#EAADC3] cursor-pointer shadow-md shadow-black/40"
              title="Previous panel"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Main #EAADC3 Button */}
            <button
              onClick={() => onTriggerAuth(`Book Japan Tour - ${activePanel.title}`)}
              className="btn-floral px-7 py-2.5 rounded-full text-xs tracking-wider uppercase flex items-center gap-2 group cursor-pointer border border-[#EAADC3]"
            >
              <span>Book Now</span>
              <Sparkles className="w-3.5 h-3.5 text-[#24131b] group-hover:rotate-12 transition-transform" />
            </button>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-[#EAADC3]/30 bg-[#161214]/80 hover:bg-[#EAADC3] hover:text-[#24131b] hover:border-[#EAADC3] transition-all text-[#EAADC3] cursor-pointer shadow-md shadow-black/40"
              title="Next panel"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Wide Panels Track */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto py-3 px-2 no-scrollbar scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none' }}
        >
          {PANELS_DATA.map((panel, idx) => {
            const isActive = idx === activeIndex;
            const isHovered = hoveredPanelId === panel.id;

            return (
              <div
                key={panel.id}
                onClick={() => handleSelectPanel(idx)}
                onMouseEnter={() => setHoveredPanelId(panel.id)}
                onMouseLeave={() => setHoveredPanelId(null)}
                className={`wide-hero-panel relative group cursor-pointer rounded-3xl overflow-hidden transition-all duration-500 ease-out flex-shrink-0 snap-center ${
                  isActive
                    ? 'w-[320px] sm:w-[380px] md:w-[440px] h-[260px] sm:h-[280px] ring-2 ring-[#EAADC3] shadow-2xl scale-100 z-20'
                    : 'w-[260px] sm:w-[310px] md:w-[350px] h-[240px] sm:h-[260px] opacity-80 hover:opacity-100 hover:scale-[1.02] z-10 brightness-90 hover:brightness-100 ring-1 ring-white/10 hover:ring-[#EAADC3]/60'
                }`}
                style={isActive ? { boxShadow: '0 20px 35px -5px rgba(234, 173, 195, 0.3)' } : {}}
              >
                {/* Panel Image Background */}
                <img
                  src={panel.image}
                  alt={panel.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                    isActive || isHovered ? 'scale-110' : 'scale-100'
                  }`}
                />

                {/* Dark Gradient Overlay with #EAADC3 Rim Accent */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isActive
                      ? 'bg-gradient-to-t from-[#0c0a0c] via-[#0c0a0c]/70 to-[#EAADC3]/10'
                      : 'bg-gradient-to-t from-[#0c0a0c] via-[#0c0a0c]/80 to-transparent'
                  }`}
                />

                {/* Top Badge & Reactive Pill */}
                <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161214]/85 border border-[#EAADC3]/40 backdrop-blur-md shadow-sm">
                    {panel.icon}
                    <span className="text-[11px] font-semibold tracking-wide text-[#EAADC3] uppercase">
                      {panel.badge}
                    </span>
                  </div>

                  {isActive ? (
                    <span className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#EAADC3] text-[#24131b] shadow-md shadow-[#EAADC3]/40 animate-pulse">
                      <Flame className="w-3 h-3 text-[#24131b]" />
                      Active Stage
                    </span>
                  ) : (
                    <span className="text-[10px] text-stone-300 font-mono px-2 py-0.5 rounded-full bg-[#161214]/70 border border-white/10">
                      Tap to Focus
                    </span>
                  )}
                </div>

                {/* Bottom Content Area: Wide Landscape Layout */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-left z-10 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#EAADC3] font-medium">
                    <span>{panel.location}</span>
                    <span className="font-mono text-stone-300">{panel.stats}</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-white group-hover:text-[#EAADC3] transition-colors leading-tight">
                      {panel.title}
                    </h3>
                    <p className="text-xs text-stone-300 font-light line-clamp-2 mt-1">
                      {panel.subtitle}
                    </p>
                  </div>

                  {/* Reactive Action Footer on Hover / Active */}
                  <div className={`pt-2 border-t border-white/15 flex items-center justify-between transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                  }`}>
                    <span className="text-[11px] text-[#EAADC3] font-medium flex items-center gap-1">
                      <span>Explore this feature</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onTriggerAuth(`Book and customize stage: ${panel.title}`);
                      }}
                      className="px-3 py-1 rounded-full bg-[#EAADC3] text-[#24131b] hover:bg-[#f5cfdd] text-[11px] font-semibold transition-all cursor-pointer shadow-sm shadow-[#EAADC3]/30"
                    >
                      Quick Book
                    </button>
                  </div>
                </div>

                {/* Active Glowing Border Effect */}
                {isActive && (
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
            <span>Currently Viewing: <strong className="text-[#EAADC3]">{activePanel.title}</strong></span>
          </div>

          <div className="flex items-center gap-2">
            {PANELS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelectPanel(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === activeIndex 
                    ? 'w-8 bg-[#EAADC3] shadow-md shadow-[#EAADC3]/50' 
                    : 'w-2 bg-white/30 hover:bg-[#EAADC3]/60'
                }`}
                title={`Go to panel ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onExploreItinerary}
              className="text-[#EAADC3] hover:underline transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Full 10-Day Plan</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
