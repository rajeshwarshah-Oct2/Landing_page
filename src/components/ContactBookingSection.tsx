import React, { useState } from 'react';
import pagodaFujiSakura from '@/src/assets/images/pagoda_fuji_sakura_1790465473618.jpg';
import { Send, CheckCircle2, MessageSquare, Phone, User } from 'lucide-react';

interface ContactBookingSectionProps {
  onTriggerAuth: (intent: string) => void;
}

export const ContactBookingSection: React.FC<ContactBookingSectionProps> = ({ onTriggerAuth }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const intentDetail = name
      ? `Submit Japan Tour Inquiry from ${name} (${contact || 'No contact provided'})`
      : 'Submit Japan Tour Inquiry & Request Callback';
    onTriggerAuth(intentDetail);
  };

  return (
    <section id="contacts" className="relative w-full min-h-[85vh] flex items-center justify-start overflow-hidden bg-[#0c0a0c] text-white border-t border-[#EAADC3]/20">
      {/* Background Image: Pagoda, Fuji & Cherry Blossoms */}
      <div className="absolute inset-0 z-0">
        <img
          src={pagodaFujiSakura}
          alt="Chureito Pagoda Mount Fuji cherry blossoms"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a0c] via-[#0c0a0c]/40 to-[#0c0a0c]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a0c]/95 via-[#0c0a0c]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Glassmorphic Form Card with #EAADC3 styling */}
        <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-[#161214]/85 border border-[#EAADC3]/35 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#EAADC3] font-semibold flex items-center gap-1.5">
              <span>🌸</span>
              <span>Fast Concierge Support</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-stone-100 leading-snug">
              Want to join us,<br />but still have questions?
            </h3>
            <p className="text-sm text-stone-300 font-light">
              Leave a request for our Japan tour curators
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Your Name */}
            <div className="relative border-b border-stone-600 focus-within:border-[#EAADC3] transition-colors">
              <label className="text-[11px] text-[#EAADC3]/85 uppercase tracking-wider block mb-1 font-medium">
                Your name
              </label>
              <div className="flex items-center gap-2 pb-2">
                <User className="w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Elena Rostova"
                  className="w-full bg-transparent text-sm text-white placeholder-stone-500 focus:outline-none font-light"
                />
              </div>
            </div>

            {/* Phone Number / Email */}
            <div className="relative border-b border-stone-600 focus-within:border-[#EAADC3] transition-colors">
              <label className="text-[11px] text-[#EAADC3]/85 uppercase tracking-wider block mb-1 font-medium">
                Phone number or email
              </label>
              <div className="flex items-center gap-2 pb-2">
                <Phone className="w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="+1 (555) 019-2834"
                  className="w-full bg-transparent text-sm text-white placeholder-stone-500 focus:outline-none font-light"
                />
              </div>
            </div>

            {/* Comment */}
            <div className="relative border-b border-stone-600 focus-within:border-[#EAADC3] transition-colors">
              <label className="text-[11px] text-[#EAADC3]/85 uppercase tracking-wider block mb-1 font-medium">
                Comment
              </label>
              <div className="flex items-center gap-2 pb-2">
                <MessageSquare className="w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Preferred dates, dietary requests..."
                  className="w-full bg-transparent text-sm text-white placeholder-stone-500 focus:outline-none font-light"
                />
              </div>
            </div>

            {/* #EAADC3 "Send" Button */}
            <button
              type="submit"
              className="btn-floral w-full py-3.5 px-6 rounded-full text-sm tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 border border-[#EAADC3]"
            >
              <span>Send Request</span>
              <Send className="w-3.5 h-3.5 text-[#24131b]" />
            </button>
          </form>

          <div className="flex items-center gap-2 text-xs text-stone-300 pt-2">
            <CheckCircle2 className="w-4 h-4 text-[#EAADC3] flex-shrink-0" />
            <span>We reply within 15 minutes with complete trip details.</span>
          </div>
        </div>

        {/* Right Info Overlay in #EAADC3 */}
        <div className="hidden lg:block max-w-sm space-y-6 text-right">
          <div className="p-6 rounded-3xl bg-[#161214]/80 border border-[#EAADC3]/25 backdrop-blur-md space-y-3 text-left shadow-xl">
            <span className="text-xs uppercase tracking-widest text-[#EAADC3] font-semibold flex items-center gap-1.5">
              <span>🌸</span>
              <span>TripForge Sakura Guarantee</span>
            </span>
            <h4 className="text-lg font-serif font-light text-white">
              Private Ryokan & Shinkansen Reserved
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              We secure your Japan Rail passes, teamLab tickets, and Ryokan onsen permits 90 days in advance so you never experience sold-out attractions.
            </p>
            <div className="pt-2 text-xs text-[#EAADC3] font-medium">
              ⚡ Next departure date: April 12, 2026 (4 spots remaining)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
