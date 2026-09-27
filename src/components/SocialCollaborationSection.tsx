import React, { useState } from 'react';
import { INITIAL_CREW, INITIAL_EXPENSES } from '@/src/data/japanTourData';
import { 
  Users, 
  MessageSquare, 
  Vote, 
  Receipt, 
  CheckSquare, 
  Share2, 
  Plus, 
  ArrowRight,
  Send
} from 'lucide-react';

interface SocialCollaborationSectionProps {
  onTriggerAuth: (intent: string) => void;
}

export const SocialCollaborationSection: React.FC<SocialCollaborationSectionProps> = ({
  onTriggerAuth,
}) => {
  const [activeTab, setActiveTab] = useState<'poll' | 'expenses' | 'gear' | 'chat'>('poll');
  const [pollVotes] = useState({
    opt1: 8, // Tsukiji Fish Market Dawn Food Crawl
    opt2: 4, // Meiji Jingu Shrine Early Meditation
  });

  const totalVotes = pollVotes.opt1 + pollVotes.opt2;
  const pct1 = Math.round((pollVotes.opt1 / totalVotes) * 100);
  const pct2 = Math.round((pollVotes.opt2 / totalVotes) * 100);

  return (
    <section id="collaboration" className="relative w-full py-20 bg-[#0c0a0c] text-white border-t border-[#EAADC3]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header: — REAL-TIME CREW SYNC — */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-r from-transparent to-[#EAADC3]/60" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-[0.2em] uppercase font-light text-stone-100 text-center">
            Real-Time Crew Sync
          </h2>
          <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-l from-transparent to-[#EAADC3]/60" />
        </div>
        <p className="text-center text-sm text-stone-400 max-w-2xl mx-auto mb-12 font-light">
          Travel together without chaos. Real-time multiplayer itinerary voting, shared Japanese Yen split ledgers, and live gear assignment.
        </p>

        {/* Live Multiplayer Status Bar in #EAADC3 */}
        <div className="mb-8 p-4 sm:p-5 rounded-3xl bg-[#161214]/80 border border-[#EAADC3]/20 flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EAADC3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EAADC3]"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-white">
              Expedition Room #JP-2026: <strong className="text-[#EAADC3]">4 Crew Curators Live</strong>
            </span>
          </div>

          {/* Avatars Strip */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2 overflow-hidden">
              {INITIAL_CREW.map((crew) => (
                <div
                  key={crew.id}
                  title={`${crew.name} (${crew.role}) - ${crew.currentStop}`}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0c0a0c] bg-[#1e171b] flex items-center justify-center text-sm border border-[#EAADC3]/40"
                >
                  {crew.avatar}
                </div>
              ))}
            </div>

            <button
              onClick={() => onTriggerAuth('Invite Travel Buddy to Real-time Japan Crew')}
              className="btn-floral-outline ml-2 px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Share2 className="w-3 h-3 text-[#EAADC3]" />
              <span>Invite Crew</span>
            </button>
          </div>
        </div>

        {/* Collaboration Tools Tabs in #EAADC3 */}
        <div className="flex items-center gap-2 border-b border-stone-800 mb-8 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('poll')}
            className={`px-4 py-3 text-xs sm:text-sm font-medium border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'poll'
                ? 'border-[#EAADC3] text-[#EAADC3] font-semibold'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Vote className="w-4 h-4 text-[#EAADC3]" />
            <span>Group Excursion Polls</span>
          </button>

          <button
            onClick={() => setActiveTab('expenses')}
            className={`px-4 py-3 text-xs sm:text-sm font-medium border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'expenses'
                ? 'border-[#EAADC3] text-[#EAADC3] font-semibold'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Receipt className="w-4 h-4 text-[#EAADC3]" />
            <span>Yen Split Ledger</span>
          </button>

          <button
            onClick={() => setActiveTab('gear')}
            className={`px-4 py-3 text-xs sm:text-sm font-medium border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'gear'
                ? 'border-[#EAADC3] text-[#EAADC3] font-semibold'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <CheckSquare className="w-4 h-4 text-[#EAADC3]" />
            <span>Shared Gear & Passes</span>
          </button>

          <button
            onClick={() => setActiveTab('chat')}
            className={`px-4 py-3 text-xs sm:text-sm font-medium border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'chat'
                ? 'border-[#EAADC3] text-[#EAADC3] font-semibold'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-[#EAADC3]" />
            <span>Field Radio & Chat</span>
          </button>
        </div>

        {/* Tab 1: Group Poll in #EAADC3 */}
        {activeTab === 'poll' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-[#161214]/80 border border-[#EAADC3]/20 backdrop-blur-sm max-w-3xl mx-auto space-y-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#EAADC3] font-semibold">
                Active Group Decision • Tokyo Day 8
              </span>
              <span className="text-xs text-stone-400">Ends in 3h 42m</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-light text-white">
              Tomorrow morning choice: Tsukiji Fish Market Breakfast vs. Meiji Jingu Dawn Meditation?
            </h3>

            <div className="space-y-4">
              {/* Option 1 */}
              <div
                onClick={() => onTriggerAuth('Vote on Tsukiji Fish Market Breakfast excursion')}
                className="p-4 rounded-2xl bg-[#0c0a0c]/80 border border-[#EAADC3]/30 hover:border-[#EAADC3] transition-all cursor-pointer space-y-2 group"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-white group-hover:text-[#EAADC3]">
                    🍣 Tsukiji Fish Market Fresh Sashimi & Tamagoyaki (07:30 AM)
                  </span>
                  <span className="font-mono text-[#EAADC3] font-semibold">{pct1}% ({pollVotes.opt1} votes)</span>
                </div>
                <div className="w-full bg-stone-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#EAADC3] h-full rounded-full transition-all duration-700 shadow-sm"
                    style={{ width: `${pct1}%` }}
                  />
                </div>
              </div>

              {/* Option 2 */}
              <div
                onClick={() => onTriggerAuth('Vote on Meiji Jingu Dawn Meditation excursion')}
                className="p-4 rounded-2xl bg-[#0c0a0c]/80 border border-stone-800 hover:border-[#EAADC3]/60 transition-all cursor-pointer space-y-2 group"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-white group-hover:text-[#EAADC3]">
                    🌲 Meiji Jingu Forest Walk & Shinto Morning Prayer (06:30 AM)
                  </span>
                  <span className="font-mono text-stone-300 font-semibold">{pct2}% ({pollVotes.opt2} votes)</span>
                </div>
                <div className="w-full bg-stone-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-stone-600 h-full rounded-full transition-all duration-700"
                    style={{ width: `${pct2}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-800 text-xs text-stone-400">
              <span>Votes are verified via TripForge real-time sync.</span>
              <button
                onClick={() => onTriggerAuth('Cast certified vote on tomorrow’s tour activity')}
                className="btn-floral px-5 py-2 rounded-full font-medium transition-all cursor-pointer border border-[#EAADC3]"
              >
                Sign In To Cast Vote
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Expenses in #EAADC3 */}
        {activeTab === 'expenses' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-[#161214]/80 border border-[#EAADC3]/20 backdrop-blur-sm max-w-3xl mx-auto space-y-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#EAADC3] font-semibold block mb-1">
                  Multi-Currency Shared Ledger
                </span>
                <h3 className="text-xl font-serif font-light text-white">
                  Recent Group Expenses (JPY / USD)
                </h3>
              </div>
              <button
                onClick={() => onTriggerAuth('Add new group receipt or expense to Japan Tour')}
                className="btn-floral px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 cursor-pointer border border-[#EAADC3]"
              >
                <Plus className="w-3.5 h-3.5 text-[#24131b]" />
                <span>Add Receipt</span>
              </button>
            </div>

            <div className="space-y-3">
              {INITIAL_EXPENSES.map((exp) => (
                <div
                  key={exp.id}
                  onClick={() => onTriggerAuth(`Settle split expense: ${exp.title}`)}
                  className="p-4 rounded-2xl bg-[#0c0a0c]/80 border border-stone-800 hover:border-[#EAADC3]/50 transition-all flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <h5 className="text-sm font-medium text-white">{exp.title}</h5>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Paid by <strong>{exp.paidBy}</strong> • Split across {exp.splitWith[0]}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="block font-mono text-sm font-semibold text-[#EAADC3]">
                      ¥{exp.amountJpy.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-stone-500 font-mono">
                      ≈ ${exp.amountUsd} USD
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#0c0a0c] border border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <span>Automatic currency conversion locked at 1 USD = 149.2 JPY.</span>
              <button
                onClick={() => onTriggerAuth('Settle shared travel expenses with crew')}
                className="text-[#EAADC3] hover:underline font-medium inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Settle Up Balances</span>
                <ArrowRight className="w-3 h-3 text-[#EAADC3]" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Shared Gear in #EAADC3 */}
        {activeTab === 'gear' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-[#161214]/80 border border-[#EAADC3]/20 backdrop-blur-sm max-w-3xl mx-auto space-y-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#EAADC3] font-semibold block mb-1">
                  Team Equipment Sync
                </span>
                <h3 className="text-xl font-serif font-light text-white">
                  Shared Hardware & Travel Documents
                </h3>
              </div>
              <button
                onClick={() => onTriggerAuth('Add custom shared gear to expedition')}
                className="btn-floral px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 cursor-pointer border border-[#EAADC3]"
              >
                <Plus className="w-3.5 h-3.5 text-[#24131b]" />
                <span>Add Item</span>
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div 
                onClick={() => onTriggerAuth('Claim Pocket Wi-Fi hotspot management')}
                className="p-4 rounded-2xl bg-[#0c0a0c]/80 border border-stone-800 flex items-center justify-between cursor-pointer hover:border-[#EAADC3]/50"
              >
                <div className="flex items-center gap-3">
                  <CheckSquare className="w-4 h-4 text-[#EAADC3]" />
                  <div>
                    <span className="text-white font-medium">5G Pocket Wi-Fi Hotspot (Unlimited Data)</span>
                    <span className="block text-xs text-stone-400">Assigned to: Kenji Sato</span>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#EAADC3]/15 text-[#EAADC3] border border-[#EAADC3]/30">
                  Ready & Charged
                </span>
              </div>

              <div 
                onClick={() => onTriggerAuth('Claim Camera Gear / Sony A7IV lens kit')}
                className="p-4 rounded-2xl bg-[#0c0a0c]/80 border border-stone-800 flex items-center justify-between cursor-pointer hover:border-[#EAADC3]/50"
              >
                <div className="flex items-center gap-3">
                  <CheckSquare className="w-4 h-4 text-[#EAADC3]" />
                  <div>
                    <span className="text-white font-medium">Sony A7IV 24-70mm f/2.8 GM Lens & Tripod</span>
                    <span className="block text-xs text-stone-400">Assigned to: Sophia Chen</span>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#EAADC3]/15 text-[#EAADC3] border border-[#EAADC3]/30">
                  Checked in Bag
                </span>
              </div>

              <div 
                onClick={() => onTriggerAuth('Claim Medical Kit & Blister Protection')}
                className="p-4 rounded-2xl bg-[#0c0a0c]/80 border border-stone-800 flex items-center justify-between cursor-pointer hover:border-[#EAADC3]/50"
              >
                <div className="flex items-center gap-3">
                  <CheckSquare className="w-4 h-4 text-stone-500" />
                  <div>
                    <span className="text-white font-medium">Compact Medical Kit & Blister Tape</span>
                    <span className="block text-xs text-stone-400">Unassigned</span>
                  </div>
                </div>
                <span className="text-xs text-[#EAADC3] font-semibold">
                  Click to Claim
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Field Radio & Chat in #EAADC3 */}
        {activeTab === 'chat' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-[#161214]/80 border border-[#EAADC3]/20 backdrop-blur-sm max-w-3xl mx-auto space-y-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <span className="text-xs uppercase tracking-widest text-[#EAADC3] font-semibold">
                Live Field Dispatch Channel
              </span>
              <span className="text-xs text-stone-400">Encrypted End-to-End</span>
            </div>

            <div className="space-y-3 max-h-60 overflow-y-auto pr-2 no-scrollbar">
              <div className="p-3.5 rounded-2xl bg-[#0c0a0c]/80 border border-stone-800 text-xs">
                <div className="flex items-center justify-between mb-1">
                  <strong className="text-[#EAADC3]">Kenji Sato (Lead Guide)</strong>
                  <span className="text-stone-500 text-[10px]">10 mins ago</span>
                </div>
                <p className="text-stone-300">
                  Forecast for Day 4 at Fushimi Inari is crisp and clear. We'll start our sunrise ascent at 06:15 AM sharp to beat the tourist buses!
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#0c0a0c]/80 border border-stone-800 text-xs">
                <div className="flex items-center justify-between mb-1">
                  <strong className="text-[#EAADC3]">Sophia Chen</strong>
                  <span className="text-stone-500 text-[10px]">Just now</span>
                </div>
                <p className="text-stone-300">
                  I mapped out 3 hidden vantage points for the Chureito pagoda with Mount Fuji backdrop. Bringing the ND filters! 🌸
                </p>
              </div>
            </div>

            {/* Chat Input */}
            <div 
              onClick={() => onTriggerAuth('Join Japan Tour Live Crew Chat')}
              className="flex items-center gap-2 p-2 rounded-2xl bg-[#0c0a0c] border border-[#EAADC3]/30 cursor-pointer hover:border-[#EAADC3] transition-colors"
            >
              <input
                type="text"
                readOnly
                placeholder="Log in to dispatch messages to the crew..."
                className="w-full bg-transparent text-xs text-stone-400 px-3 cursor-pointer focus:outline-none"
              />
              <button
                type="button"
                className="btn-floral p-2 rounded-xl border border-[#EAADC3] cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-[#24131b]" />
              </button>
            </div>
          </div>
        )}

        {/* Global Crew CTA Button in #EAADC3 */}
        <div className="text-center mt-12">
          <button
            onClick={() => onTriggerAuth('Launch Full Real-time Expedition Studio')}
            className="btn-floral px-8 py-3.5 rounded-full text-sm tracking-wide inline-flex items-center gap-2 border border-[#EAADC3] cursor-pointer"
          >
            <span>Launch Group Expedition Studio</span>
            <ArrowRight className="w-4 h-4 text-[#24131b]" />
          </button>
        </div>
      </div>
    </section>
  );
};
