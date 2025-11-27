import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ViewState } from '../types';

interface LegalProps {
  title: string;
  onNavigate: (view: ViewState) => void;
}

export const Legal: React.FC<LegalProps> = ({ title, onNavigate }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 relative bg-brand-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => onNavigate('home')}
          className="mb-8 flex items-center text-gray-500 hover:text-brand-dark transition-colors group font-bold uppercase text-xs tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Обратно към началото
        </button>

        <div className="bg-white p-10 md:p-16 border border-gray-200 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-black text-brand-dark mb-8 border-b-4 border-brand-accent pb-6 font-display uppercase">{title}</h1>
          
          <div className="prose prose-slate max-w-none text-gray-600 font-sans">
            <p className="text-sm font-bold text-gray-400 mb-8 uppercase tracking-wide">
              Последна актуализация: {new Date().toLocaleDateString('bg-BG')}
            </p>
            
            <h3 className="text-brand-dark font-bold text-xl mt-8 mb-4 font-display uppercase">1. Въведение</h3>
            <p className="mb-6">
              Добре дошли в VhodPro. Този документ описва правилата и условията за използване на нашите услуги за професионално управление на етажна собственост. Използвайки нашия сайт и услуги, вие се съгласявате с настоящите условия.
            </p>

            <h3 className="text-brand-dark font-bold text-xl mt-8 mb-4 font-display uppercase">2. Събиране на данни</h3>
            <p className="mb-6">
              Ние събираме информация с цел подобряване на нашите услуги. Всички лични данни се обработват съгласно изискванията на GDPR и приложимото българско законодателство. Вашата сигурност е наш приоритет.
            </p>

            <h3 className="text-brand-dark font-bold text-xl mt-8 mb-4 font-display uppercase">3. Услуги и Плащания</h3>
            <p className="mb-6">
              Всички плащания през платформата се извършват чрез защитени криптирани връзки. VhodPro не съхранява пълни данни за вашите кредитни или дебитни карти. Абонаментните планове се подновяват автоматично, освен ако не бъдат прекратени.
            </p>

            <h3 className="text-brand-dark font-bold text-xl mt-8 mb-4 font-display uppercase">4. Отговорност</h3>
            <p className="mb-6">
              Ние се стремим към 100% точност на информацията, но не носим отговорност за технически грешки или прекъсвания, причинени от трети страни (доставчици на ток, вода, интернет).
            </p>
            
            <div className="mt-12 p-6 bg-brand-light border-l-4 border-brand-accent">
              <p className="text-sm font-medium">
                За въпроси относно този документ, моля свържете се с нашия правен отдел на: <span className="text-brand-dark font-bold">legal@vhodpro.bg</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};