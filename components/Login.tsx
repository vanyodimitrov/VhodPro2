import React, { useState } from 'react';
import { ArrowLeft, Lock, Mail, Loader2 } from 'lucide-react';
import { ViewState } from '../types';

interface LoginProps {
  onNavigate: (view: ViewState) => void;
}

export const Login: React.FC<LoginProps> = ({ onNavigate }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      alert('Демо вход: Успешен');
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative bg-brand-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 bg-stripes"></div>

      <div className="relative z-20 w-full max-w-md px-4">
        <button 
          onClick={() => onNavigate('home')}
          className="mb-8 flex items-center text-gray-400 hover:text-white transition-colors group font-bold uppercase text-sm tracking-wider"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Назад
        </button>

        <div className="bg-white p-10 shadow-2xl border-t-4 border-brand-accent">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M20 4L4 14V36H36V14L20 4Z" fill="#1E293B"/>
                  <path d="M20 36L12 24H28L20 36Z" fill="#D97706"/>
               </svg>
            </div>
            <h2 className="text-2xl font-black text-brand-dark uppercase font-display">Клиентски Портал</h2>
            <p className="text-gray-500 text-sm mt-2 font-medium">Влезте за да управлявате вашите имоти</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-dark">Имейл</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-brand-accent transition-colors w-5 h-5" />
                <input 
                  type="email" 
                  required
                  className="w-full bg-brand-light border-b-2 border-gray-200 focus:border-brand-accent px-12 py-3 text-brand-dark outline-none transition-colors placeholder-gray-400 font-sans"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-dark">Парола</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-brand-accent transition-colors w-5 h-5" />
                <input 
                  type="password" 
                  required
                  className="w-full bg-brand-light border-b-2 border-gray-200 focus:border-brand-accent px-12 py-3 text-brand-dark outline-none transition-colors placeholder-gray-400 font-sans"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold">
              <label className="flex items-center text-gray-500 cursor-pointer hover:text-brand-dark">
                <input type="checkbox" className="mr-2" />
                ЗАПОМНИ МЕ
              </label>
              <a href="#" className="text-brand-accent hover:underline uppercase">Забравена парола?</a>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-4 bg-brand-dark text-white font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors flex items-center justify-center"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : 'ВХОД'}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500 font-medium">
            Нямате акаунт? <a href="#" onClick={() => onNavigate('home')} className="text-brand-dark font-bold hover:text-brand-accent transition-colors">Свържете се с нас</a>
          </div>
        </div>
      </div>
    </div>
  );
};