import React, { useState } from 'react';
import { 
  Compass, 
  ArrowLeft, 
  Mail, 
  Lock, 
  User, 
  Sparkles, 
  CheckCircle2, 
  Eye, 
  EyeOff, 
  Users, 
  Layers, 
  Radio, 
  ShieldCheck 
} from 'lucide-react';

interface LoginPageProps {
  onBackToHome: () => void;
  onLoginSuccess: (user: { name: string; email: string }) => void;
  redirectReason?: string;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onBackToHome,
  onLoginSuccess,
  redirectReason,
}) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!password || password.length < 6) {
      setErrorMsg('Password must be at least 6 characters.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const name = isSignUp && fullName ? fullName : email.split('@')[0];
      onLoginSuccess({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        email,
      });
    }, 700);
  };

  const handleDemoLogin = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onLoginSuccess({
        name: 'Alex Rivera',
        email: 'alex.rivera@tripforge.com',
      });
    }, 500);
  };

  const handleSocialLogin = (provider: string) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onLoginSuccess({
        name: `${provider} Adventurer`,
        email: `explorer@${provider.toLowerCase()}.com`,
      });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#080b0f] text-slate-100 flex flex-col justify-between selection:bg-amber-400 selection:text-black">
      {/* Top Header */}
      <header className="w-full border-b border-white/5 py-4 px-6 sm:px-10 flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to TripForge</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center text-black font-bold shadow-md shadow-amber-400/20">
            <Compass className="w-4 h-4" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            TripForge
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-white/10 bg-[#0e131b] shadow-2xl">
          {/* Left Form Column (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Context Redirect Banner if user clicked a specific action */}
              {redirectReason && (
                <div className="mb-6 p-4 bg-[#EAADC3]/10 border border-[#EAADC3]/35 rounded-2xl flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#EAADC3] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#EAADC3]">
                    <span className="font-semibold text-white block">Action Required</span>
                    {redirectReason}. Sign in or create a free account to continue.
                  </div>
                </div>
              )}

              {/* Title & Mode Switcher */}
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-[#EAADC3] font-semibold mb-1 block">
                  🌸 Japan Tour Expedition Portal
                </span>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {isSignUp ? 'Create your TripForge account' : 'Welcome back, Adventurer'}
                </h1>
                <p className="mt-2 text-xs sm:text-sm text-stone-400">
                  {isSignUp
                    ? 'Start building real-time collaborative itineraries and exploring private routes.'
                    : 'Access your saved expeditions, live collaborative rooms, and route permits.'}
                </p>
              </div>

              {/* Instant 1-Click Demo Login Button in #EAADC3 */}
              <button
                type="button"
                onClick={handleDemoLogin}
                disabled={isSubmitting}
                className="btn-floral w-full mb-6 py-3 px-4 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer border border-[#EAADC3]"
              >
                <Sparkles className="w-4 h-4 text-[#24131b] animate-pulse" />
                <span>⚡ Quick Demo Sign In (1-Click Test)</span>
              </button>

              {/* Social Login Options */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Google')}
                  className="py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-semibold text-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5.1 3.7-8.9z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15s.7 5.3 1.9 7.7l3.7-2.9z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z"
                    />
                  </svg>
                  <span>Google</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSocialLogin('Apple')}
                  className="py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-semibold text-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.67-.82 1.13-1.96 1-3.1-.97.04-2.15.65-2.85 1.47-.61.71-1.14 1.87-1 2.98 1.09.09 2.18-.54 2.85-1.35z" />
                  </svg>
                  <span>Apple</span>
                </button>
              </div>

              {/* Separator */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-medium">
                  Or with email
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-xs text-rose-300">
                    {errorMsg}
                  </div>
                )}

                {forgotSent && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-300">
                    Password recovery instructions dispatched to {email || 'your email'}.
                  </div>
                )}

                {isSignUp && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Elena Vance"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="adventurer@tripforge.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Password
                    </label>
                    {!isSignUp && (
                      <button
                        type="button"
                        onClick={() => setForgotSent(true)}
                        className="text-[11px] text-pink-400 hover:text-pink-300 transition-colors cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-10 py-3 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-pink-400 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="p-1 text-stone-400 hover:text-stone-200 absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-400 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded accent-[#EAADC3] bg-transparent border-white/20"
                    />
                    <span>Remember me for 30 days</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-floral w-full py-3.5 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer mt-4 border border-[#EAADC3]"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-[#24131b] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>{isSignUp ? 'Create Expedition Account' : 'Sign In to TripForge'}</span>
                  )}
                </button>
              </form>
            </div>

            {/* Bottom Mode Switch */}
            <div className="pt-6 mt-6 border-t border-white/10 text-center text-xs text-stone-400">
              {isSignUp ? (
                <span>
                  Already have an account?{' '}
                  <button
                    onClick={() => {
                      setIsSignUp(false);
                      setErrorMsg('');
                    }}
                    className="text-[#EAADC3] hover:underline font-semibold cursor-pointer underline-offset-4"
                  >
                    Sign In
                  </button>
                </span>
              ) : (
                <span>
                  New to TripForge?{' '}
                  <button
                    onClick={() => {
                      setIsSignUp(true);
                      setErrorMsg('');
                    }}
                    className="text-[#EAADC3] hover:underline font-semibold cursor-pointer underline-offset-4"
                  >
                    Create Account
                  </button>
                </span>
              )}
            </div>
          </div>

          {/* Right Showcase Column (5 cols) */}
          <div className="lg:col-span-5 relative hidden lg:flex flex-col justify-between p-8 overflow-hidden bg-slate-900 border-l border-white/10">
            {/* Background Image */}
            <img
              src="/src/assets/images/machu_picchu_hero_1790456470973.jpg"
              alt="Machu Picchu Citadel"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e131b] via-[#0e131b]/60 to-transparent" />

            {/* Top Badge */}
            <div className="relative z-10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                Multiplayer Travel Engine
              </span>
            </div>

            {/* Feature Perks */}
            <div className="relative z-10 space-y-4 my-auto py-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                  <Radio className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Real-Time Group Sync
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                    Live cursor presence and instant itinerary edits synced across all devices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Interactive Waypoint Calculations
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                    Dynamic time budgets, elevation gain profiles, and automatic budget splits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Official Guide & Permit Lock
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                    Verified national park quotas and direct guide reservation confirmations.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Testimonial */}
            <div className="relative z-10 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs">
              <p className="italic text-slate-300">
                “TripForge replaced 5 messy Google Docs and an endless WhatsApp thread. We finalized our Inca Trail permits in 15 minutes.”
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-amber-400 text-black font-bold flex items-center justify-center text-[10px]">
                  S
                </div>
                <span className="font-semibold text-white">Sofia Torres</span>
                <span aria-hidden="true" className="text-slate-500">·</span>
                <span className="text-slate-400">Expedition Leader</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-slate-500 border-t border-white/5">
        TripForge Expedition Platform © {new Date().getFullYear()} · All rights reserved.
      </footer>
    </div>
  );
};
