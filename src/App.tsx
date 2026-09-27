import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { GlobalHeroSection, WORLD_EXPEDITIONS, WorldCountryExpedition } from './components/GlobalHeroSection';
import { AboutTourSection } from './components/AboutTourSection';
import { ContactBookingSection } from './components/ContactBookingSection';
import { LoginPage } from './components/LoginPage';
import { UserExpeditionDashboard } from './components/UserExpeditionDashboard';
import { Footer } from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'login' | 'dashboard'>('landing');
  const [redirectReason, setRedirectReason] = useState<string>('');
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Active Worldwide Destination State (Japan, Peru, France, Italy, Australia)
  const [activeDestinationId, setActiveDestinationId] = useState<string>('japan');

  const activeExpedition =
    WORLD_EXPEDITIONS.find((e) => e.id === activeDestinationId) || WORLD_EXPEDITIONS[0];

  // Sync hash routing if user enters direct hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#login') {
        setCurrentView('login');
      } else if (hash === '#dashboard' && currentUser) {
        setCurrentView('dashboard');
      } else if (!hash || hash === '#home') {
        setCurrentView('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash === '#login') {
      setCurrentView('login');
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentUser]);

  const showToast = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const handleTriggerAuth = (reason: string = 'Sign in to access your TripForge account') => {
    setRedirectReason(reason);
    setCurrentView('login');
    window.location.hash = '#login';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (user: { name: string; email: string }) => {
    setCurrentUser(user);
    setCurrentView('dashboard');
    window.location.hash = '#dashboard';
    showToast(`Welcome back, ${user.name}! Your ${activeExpedition.country} reservation is active.`);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('landing');
    window.location.hash = '#home';
    showToast('Signed out of TripForge session.');
  };

  const handleScrollToSection = (sectionId: string) => {
    if (currentView !== 'landing') {
      setCurrentView('landing');
      window.location.hash = '#home';
    }

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  const handleSelectDestination = (dest: WorldCountryExpedition) => {
    setActiveDestinationId(dest.id);
    showToast(`Switched active expedition to ${dest.flag} ${dest.country} – ${dest.title}`);
  };

  // If in Login view
  if (currentView === 'login') {
    return (
      <LoginPage
        onBackToHome={() => {
          setCurrentView('landing');
          window.location.hash = '#home';
        }}
        onLoginSuccess={handleLoginSuccess}
        redirectReason={redirectReason}
      />
    );
  }

  // If in Dashboard view
  if (currentView === 'dashboard' && currentUser) {
    return (
      <UserExpeditionDashboard
        userName={currentUser.name}
        userEmail={currentUser.email}
        onNavigateHome={() => {
          setCurrentView('landing');
          window.location.hash = '#home';
        }}
        onLogout={handleLogout}
      />
    );
  }

  // Main Landing Page
  return (
    <div className="min-h-screen bg-[#0c0a0c] text-stone-100 flex flex-col justify-between selection:bg-[#EAADC3] selection:text-[#24131b] font-sans">
      {/* Toast Notification in #EAADC3 */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 p-4 bg-[#EAADC3] text-[#24131b] font-bold text-xs rounded-2xl shadow-2xl flex items-center gap-2 border border-white/20">
          <span>{notification}</span>
        </div>
      )}

      {/* Floating Pill Top Bar Navigation with Worldwide Selector */}
      <Navbar
        onTriggerAuth={handleTriggerAuth}
        isLoggedIn={Boolean(currentUser)}
        userName={currentUser?.name || ''}
        onLogout={handleLogout}
        onNavigateDashboard={() => setCurrentView('dashboard')}
        onNavigateHome={() => setCurrentView('landing')}
        currentView={currentView}
        activeDestinationId={activeDestinationId}
        onSelectDestination={handleSelectDestination}
      />

      <main className="flex-1">
        {/* 
          1. Global Hero Section with Worldwide Country Cards:
             Hovering over any card reactively transforms the background image to that country!
        */}
        <div id="destinations">
          <GlobalHeroSection
            onTriggerAuth={handleTriggerAuth}
            onExploreItinerary={() => handleScrollToSection('about')}
            activeDestinationId={activeDestinationId}
            onSelectDestination={handleSelectDestination}
          />
        </div>

        {/* 2. — ABOUT THE EXPEDITION — Country-aware 2-Column Editorial & Connected Timeline */}
        <AboutTourSection
          onTriggerAuth={handleTriggerAuth}
          onSelectCityDays={() => handleScrollToSection('contacts')}
          activeCountryId={activeDestinationId}
          onSelectCountry={(countryId) => setActiveDestinationId(countryId)}
        />

        {/* 3. "Want to join us, but still have questions?" Worldwide Inquiry Form */}
        <ContactBookingSection
          onTriggerAuth={handleTriggerAuth}
        />
      </main>

      {/* Footer matching worldwide theme */}
      <Footer
        onTriggerAuth={handleTriggerAuth}
        onNavigateHome={() => {
          setCurrentView('landing');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
