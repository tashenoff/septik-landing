import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface ServiceProps {
  serviceKey: string
  icon: string
  isActive: boolean
  onClick: () => void
  index: number
}

const ServiceCard = ({ serviceKey, icon, isActive, onClick, index }: ServiceProps) => {
  const { t } = useTranslation()
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick()
    }
  }

  return (
    <div 
      className={`group relative card p-6 hover:shadow-card ${
        isActive 
          ? 'border-l-4 border-teal-500 shadow-card' 
          : 'border-l-4 border-transparent'
      }`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isActive}
      aria-label={t(`services.items.${serviceKey}.title`)}
    >
      <div className="flex">
        <div className="mr-4 text-4xl text-teal-500">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold mb-3 font-montserrat group-hover:text-teal-600 transition-colors">
            {t(`services.items.${serviceKey}.title`)}
          </h3>
          <p className="text-gray-600 font-inter">
            {t(`services.items.${serviceKey}.description`)}
          </p>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-300 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></div>
    </div>
  )
}

const Services = () => {
  const [activeService, setActiveService] = useState(0)
  const { t } = useTranslation()
  
  const services = [
    {
      key: 'cleaning',
      icon: '🚚'
    },
    {
      key: 'maintenance',
      icon: '🧪'
    },
    {
      key: 'repair',
      icon: '🔧'
    },
    {
      key: 'consultation',
      icon: '💡'
    },
    {
      key: 'waste',
      icon: '🗑️'
    },
    {
      key: 'installation',
      icon: '⚒️'
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <h2 className="section-title">{t('services.title')}</h2>
        <p className="section-subtitle">{t('services.subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              serviceKey={service.key}
              icon={service.icon}
              isActive={activeService === index}
              onClick={() => setActiveService(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 