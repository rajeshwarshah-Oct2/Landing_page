import React from 'react';
import { Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
  onTriggerAuth: (intent: string) => void;
  onNavigateHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onTriggerAuth, onNavigateHome }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0c0a0c] text-white border-t border-[#EAADC3]/20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Footer Pill Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800">
          {/* Logo */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-7 h-7 rounded-full bg-[#1b1518] border border-[#EAADC3]/40 flex items-center justify-center group-hover:border-[#EAADC3] transition-colors">
              <Globe className="w-3.5 h-3.5 text-[#EAADC3]" />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white font-serif">
              TRIPFORGE
            </span>
          </button>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs uppercase tracking-wider text-stone-400">
            <a href="#destinations" className="hover:text-[#EAADC3] transition-colors">
              Destinations
            </a>
            <a href="#about" className="hover:text-[#EAADC3] transition-colors">
              About
            </a>
            <a href="#contacts" className="hover:text-[#EAADC3] transition-colors">
              Contacts
            </a>
          </div>

          {/* #EAADC3 Book button & Back to top */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onTriggerAuth('Book Worldwide Expedition from Footer')}
              className="btn-floral px-6 py-2 rounded-full text-xs tracking-wider uppercase transition-all cursor-pointer border border-[#EAADC3]"
            >
              Book
            </button>
            <button
              onClick={scrollToTop}
              title="Back to top"
              className="p-2 rounded-full border border-[#EAADC3]/30 hover:bg-[#EAADC3] hover:text-[#24131b] text-[#EAADC3] transition-all cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & social links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-stone-500">
          <p>© 2026 TripForge Expeditions. Sakura Floral Edition (#EAADC3). All rights reserved.</p>
          <div className="flex items-center gap-4 text-stone-400">
            <button
              onClick={() => onTriggerAuth('Follow Instagram')}
              className="hover:text-[#EAADC3] transition-colors cursor-pointer"
            >
              Instagram
            </button>
            <button
              onClick={() => onTriggerAuth('Join Telegram')}
              className="hover:text-[#EAADC3] transition-colors cursor-pointer"
            >
              Telegram
            </button>
            <button
              onClick={() => onTriggerAuth('Chat on WhatsApp')}
              className="hover:text-[#EAADC3] transition-colors cursor-pointer"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
