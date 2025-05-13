import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    // При монтировании компонента
    window.addEventListener('scroll', handleScroll)
    return () => {
      // При размонтировании компонента
      window.removeEventListener('scroll', handleScroll)
      // Убедимся, что overflow не останется hidden
      document.body.style.overflow = ''
    }
  }, [])
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  
  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-teal-700 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Эко логотип" 
              className="h-16 md:h-20"
            />
            <span className="ml-3 text-white font-bold text-xl md:text-2xl font-montserrat tracking-wide">
              WBIOT.KZ
            </span>
          </a>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-1 mr-6">
              <a href="#services" className="header-link">
                Услуги
              </a>
              <a href="#about" className="header-link">
                О технологии
              </a>
              <a href="#process" className="header-link">
                Процесс
              </a>
              <a href="#benefits" className="header-link">
                Преимущества
              </a>
              <a href="#contact" className="header-link">
                Контакты
              </a>
            </nav>
            
            <div className="flex items-center">
              {/* Телефон в ПК версии */}
              <a href="tel:+77079263581" className="text-white mr-4 hover:text-teal-200 transition-colors">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +7 707 926-35-81
                </span>
              </a>
              
              <a 
                href="#contact" 
                className="btn btn-white py-2 px-4 text-sm"
              >
                Связаться
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button 
            type="button"
            className="md:hidden text-white p-2 rounded-md hover:bg-teal-600 transition-colors" 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMobileMenuOpen}
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`absolute top-full left-0 right-0 bg-teal-800 shadow-xl transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container py-6">
          {/* Телефон в мобильном меню */}
          <a 
            href="tel:+77079263581" 
            className="flex items-center text-white text-lg font-medium mb-6 bg-teal-700/50 px-4 py-3 rounded-md"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +7 707 926-35-81
          </a>
          
          <nav className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-white text-lg font-medium hover:text-teal-200 transition-colors px-2 py-1"
              onClick={handleMenuItemClick}
            >
              Услуги
            </a>
            <a 
              href="#about" 
              className="text-white text-lg font-medium hover:text-teal-200 transition-colors px-2 py-1"
              onClick={handleMenuItemClick}
            >
              О технологии
            </a>
            <a 
              href="#process" 
              className="text-white text-lg font-medium hover:text-teal-200 transition-colors px-2 py-1"
              onClick={handleMenuItemClick}
            >
              Процесс
            </a>
            <a 
              href="#benefits" 
              className="text-white text-lg font-medium hover:text-teal-200 transition-colors px-2 py-1"
              onClick={handleMenuItemClick}
            >
              Преимущества
            </a>
            <a 
              href="#contact" 
              className="text-white text-lg font-medium hover:text-teal-200 transition-colors px-2 py-1"
              onClick={handleMenuItemClick}
            >
              Контакты
            </a>
            <div className="pt-4 mt-2 border-t border-teal-600">
              <a 
                href="#contact" 
                className="bg-white text-teal-700 px-4 py-2 rounded-md font-medium inline-block w-full text-center shadow hover:bg-teal-50 transition-colors"
                onClick={handleMenuItemClick}
              >
                Связаться с нами
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 