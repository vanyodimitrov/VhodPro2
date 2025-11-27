import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Legal } from './components/Legal';
import { Footer } from './components/Footer';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'login':
        return <Login onNavigate={setCurrentView} />;
      case 'terms':
        return <Legal title="Общи условия" onNavigate={setCurrentView} />;
      case 'privacy':
        return <Legal title="Политика за поверителност" onNavigate={setCurrentView} />;
      case 'cookies':
        return <Legal title="GDPR & Бисквитки" onNavigate={setCurrentView} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark overflow-x-hidden selection:bg-brand-accent selection:text-white flex flex-col justify-between">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer onNavigate={setCurrentView} />
    </div>
  );
};

export default App;