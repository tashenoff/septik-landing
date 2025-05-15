import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const TELEGRAM_BOT_TOKEN = '7149336396:AAE4xjrsCP6ywesCqinKSKy-gKLKZJqwBnQ'
const TELEGRAM_CHAT_ID = '-1002553764340'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const sendToTelegram = async (data: typeof formData) => {
    const message = `
🔔 Новая заявка с сайта:

👤 Имя: ${data.name}
📱 Телефон: ${data.phone}
📧 Email: ${data.email || 'Не указан'}
💬 Сообщение: ${data.message || 'Не указано'}
    `.trim()

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      console.error('Telegram API Error:', errorData)
      throw new Error(`Ошибка при отправке сообщения: ${errorData?.description || response.statusText}`)
    }

    return response.json()
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      await sendToTelegram(formData)
      setIsSubmitted(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      })
    } catch (err) {
      setError('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.')
      console.error('Error sending form:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('contact.title')}</h2>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold mb-2">{t('contact.success.title')}</h3>
            <p className="text-gray-600 mb-6">{t('contact.success.message')}</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-300"
              tabIndex={0}
            >
              {t('contact.success.new_request')}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">{t('contact.form.name')}*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder={t('contact.form.name')}
                  tabIndex={0}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">{t('contact.form.phone')}*</label>
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
              <label htmlFor="email" className="block text-gray-700 mb-2">{t('contact.form.email')}</label>
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
              <label htmlFor="message" className="block text-gray-700 mb-2">{t('contact.form.message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder={t('contact.form.message_placeholder')}
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
                    {t('contact.form.sending')}
                  </span>
                ) : t('contact.form.submit')}
              </button>
            </div>
          </form>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">{t('contact.contacts.phone')}</h3>
            <p className="text-gray-600">+7 (999) 123-45-67</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-2">{t('contact.contacts.email')}</h3>
            <p className="text-gray-600">info@ecoseptic.ru</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-4">🕒</div>
            <h3 className="text-xl font-semibold mb-2">{t('contact.contacts.working_hours')}</h3>
            <p className="text-gray-600">{t('contact.contacts.working_hours_value')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 