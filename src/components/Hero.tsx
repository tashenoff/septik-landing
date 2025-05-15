import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleContactClick();
    }
  };

  const handleScrollDown = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-700 to-teal-900 text-white py-32"
      style={{
        backgroundImage: 'linear-gradient(rgba(13, 148, 136, 0.9), rgba(13, 148, 136, 0.9)), url("/images/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-montserrat leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleContactClick}
              onKeyDown={handleKeyDown}
              className="btn btn-white group"
              aria-label={t('hero.get_consultation')}
              tabIndex={0}
            >
              <span>{t('hero.get_consultation')}</span>
              <svg 
                className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a 
              href="#services" 
              className="btn border-2 border-white/30 text-white hover:bg-white/10"
              tabIndex={0}
            >
              {t('hero.learn_services')}
            </a>
          </div>
        </div>
      </div>
      
      {/* Стрелка вниз - новый дизайн */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <button 
          onClick={handleScrollDown}
          className="group p-3 relative focus:outline-none"
          aria-label="Прокрутить вниз"
        >
          <div className="h-12 w-12 rounded-full border-2 border-white/50 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-white">
            <div className="animate-pulse-slow">
              <svg 
                className="w-6 h-6 text-white transition-all duration-300 group-hover:text-teal-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </section>
  )
}

export default Hero; 