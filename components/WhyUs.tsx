import React from 'react';
import { CheckCircle2, Shield, Smartphone, Zap } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: '100% Прозрачност',
    description: 'Всеки разход е документиран. Имате достъп до финансовите отчети в реално време през нашия клиентски портал.',
    icon: CheckCircle2,
  },
  {
    title: 'Сигурност и Доверие',
    description: 'Лицензирана фирма с опит. Гарантираме коректност и защита на средствата на етажната собственост.',
    icon: Shield,
  },
  {
    title: 'Дигитални Плащания',
    description: 'Възможност за плащане на такси чрез EasyPay, ePay, банков превод или директно през мобилното приложение.',
    icon: Smartphone,
  },
  {
    title: 'Експресна Реакция',
    description: 'Дежурни екипи за аварийни ситуации. Вашето спокойствие е наш приоритет номер едно.',
    icon: Zap,
  },
];

export const WhyUs: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2">
          <div className="mb-10">
              <h2 className="text-brand-accent font-bold tracking-widest uppercase mb-2 font-display">Защо VhodPro?</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 font-display uppercase leading-none">
                СТАБИЛНОСТ.<br />СТРУКТУРА.<br />ДОВЕРИЕ.
              </h3>
              <div className="w-20 h-2 bg-brand-accent mb-8"></div>
              <p className="text-brand-dark/70 text-lg leading-relaxed font-sans font-medium">
                Ние съчетаваме дългогодишния опит в управлението на имоти с най-новите технологии, за да предоставим услуга, която е невидима, но незаменима.
              </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-3 group">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-dark p-2 text-white group-hover:bg-brand-accent transition-colors">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-brand-dark font-bold text-lg font-display">{feature.title}</h4>
                </div>
                <p className="text-gray-600 text-sm pl-12 border-l border-gray-200 group-hover:border-brand-accent transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0 bg-brand-dark transform translate-x-4 translate-y-4"></div>
          <div className="relative z-10 bg-white p-2 shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
               alt="Modern Dashboard" 
               className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute -bottom-6 -left-6 bg-brand-dark p-6 text-white flex items-center gap-4 shadow-xl border-t-4 border-brand-accent">
                <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Статус на сградата</p>
                    <p className="text-white font-bold font-display text-lg">ВСИЧКИ СМЕТКИ ПЛАТЕНИ</p>
                </div>
                <div className="bg-green-500 rounded-full p-1">
                    <CheckCircle2 className="text-white w-6 h-6" />
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};