import React from 'react';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  FileText, 
  Download, 
  Share2, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles,
  Train,
  Clock,
  ShieldCheck
} from 'lucide-react';
import pagodaFujiSakura from '@/src/assets/images/pagoda_fuji_sakura_1790465473618.jpg';
import osakaCastleThumb from '@/src/assets/images/osaka_castle_thumb_1790465487052.jpg';

interface UserExpeditionDashboardProps {
  userName: string;
  userEmail: string;
  onNavigateHome: () => void;
  onLogout: () => void;
}

export const UserExpeditionDashboard: React.FC<UserExpeditionDashboardProps> = ({
  userName,
  userEmail,
  onNavigateHome,
  onLogout,
}) => {
  return (
    <div className="min-h-screen bg-stone-950 text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="p-2 rounded-xl bg-stone-900 border border-stone-800 hover:border-pink-400 text-stone-400 hover:text-white transition-colors cursor-pointer"
              title="Return to Landing Page"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-light text-white">
                Expedition Portal
              </h1>
              <p className="text-xs text-stone-400">
                Welcome back, <strong className="text-pink-300">{userName}</strong> ({userEmail})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="px-4 py-2 rounded-full border border-pink-500/40 hover:border-pink-400 text-xs text-pink-200 hover:text-white transition-colors cursor-pointer"
            >
              Explore 3D Tour
            </button>
            <button
              onClick={onLogout}
              className="px-4 py-2 rounded-full bg-stone-900 hover:bg-rose-950/60 border border-stone-800 hover:border-rose-500/50 text-xs text-rose-300 transition-colors cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Active Booking Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-pink-500/30 p-8 sm:p-10 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src={pagodaFujiSakura}
              alt="Japan Tour Booking"
              className="w-full h-full object-cover filter brightness-[0.4]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Confirmed Expedition • Reservation #TF-JP-8821</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-light text-white leading-tight">
              Japan 10-Day Golden Route Expedition
            </h2>
            <p className="text-sm text-stone-300 font-light leading-relaxed">
              Osaka, Kyoto, Hakone Onsen & Tokyo. Your Shinkansen bullet train green-car passes, traditional Ryokan reservation, and teamLab VIP slots are locked in.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-stone-900/80 border border-stone-800">
                <span className="text-stone-400 block mb-0.5">Departure</span>
                <span className="font-semibold text-white">April 12, 2026</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-900/80 border border-stone-800">
                <span className="text-stone-400 block mb-0.5">Crew Room</span>
                <span className="font-semibold text-[#EAADC3]">#JP-2026 (Live)</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-900/80 border border-stone-800">
                <span className="text-stone-400 block mb-0.5">JR Pass</span>
                <span className="font-semibold text-emerald-300">Issued & Synced</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-900/80 border border-stone-800">
                <span className="text-stone-400 block mb-0.5">Assigned Lead</span>
                <span className="font-semibold text-white">Kenji Sato</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button 
                onClick={onNavigateHome}
                className="btn-floral px-5 py-2.5 rounded-full text-xs flex items-center gap-2 cursor-pointer border border-[#EAADC3]"
              >
                <Compass className="w-3.5 h-3.5 text-[#24131b]" />
                <span>Jump To Itinerary Schedule</span>
              </button>
              <button 
                onClick={() => alert('Offline GPX map pack package downloaded (58 MB).')}
                className="btn-floral-outline px-4 py-2.5 rounded-full text-xs flex items-center gap-2 cursor-pointer font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download GPX Routes</span>
              </button>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Crew Chat & Permit Documents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Real-Time Crew Feed */}
          <div className="p-6 rounded-3xl bg-stone-900/60 border border-stone-800 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-pink-400" />
                <h3 className="text-base font-serif font-light text-white">
                  Active Crew Roster
                </h3>
              </div>
              <span className="text-xs text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Sync Enabled
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">🏯</span>
                  <div>
                    <strong className="text-white">Kenji Sato</strong>
                    <span className="block text-stone-400">Lead Tour Guide • Kyoto</span>
                  </div>
                </div>
                <span className="text-emerald-400 font-mono">Online</span>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">📸</span>
                  <div>
                    <strong className="text-white">Sophia Chen</strong>
                    <span className="block text-stone-400">Tour Photographer • Tokyo</span>
                  </div>
                </div>
                <span className="text-amber-400 font-mono">Editing GPX</span>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">🍜</span>
                  <div>
                    <strong className="text-white">Marcus Vance</strong>
                    <span className="block text-stone-400">Culinary Specialist • Osaka</span>
                  </div>
                </div>
                <span className="text-emerald-400 font-mono">Online</span>
              </div>
            </div>
          </div>

          {/* Travel Documents & QR Voucher */}
          <div className="p-6 rounded-3xl bg-stone-900/60 border border-stone-800 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-sky-400" />
                <h3 className="text-base font-serif font-light text-white">
                  Permits & Shinkansen Passes
                </h3>
              </div>
              <span className="text-xs text-stone-400">TripForge Secure Vault</span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-center justify-between text-xs">
                <div>
                  <strong className="text-white">JR Shinkansen 7-Day Green Car Pass</strong>
                  <span className="block text-stone-400">Ticket #JR-EAST-991823</span>
                </div>
                <button
                  onClick={() => alert('JR Pass QR barcode rendered.')}
                  className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors cursor-pointer"
                >
                  View QR
                </button>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-center justify-between text-xs">
                <div>
                  <strong className="text-white">Fuji-Hakone Ryokan Mineral Onsen Voucher</strong>
                  <span className="block text-stone-400">Private outdoor bath reserved for 19:30</span>
                </div>
                <button
                  onClick={() => alert('Ryokan voucher PDF displayed.')}
                  className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors cursor-pointer"
                >
                  View Voucher
                </button>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-center justify-between text-xs">
                <div>
                  <strong className="text-white">teamLab Borderless Azabudai Hills VIP Pass</strong>
                  <span className="block text-stone-400">Fast-track admission slot</span>
                </div>
                <button
                  onClick={() => alert('teamLab VIP QR code opened.')}
                  className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors cursor-pointer"
                >
                  View Pass
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
