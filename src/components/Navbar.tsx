import React, { useState } from 'react';
import { Globe, User, LogOut, Sparkles, ChevronDown } from 'lucide-react';
import { WORLD_EXPEDITIONS, WorldCountryExpedition } from './GlobalHeroSection';

interface NavbarProps {
  onTriggerAuth: (intent: string) => void;
  isLoggedIn: boolean;
  userName: string;
  onLogout: () => void;
  onNavigateDashboard: () => void;
  onNavigateHome: () => void;
  currentView: 'landing' | 'login' | 'dashboard';
  activeDestinationId?: string;
  onSelectDestination?: (dest: WorldCountryExpedition) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onTriggerAuth,
  isLoggedIn,
  userName,
  onLogout,
  onNavigateDashboard,
  onNavigateHome,
  currentView,
  activeDestinationId = 'japan',
  onSelectDestination,
}) => {
  const [showCountryMenu, setShowCountryMenu] = useState(false);

  const activeExp = WORLD_EXPEDITIONS.find((e) => e.id === activeDestinationId) || WORLD_EXPEDITIONS[0];

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <nav className="flex items-center justify-between px-5 sm:px-8 py-3 rounded-full bg-stone-950/80 border border-[#EAADC3]/25 backdrop-blur-xl shadow-2xl text-white">
          {/* Logo with Global Expedition Branding */}
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-stone-900 border border-[#EAADC3]/40 flex items-center justify-center group-hover:border-[#EAADC3] group-hover:shadow-lg group-hover:shadow-[#EAADC3]/30 transition-all">
                <Globe className="w-4 h-4 text-[#EAADC3] group-hover:rotate-45 transition-transform" />
              </div>
              <div className="text-left">
                <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white font-serif">
                  TRIPFORGE
                </span>
                <span className="hidden sm:inline text-[9px] text-[#EAADC3] font-mono tracking-wider ml-1.5 opacity-90">
                  GLOBAL EXPEDITIONS
                </span>
              </div>
            </button>

            {/* Country Selector Quick Dropdown */}
            {onSelectDestination && (
              <div className="relative hidden lg:block ml-2">
                <button
                  onClick={() => setShowCountryMenu(!showCountryMenu)}
                  className="px-3 py-1 rounded-full bg-stone-900/90 border border-[#EAADC3]/30 text-xs text-stone-200 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{activeExp.flag}</span>
                  <span className="font-semibold text-[#EAADC3]">{activeExp.country}</span>
                  <ChevronDown className="w-3 h-3 text-stone-400" />
                </button>

                {showCountryMenu && (
                  <div className="absolute left-0 mt-2 w-48 rounded-2xl bg-stone-900 border border-[#EAADC3]/30 shadow-2xl p-1.5 space-y-1 z-50 backdrop-blur-xl">
                    {WORLD_EXPEDITIONS.map((exp) => (
                      <button
                        key={exp.id}
                        onClick={() => {
                          onSelectDestination(exp);
                          setShowCountryMenu(false);
                        }}
                        className={`w-full px-3 py-2 rounded-xl text-left text-xs flex items-center justify-between cursor-pointer transition-colors ${
                          exp.id === activeDestinationId
                            ? 'bg-[#EAADC3] text-stone-950 font-bold'
                            : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{exp.flag}</span>
                          <span>{exp.country}</span>
                        </span>
                        <span className="text-[10px] opacity-75">{exp.duration}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider text-stone-300">
            <a
              href="#destinations"
              className="hover:text-[#EAADC3] transition-colors cursor-pointer"
            >
              Destinations
            </a>
            <a
              href="#about"
              className="hover:text-[#EAADC3] transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="#contacts"
              className="hover:text-[#EAADC3] transition-colors cursor-pointer"
            >
              Contacts
            </a>
          </div>

          {/* Right Action: Pill "Book" button with #EAADC3 */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={onNavigateDashboard}
                  className="px-3 py-1.5 rounded-full bg-stone-900 border border-[#EAADC3]/40 text-[#EAADC3] text-xs flex items-center gap-1.5 hover:bg-stone-800 transition-all cursor-pointer shadow-sm shadow-[#EAADC3]/20"
                >
                  <User className="w-3.5 h-3.5 text-[#EAADC3]" />
                  <span className="max-w-[100px] truncate">{userName}</span>
                </button>
                <button
                  onClick={onLogout}
                  title="Sign out"
                  className="p-1.5 rounded-full hover:bg-stone-900 text-stone-400 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onTriggerAuth(`Book ${activeExp.country} Worldwide Tour Spot`)}
                  className="btn-floral px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg cursor-pointer flex items-center gap-1.5"
                >
                  <span>Book</span>
                  <Sparkles className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
