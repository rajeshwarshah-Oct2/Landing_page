import React, { useState } from 'react';
import { ITINERARY_DAYS, ItineraryDay } from '@/src/data/japanTourData';
import { 
  MapPin, 
  Clock, 
  GitFork, 
  Download, 
  PlusCircle, 
  Footprints, 
  Sparkles,
  Train,
  Coffee,
  Camera,
  Coins
} from 'lucide-react';

interface InteractiveItinerarySectionProps {
  onTriggerAuth: (intent: string) => void;
  activeCityFilter?: string;
}

export const InteractiveItinerarySection: React.FC<InteractiveItinerarySectionProps> = ({
  onTriggerAuth,
}) => {
  const [selectedDayNum, setSelectedDayNum] = useState<number>(1);
  const [customInclusions, setCustomInclusions] = useState({
    pocketWifi: true,
    shinkansenGreenCar: true,
    teamLabPass: true,
    onsenPrivateBath: false,
    kobeBeefDinner: false,
  });

  const selectedDay: ItineraryDay =
    ITINERARY_DAYS.find((d) => d.day === selectedDayNum) || ITINERARY_DAYS[0];

  // Calculate dynamic estimated extra budget
  const basePricePerPerson = 2850;
  const addonsTotal =
    (customInclusions.pocketWifi ? 45 : 0) +
    (customInclusions.shinkansenGreenCar ? 120 : 0) +
    (customInclusions.teamLabPass ? 35 : 0) +
    (customInclusions.onsenPrivateBath ? 75 : 0) +
    (customInclusions.kobeBeefDinner ? 110 : 0);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'transit':
        return <Train className="w-4 h-4 text-[#EAADC3]" />;
      case 'food':
        return <Coffee className="w-4 h-4 text-[#EAADC3]" />;
      case 'culture':
        return <Sparkles className="w-4 h-4 text-[#EAADC3]" />;
      case 'nature':
        return <Camera className="w-4 h-4 text-[#EAADC3]" />;
      default:
        return <MapPin className="w-4 h-4 text-[#EAADC3]" />;
    }
  };

  return (
    <section id="itinerary" className="relative w-full py-20 bg-[#0c0a0c] text-white border-t border-[#EAADC3]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header: — INTERACTIVE ITINERARY — */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-r from-transparent to-[#EAADC3]/60" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-[0.2em] uppercase font-light text-stone-100 text-center">
            Interactive Itinerary
          </h2>
          <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-l from-transparent to-[#EAADC3]/60" />
        </div>
        <p className="text-center text-sm text-stone-400 max-w-2xl mx-auto mb-12 font-light">
          Explore day-by-day expedition checkpoints across Osaka, Kyoto, Hakone, and Tokyo. Click any tool to fork or customize your team’s schedule.
        </p>

        {/* 10-Day Horizontal Navigation Bar in #EAADC3 */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {ITINERARY_DAYS.map((item) => {
            const isSelected = item.day === selectedDayNum;
            return (
              <button
                key={item.day}
                onClick={() => setSelectedDayNum(item.day)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-2xl border text-xs font-medium transition-all cursor-pointer flex flex-col items-center gap-1 ${
                  isSelected
                    ? 'bg-[#EAADC3] text-[#24131b] border-[#EAADC3] shadow-lg font-bold scale-105'
                    : 'bg-[#161214]/80 text-stone-300 border-stone-800 hover:border-[#EAADC3]/50 hover:text-white'
                }`}
                style={isSelected ? { boxShadow: '0 8px 20px -3px rgba(234, 173, 195, 0.4)' } : {}}
              >
                <span className="uppercase tracking-wider text-[10px] opacity-85">
                  Day {item.day}
                </span>
                <span className="truncate max-w-[80px] font-sans">
                  {item.city.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Day Schedule Deep Dive & Route Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Day Overview & Activities */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#161214]/80 border border-[#EAADC3]/20 backdrop-blur-sm space-y-6 shadow-xl">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-stone-800 pb-4">
              <div>
                <span className="text-xs font-semibold text-[#EAADC3] uppercase tracking-widest block mb-1">
                  Day 0{selectedDay.day} • {selectedDay.city}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-light text-white">
                  {selectedDay.title}
                </h3>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-[#20161b] text-[#EAADC3] border border-[#EAADC3]/30">
                {selectedDay.timeSlot}
              </span>
            </div>

            <p className="text-sm text-stone-300 font-light leading-relaxed">
              {selectedDay.description}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#0c0a0c]/80 border border-stone-800 text-xs">
              <div className="flex items-center gap-2">
                <Footprints className="w-4 h-4 text-[#EAADC3]" />
                <span className="text-stone-300">{selectedDay.walkDistance}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#EAADC3]" />
                <span className="text-stone-300">Paced Morning to Evening</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-[#EAADC3]" />
                <span className="text-stone-300">Curated Sakura Spots</span>
              </div>
            </div>

            {/* Time-Stamped Activities */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-widest text-[#EAADC3] font-semibold">
                Scheduled Stops & Cultural Immersions
              </h4>
              <div className="space-y-2.5">
                {selectedDay.activities.map((act, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-3.5 rounded-2xl bg-[#1b1518]/90 border border-stone-800 hover:border-[#EAADC3]/50 transition-colors flex items-start justify-between gap-3 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-[#251b21] border border-[#EAADC3]/20 mt-0.5">
                        {getCategoryIcon(act.category)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-[#EAADC3] font-semibold">
                            {act.time}
                          </span>
                          <span className="text-sm font-medium text-white">
                            {act.title}
                          </span>
                        </div>
                        <p className="text-xs text-stone-400 mt-0.5">
                          {act.note}
                        </p>
                      </div>
                    </div>
                    {act.costJpy > 0 && (
                      <span className="text-[11px] text-[#EAADC3] font-mono whitespace-nowrap bg-[#251b21] px-2 py-0.5 rounded-lg border border-[#EAADC3]/20">
                        ¥{act.costJpy.toLocaleString()}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tip Box in #EAADC3 */}
            <div className="p-4 rounded-2xl bg-[#EAADC3]/10 border border-[#EAADC3]/30 text-xs text-[#f5cfdd] flex items-start gap-3">
              <span className="text-base">🌸</span>
              <p>
                <strong>Sakura Expedition Tip:</strong> {selectedDay.tips}
              </p>
            </div>

            {/* Interactive Actions in #EAADC3 */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-800">
              <button
                onClick={() => onTriggerAuth(`Fork and customize Day ${selectedDay.day} (${selectedDay.city}) Itinerary`)}
                className="btn-floral px-5 py-2.5 rounded-full text-xs flex items-center gap-2 cursor-pointer border border-[#EAADC3]"
              >
                <GitFork className="w-3.5 h-3.5 text-[#24131b]" />
                <span>Fork Day {selectedDay.day} Route</span>
              </button>

              <button
                onClick={() => onTriggerAuth(`Download Offline GPX Trail Maps for Day ${selectedDay.day}`)}
                className="btn-floral-outline px-4 py-2.5 rounded-full text-xs flex items-center gap-2 cursor-pointer font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Offline GPX & Maps</span>
              </button>

              <button
                onClick={() => onTriggerAuth(`Add Custom Activity Stop to Day ${selectedDay.day}`)}
                className="btn-floral-outline px-4 py-2.5 rounded-full text-xs flex items-center gap-2 cursor-pointer font-medium"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Add Custom Stop</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Route Estimator & Custom Inclusions */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-[#161214]/80 border border-[#EAADC3]/20 backdrop-blur-sm space-y-5 shadow-xl">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-[#EAADC3]" />
                <h4 className="text-base font-serif font-light text-white">
                  Expedition Estimator
                </h4>
              </div>

              <div className="p-4 rounded-2xl bg-[#0c0a0c]/80 border border-[#EAADC3]/20 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-stone-400">Base Tour Price:</span>
                  <span className="text-sm font-semibold text-white font-mono">${basePricePerPerson}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-stone-400">Add-on Upgrades:</span>
                  <span className="text-sm text-[#EAADC3] font-mono">+${addonsTotal}</span>
                </div>
                <div className="border-t border-stone-800 pt-2 flex justify-between items-baseline">
                  <span className="text-xs text-stone-300 font-medium">Total Estimate:</span>
                  <span className="text-lg font-bold text-[#EAADC3] font-mono">
                    ${basePricePerPerson + addonsTotal}
                  </span>
                </div>
              </div>

              {/* Toggles for inclusions with #EAADC3 accent */}
              <div className="space-y-3">
                <span className="text-xs text-[#EAADC3] uppercase tracking-wider font-semibold block">
                  Customize Add-ons
                </span>

                <label className="flex items-center justify-between text-xs text-stone-300 cursor-pointer">
                  <span>Pocket 5G Wi-Fi Device</span>
                  <input
                    type="checkbox"
                    checked={customInclusions.pocketWifi}
                    onChange={(e) => setCustomInclusions({ ...customInclusions, pocketWifi: e.target.checked })}
                    className="accent-[#EAADC3] rounded"
                  />
                </label>

                <label className="flex items-center justify-between text-xs text-stone-300 cursor-pointer">
                  <span>Shinkansen Green-Car Pass</span>
                  <input
                    type="checkbox"
                    checked={customInclusions.shinkansenGreenCar}
                    onChange={(e) => setCustomInclusions({ ...customInclusions, shinkansenGreenCar: e.target.checked })}
                    className="accent-[#EAADC3] rounded"
                  />
                </label>

                <label className="flex items-center justify-between text-xs text-stone-300 cursor-pointer">
                  <span>teamLab Borderless VIP Pass</span>
                  <input
                    type="checkbox"
                    checked={customInclusions.teamLabPass}
                    onChange={(e) => setCustomInclusions({ ...customInclusions, teamLabPass: e.target.checked })}
                    className="accent-[#EAADC3] rounded"
                  />
                </label>

                <label className="flex items-center justify-between text-xs text-stone-300 cursor-pointer">
                  <span>Private Onsen Rotenburo Bath</span>
                  <input
                    type="checkbox"
                    checked={customInclusions.onsenPrivateBath}
                    onChange={(e) => setCustomInclusions({ ...customInclusions, onsenPrivateBath: e.target.checked })}
                    className="accent-[#EAADC3] rounded"
                  />
                </label>

                <label className="flex items-center justify-between text-xs text-stone-300 cursor-pointer">
                  <span>Kobe Beef Teppanyaki Dinner</span>
                  <input
                    type="checkbox"
                    checked={customInclusions.kobeBeefDinner}
                    onChange={(e) => setCustomInclusions({ ...customInclusions, kobeBeefDinner: e.target.checked })}
                    className="accent-[#EAADC3] rounded"
                  />
                </label>
              </div>

              {/* Reserve Button in #EAADC3 */}
              <button
                onClick={() => onTriggerAuth(`Lock In Calculated $${basePricePerPerson + addonsTotal} Japan Expedition Package`)}
                className="btn-floral w-full py-3.5 rounded-full text-xs tracking-wider uppercase transition-all cursor-pointer border border-[#EAADC3]"
              >
                Reserve With These Inclusions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
