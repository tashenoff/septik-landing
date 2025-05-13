import { useState } from 'react'

interface ServiceProps {
  title: string
  description: string
  icon: string
  isActive: boolean
  onClick: () => void
  index: number
}

const ServiceCard = ({ title, description, icon, isActive, onClick, index }: ServiceProps) => {
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
      aria-label={`Услуга: ${title}`}
    >
      <div className="flex">
        <div className="mr-4 text-4xl text-teal-500">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold mb-3 font-montserrat group-hover:text-teal-600 transition-colors">{title}</h3>
          <p className="text-gray-600 font-inter">{description}</p>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-300 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></div>
    </div>
  )
}

const Services = () => {
  const [activeService, setActiveService] = useState(0)
  
  const services = [
    {
      title: 'Откачка септиков',
      description: 'Профессиональная откачка септиков с использованием современных биотехнологий, обеспечивающая полную очистку от ила и грязи.',
      icon: '🚚'
    },
    {
      title: 'Запуск препаратов',
      description: 'Двухэтапный запуск биопрепаратов (Т-103 и Т-107) для разжижения отходов и запуска полезных бактерий, которые продолжают работать в дальнейшем.',
      icon: '🧪'
    },
    {
      title: 'Подкоп и очистка почвы',
      description: 'Подкоп на штык лопаты для удаления почвы, пропитанной порошками, что обеспечивает более качественную очистку.',
      icon: '🌱'
    },
    {
      title: 'Вывоз и утилизация',
      description: 'Безопасный вывоз и утилизация мусора и отходов с соблюдением экологических норм и требований.',
      icon: '♻️'
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Наши услуги</h2>
        <p className="section-subtitle">Полный комплекс работ по обслуживанию септиков с использованием современных биотехнологий</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
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