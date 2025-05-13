import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Имитация отправки формы
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsLoading(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      })
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 bg-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Связаться с нами</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-2">Спасибо за заявку!</h3>
              <p className="text-gray-600 mb-6">Мы свяжемся с вами в ближайшее время.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-300"
                tabIndex={0}
              >
                Отправить еще заявку
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Ваше имя*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Иван Иванов"
                    tabIndex={0}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Телефон*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="+7 (___) ___-__-__"
                    tabIndex={0}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="example@mail.ru"
                  tabIndex={0}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Опишите вашу ситуацию или задайте вопрос..."
                  tabIndex={0}
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-300 disabled:bg-gray-400"
                  disabled={isLoading}
                  tabIndex={0}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправка...
                    </span>
                  ) : 'Отправить заявку'}
                </button>
              </div>
            </form>
          )}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Телефон</h3>
            <p className="text-gray-600">+7 (999) 123-45-67</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">info@ecoseptic.ru</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-4">🕒</div>
            <h3 className="text-xl font-semibold mb-2">Время работы</h3>
            <p className="text-gray-600">Пн-Пт: 9:00 - 18:00<br />Сб: 10:00 - 16:00</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 