import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Compass, ArrowRight, Star, Clock, Mountain } from 'lucide-react';
import { DESTINATIONS, Destination } from '../data/destinations';

interface HeroCarouselProps {
  onNavigateLogin: (reason: string) => void;
  onSelectDestination: (destination: Destination) => void;
  currentDestination: Destination;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onNavigateLogin,
  onSelectDestination,
  currentDestination,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Sync when currentDestination changes externally
  useEffect(() => {
    const idx = DESTINATIONS.findIndex((d) => d.id === currentDestination.id);
    if (idx !== -1 && idx !== currentIndex) {
      setCurrentIndex(idx);
    }
  }, [currentDestination]);

  const total = DESTINATIONS.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = (prev - 1 + total) % total;
      onSelectDestination(DESTINATIONS[nextIndex]);
      return nextIndex;
    });
  }, [total, onSelectDestination]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % total;
      onSelectDestination(DESTINATIONS[nextIndex]);
      return nextIndex;
    });
  }, [total, onSelectDestination]);

  const handleSelectCard = (index: number) => {
    setCurrentIndex(index);
    onSelectDestination(DESTINATIONS[index]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Subtle auto-rotation when user is not hovering
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const activeDest = DESTINATIONS[currentIndex];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-6 pb-16 overflow-hidden bg-gradient-to-b from-[#080b0f] via-[#0c1017] to-[#080b0f]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Background Glow behind active card */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[680px] h-[680px] bg-amber-500/10 rounded-full blur-[140px] transform -translate-y-12" />
        <div className="absolute top-1/4 w-[480px] h-[480px] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Hero Header Minimal Editorial Kicker */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 pb-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-amber-400 mb-2">
          <span>Curated Expeditions</span>
          <span aria-hidden="true">·</span>
          <span>Season 2026/2027</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance max-w-4xl mx-auto">
          Explore the Untamed World Together
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Dynamic 3D route planning, live collaborative itinerary sync, and shared group exploration.
        </p>
      </div>

      {/* 3D Cylindrical Perspective Carousel */}
      <div className="relative z-20 w-full max-w-6xl mx-auto my-auto px-4 py-8 flex items-center justify-center">
        {/* Carousel Container */}
        <div className="relative w-full h-[460px] sm:h-[520px] md:h-[580px] flex items-center justify-center perspective-carousel">
          {DESTINATIONS.map((dest, index) => {
            // Calculate circular offset: -2, -1, 0, 1, 2
            let offset = index - currentIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            // Compute 3D values based on offset
            let translateX = 0;
            let rotateY = 0;
            let scale = 1;
            let zIndex = 20;
            let opacity = 1;
            let brightness = 1;

            if (offset === 0) {
              translateX = 0;
              rotateY = 0;
              scale = 1.05;
              zIndex = 40;
              opacity = 1;
              brightness = 1;
            } else if (offset === 1) {
              translateX = 280;
              rotateY = -28;
              scale = 0.88;
              zIndex = 25;
              opacity = 0.85;
              brightness = 0.65;
            } else if (offset === -1) {
              translateX = -280;
              rotateY = 28;
              scale = 0.88;
              zIndex = 25;
              opacity = 0.85;
              brightness = 0.65;
            } else if (offset === 2) {
              translateX = 490;
              rotateY = -46;
              scale = 0.72;
              zIndex = 10;
              opacity = 0.55;
              brightness = 0.4;
            } else if (offset === -2) {
              translateX = -490;
              rotateY = 46;
              scale = 0.72;
              zIndex = 10;
              opacity = 0.55;
              brightness = 0.4;
            }

            return (
              <div
                key={dest.id}
                onClick={() => {
                  if (!isCenter) {
                    handleSelectCard(index);
                  }
                }}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${isCenter ? '50px' : '-20px'}) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                  filter: `brightness(${brightness})`,
                  transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease, filter 500ms ease',
                }}
                className={`absolute w-[240px] sm:w-[280px] md:w-[320px] h-[400px] sm:h-[460px] md:h-[510px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl select-none group border ${
                  isCenter ? 'border-amber-400/40 ring-2 ring-amber-400/20' : 'border-white/10'
                }`}
              >
                {/* Background Image */}
                <img
                  src={dest.image}
                  alt={`${dest.title} ${dest.country}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle vignette and gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />

                {/* Card Content Overlay */}
                <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between text-white">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-amber-300 drop-shadow">
                      {dest.category}
                    </span>
                    <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-semibold text-white border border-white/10">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span>{dest.rating}</span>
                    </div>
                  </div>

                  {/* Card Center & Bottom Typography (Matches the video!) */}
                  <div className="text-center my-auto px-2">
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-wider uppercase text-white drop-shadow-md leading-tight">
                      {dest.title}
                      <span className="block text-xl sm:text-2xl font-light tracking-widest text-slate-200 mt-0.5">
                        – {dest.country}
                      </span>
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 italic font-light drop-shadow">
                      “{dest.tagline}”
                    </p>
                  </div>

                  {/* Card Footer Details */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-around text-[11px] text-slate-300 border-t border-white/15 pt-2.5">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>{dest.duration}</span>
                      </div>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <div className="flex items-center gap-1">
                        <Mountain className="w-3.5 h-3.5 text-amber-400" />
                        <span>{dest.altitude}</span>
                      </div>
                    </div>

                    {isCenter && (
                      <div className="pt-1 flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigateLogin(`Book customized expedition to ${dest.title}, ${dest.country}`);
                          }}
                          className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 transform active:scale-95 transition-all"
                        >
                          <span>Explore Itinerary</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Circular Arrow Navigation (Matching `<` and `>` in the video) */}
        <button
          onClick={handlePrev}
          aria-label="Previous destination"
          className="absolute left-2 sm:left-6 md:left-12 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-xl group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next destination"
          className="absolute right-2 sm:right-6 md:right-12 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-xl group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Bottom Destination Indicators & Quick Switcher */}
      <div className="relative z-30 max-w-xl mx-auto px-4 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2.5">
          {DESTINATIONS.map((dest, i) => (
            <button
              key={dest.id}
              onClick={() => handleSelectCard(i)}
              aria-label={`Go to ${dest.title}`}
              className={`transition-all duration-300 rounded-full ${
                i === currentIndex
                  ? 'w-8 h-2 bg-amber-400'
                  : 'w-2 h-2 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="font-semibold text-slate-200 uppercase tracking-wider">
            {activeDest.title}, {activeDest.country}
          </span>
          <span aria-hidden="true">·</span>
          <span>{activeDest.estimatedCost}</span>
          <span aria-hidden="true">·</span>
          <button
            onClick={() => onNavigateLogin(`Sign in to reserve slots for ${activeDest.title}`)}
            className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 cursor-pointer"
          >
            Instant Hold
          </button>
        </div>
      </div>

      {/* Drifting Mist & Clouds Layer (Matching the video atmospheric fog!) */}
      <div className="absolute -bottom-10 inset-x-0 h-48 pointer-events-none z-20 overflow-hidden">
        {/* Layer 1 - Slow Mist */}
        <div
          className="absolute inset-0 animate-fog-slow opacity-50 mix-blend-screen"
          style={{
            background:
              'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.22) 0%, rgba(200, 220, 240, 0.12) 40%, transparent 75%)',
            filter: 'blur(35px)',
          }}
        />
        {/* Layer 2 - Faster Mist */}
        <div
          className="absolute inset-0 animate-fog-fast opacity-40 mix-blend-screen"
          style={{
            background:
              'radial-gradient(ellipse at 40% 90%, rgba(240, 245, 255, 0.18) 0%, rgba(180, 200, 230, 0.08) 50%, transparent 80%)',
            filter: 'blur(28px)',
          }}
        />
        {/* Dark ground vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b0f] via-[#080b0f]/60 to-transparent" />
      </div>
    </section>
  );
};
