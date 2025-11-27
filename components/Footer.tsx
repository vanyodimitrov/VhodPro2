import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { ViewState } from '../types';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#111827] text-white pt-20 pb-10 border-t-4 border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <div 
              className="flex items-center gap-2 mb-6 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
               <div className="w-8 h-8 relative">
                   <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4L4 14V36H36V14L20 4Z" fill="white"/>
                      <path d="M20 36L12 24H28L20 36Z" fill="#D97706"/>
                   </svg>
               </div>
              <span className="font-display font-black text-xl tracking-tight">VHOD<span className="text-brand-accent">PRO</span></span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed font-sans text-sm">
              Професионално управление на етажна собственост. Сигурност, прозрачност и модерно отношение.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 hover:bg-brand-accent transition-colors text-white"><Facebook size={18} /></a>
              <a href="#" className="bg-white/10 p-2 hover:bg-brand-accent transition-colors text-white"><Instagram size={18} /></a>
              <a href="#" className="bg-white/10 p-2 hover:bg-brand-accent transition-colors text-white"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-display">Услуги</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-brand-accent transition-colors text-left uppercase font-bold tracking-wider">Домоуправител</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-brand-accent transition-colors text-left uppercase font-bold tracking-wider">Касиер</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-brand-accent transition-colors text-left uppercase font-bold tracking-wider">Почистване</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-brand-accent transition-colors text-left uppercase font-bold tracking-wider">Техническа поддръжка</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-display">Компания</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-brand-accent transition-colors text-left uppercase font-bold tracking-wider">За Нас</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-brand-accent transition-colors text-left uppercase font-bold tracking-wider">Цени</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-brand-accent transition-colors text-left uppercase font-bold tracking-wider">Блог</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-brand-accent transition-colors text-left uppercase font-bold tracking-wider">Контакти</button></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs font-display">Правни</h4>
             <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => onNavigate('terms')} className="hover:text-brand-accent transition-colors text-left uppercase font-bold tracking-wider">Общи условия</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-brand-accent transition-colors text-left uppercase font-bold tracking-wider">Политика за поверителност</button></li>
              <li><button onClick={() => onNavigate('cookies')} className="hover:text-brand-accent transition-colors text-left uppercase font-bold tracking-wider">GDPR</button></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© 2025 VhodPro. Всички права запазени.</p>
          <p className="text-gray-600 text-xs font-display uppercase tracking-widest">The Urban Architect Concept</p>
        </div>
      </div>
    </footer>
  );
};