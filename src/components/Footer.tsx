import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">{t('footer.company_name')}</h3>
            <p className="text-gray-400 mb-4 max-w-xs">
              {t('footer.description')}
            </p>
            <div className="mt-6">
              <button 
                onClick={scrollToTop}
                className="text-white hover:text-teal-400 transition-colors"
                aria-label={t('footer.scroll_to_top')}
              >
                <svg 
                  className="w-8 h-8" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-montserrat mb-4">{t('footer.contacts.title')}</h3>
            <ul className="space-y-3">
              {/* <li className="flex items-start">
                <svg 
                  className="w-5 h-5 text-teal-500 mr-3 mt-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{t('footer.contacts.phone')}</span>
              </li> */}
              <li className="flex items-start">
                <svg 
                  className="w-5 h-5 text-teal-500 mr-3 mt-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{t('footer.contacts.email')}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold font-montserrat mb-4">{t('footer.navigation.title')}</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.navigation.services')}
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.navigation.about')}
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.navigation.process')}
                </a>
              </li>
              <li>
                <a 
                  href="#benefits" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.navigation.benefits')}
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.navigation.contacts')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <p className="text-center text-gray-500 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 