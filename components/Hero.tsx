import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-brand-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
         {/* Architectural Image with Overlay */}
         <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate Architecture" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-brand-dark/90"></div>
        
        {/* Diagonal Stripes Pattern */}
        <div className="absolute inset-0 bg-stripes opacity-30"></div>
        
        {/* Geometric Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right border-l border-white/5"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left">
        
        <h1 className="font-display font-black text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 tracking-tight">
          ПРОФЕСИОНАЛЕН <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">ДОМОУПРАВИТЕЛ</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-white font-bold mb-6 max-w-3xl flex items-center gap-4">
          <div className="h-1 w-12 bg-brand-accent"></div>
          За спокойствието на вашия вход.
        </h2>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed font-sans font-light pl-1">
          Пълна поддръжка, финансова прозрачност и модерно управление на етажната собственост. 
          Стабилност, структура и доверие.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <a
            href="#contact"
            className="group relative px-10 py-5 bg-brand-accent text-white font-bold uppercase tracking-wider overflow-hidden transition-all hover:bg-brand-accentHover"
          >
            <span className="relative flex items-center justify-center gap-3">
              Заяви Оферта <ArrowRight size={20} />
            </span>
          </a>
          
          <a
            href="#services"
            className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center"
          >
            Научи повече
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-brand-accent">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};