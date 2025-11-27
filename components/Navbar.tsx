import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem, ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const navItems: NavItem[] = [
  { label: 'Услуги', href: '#services', action: 'home' },
  { label: 'Предимства', href: '#features', action: 'home' },
  { label: 'Цени', href: '#pricing', action: 'home' },
  { label: 'Контакти', href: '#contact', action: 'home' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    if (item.action) {
      onNavigate(item.action);
      // Wait for React to render Home, then scroll
      if (item.href.startsWith('#')) {
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen || currentView !== 'home'
          ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-accent/20 py-2'
          : 'bg-transparent border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Abstract Building with V */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 relative">
               <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M20 4L4 14V36H36V14L20 4Z" fill="#1E293B" className="group-hover:fill-[#F1F5F9] transition-colors"/>
                  {/* The V Cutout */}
                  <path d="M20 36L12 24H28L20 36Z" fill="#D97706"/>
                  {/* Amber Accent Top Triangle */}
                  <path d="M20 12L14 18H26L20 12Z" fill="#D97706" opacity="0.9"/>
               </svg>
            </div>
            <span className={`font-display font-black text-2xl tracking-tighter ${
                isScrolled || currentView !== 'home' ? 'text-white' : 'text-white'
            }`}>
              VHOD<span className="text-brand-accent">PRO</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-gray-300 hover:text-white hover:border-b-2 border-brand-accent transition-all text-sm font-bold uppercase tracking-widest cursor-pointer py-1"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => onNavigate('login')}
              className={`px-6 py-2 rounded-sm font-bold uppercase tracking-wider text-xs transition-all duration-300 ${
                currentView === 'login' 
                ? 'bg-brand-accent text-white' 
                : 'bg-brand-accent text-white hover:bg-white hover:text-brand-dark'
              }`}
            >
              Вход за клиенти
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-brand-dark border-b border-brand-accent/20 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="px-4 py-8 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className="block text-center text-xl text-white hover:text-brand-accent font-display font-bold uppercase tracking-wider cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-6 flex justify-center border-t border-white/10 mt-6">
            <button
               onClick={() => {
                 onNavigate('login');
                 setIsMobileMenuOpen(false);
               }}
               className="w-full text-center px-6 py-4 bg-brand-accent text-white font-bold uppercase tracking-widest hover:bg-brand-accentHover transition-all"
            >
              Вход за клиенти
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};