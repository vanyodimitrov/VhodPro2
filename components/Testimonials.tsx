import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: 'Иван Петров',
    role: 'Домоуправител, кв. Лозенец',
    content: 'След години хаос и несъбрани такси, VhodPro внесе ред за по-малко от месец. Изключително професионално отношение.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Мария Георгиева',
    role: 'Живущ, кв. Манастирски ливади',
    content: 'Приложението е супер удобно. Плащам си сметките за секунди и виждам точно за какво се харчат парите на входа.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Стефан Димитров',
    role: 'Инвеститор, сграда Vitosha View',
    content: 'Партнираме си с VhodPro за управлението на три нови сгради. Надежден партньор, който поема цялата тежест.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
  },
  {
      name: 'Елена Михайлова',
      role: 'Архитект',
      content: 'Чистота, ред и прозрачност. Точно това, което търсехме за нашия затворен комплекс.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative">
       {/* Top Border Accent */}
       <div className="absolute top-0 left-0 w-full h-2 bg-brand-accent"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-16 font-display uppercase tracking-tight">
          Отзиви от <span className="text-brand-accent">Клиенти</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-[#243145] p-8 border border-white/5 relative group hover:border-brand-accent transition-colors">
              <Quote className="text-brand-accent mb-6 w-8 h-8 opacity-50" />
              <p className="text-gray-300 mb-8 text-sm leading-relaxed font-sans">"{t.content}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.image} alt={t.name} className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all object-cover" />
                <div>
                  <h5 className="text-white font-bold text-sm font-display">{t.name}</h5>
                  <span className="text-brand-accent text-xs font-bold uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};