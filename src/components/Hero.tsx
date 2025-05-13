import React from 'react';
import type { KeyboardEvent } from 'react';

const Hero: React.FC = () => {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleContactClick()
    }
  }
  
  const handleScrollDown = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 bg-cover" style={{ 
        backgroundImage: 'url(/images/bg.png)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}></div>
      
      {/* Тонировка изображения */}
      <div className="absolute inset-0 bg-teal-900/70"></div>
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-montserrat leading-tight">
            Современный подход к обслуживанию септиков
          </h1>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Используем инновационные биотехнологии для эффективной очистки, 
            которые безопасны для природы и дают долгосрочный результат.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleContactClick}
              onKeyDown={handleKeyDown}
              className="btn btn-white group"
              aria-label="Получить консультацию"
              tabIndex={0}
            >
              <span>Получить консультацию</span>
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
              Узнать о услугах
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