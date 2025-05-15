import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat mb-4">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              {t('about.subtitle')}
            </p>
          </div>
          
          {/* Блок Т-103 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 hover:shadow-xl transition-shadow duration-300">
            {/* Заголовок блока */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 py-6 px-8">
              <h3 className="text-2xl font-bold text-white font-montserrat flex items-center">
                <span className="mr-3 text-2xl">🧪</span>
                {t('about.t103.title')}
              </h3>
            </div>
            
            {/* Карточки с информацией */}
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-teal-50 rounded-lg p-5 border-l-4 border-teal-600">
                  <div className="flex items-center mb-3">
                    <span className="text-teal-600 text-2xl mr-3">🌱</span>
                    <h4 className="font-medium text-teal-800">{t('about.t103.cards.bio_formula.title')}</h4>
                  </div>
                  <p className="text-gray-700">{t('about.t103.cards.bio_formula.description')}</p>
                </div>
                
                <div className="bg-teal-50 rounded-lg p-5 border-l-4 border-teal-600">
                  <div className="flex items-center mb-3">
                    <span className="text-teal-600 text-2xl mr-3">⏱️</span>
                    <h4 className="font-medium text-teal-800">{t('about.t103.cards.fast_action.title')}</h4>
                  </div>
                  <p className="text-gray-700">{t('about.t103.cards.fast_action.description')}</p>
                </div>
                
                <div className="bg-teal-50 rounded-lg p-5 border-l-4 border-teal-600">
                  <div className="flex items-center mb-3">
                    <span className="text-teal-600 text-2xl mr-3">💧</span>
                    <h4 className="font-medium text-teal-800">{t('about.t103.cards.full_cleaning.title')}</h4>
                  </div>
                  <p className="text-gray-700">{t('about.t103.cards.full_cleaning.description')}</p>
                </div>
                
                <div className="bg-teal-50 rounded-lg p-5 border-l-4 border-teal-600">
                  <div className="flex items-center mb-3">
                    <span className="text-teal-600 text-2xl mr-3">🚚</span>
                    <h4 className="font-medium text-teal-800">{t('about.t103.cards.effective_pumping.title')}</h4>
                  </div>
                  <p className="text-gray-700">{t('about.t103.cards.effective_pumping.description')}</p>
                </div>
              </div>
              
              {/* Дополнительные преимущества */}
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-teal-600 text-2xl mr-3">✨</span>
                  {t('about.t103.additional_benefits.title')}
                </h4>
                <ul className="space-y-3">
                  {(t('about.t103.additional_benefits.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-600 mr-3 mt-1">✓</span>
                      <p className="text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Блок Т-107 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Заголовок блока */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-6 px-8">
              <h3 className="text-2xl font-bold text-white font-montserrat flex items-center">
                <span className="mr-3 text-2xl">🧬</span>
                {t('about.t107.title')}
              </h3>
            </div>
            
            {/* Карточки с информацией */}
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
                  <div className="flex items-center mb-3">
                    <span className="text-blue-600 text-2xl mr-3">🧫</span>
                    <h4 className="font-medium text-blue-800">{t('about.t107.cards.bacteria.title')}</h4>
                  </div>
                  <p className="text-gray-700">{t('about.t107.cards.bacteria.description')}</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
                  <div className="flex items-center mb-3">
                    <span className="text-blue-600 text-2xl mr-3">🔬</span>
                    <h4 className="font-medium text-blue-800">{t('about.t107.cards.concentration.title')}</h4>
                  </div>
                  <p className="text-gray-700">{t('about.t107.cards.concentration.description')}</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
                  <div className="flex items-center mb-3">
                    <span className="text-blue-600 text-2xl mr-3">🌍</span>
                    <h4 className="font-medium text-blue-800">{t('about.t107.cards.deep_cleaning.title')}</h4>
                  </div>
                  <p className="text-gray-700">{t('about.t107.cards.deep_cleaning.description')}</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
                  <div className="flex items-center mb-3">
                    <span className="text-blue-600 text-2xl mr-3">👍</span>
                    <h4 className="font-medium text-blue-800">{t('about.t107.cards.long_effect.title')}</h4>
                  </div>
                  <p className="text-gray-700">{t('about.t107.cards.long_effect.description')}</p>
                </div>
              </div>
              
              {/* Информация о безопасности */}
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-blue-600 text-2xl mr-3">🌿</span>
                  {t('about.t107.eco_safety.title')}
                </h4>
                <p className="text-gray-700">
                  {t('about.t107.eco_safety.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 