import { useTranslation } from 'react-i18next'

const Process = () => {
  const { t } = useTranslation()
  
  const steps = [
    {
      number: 1,
      key: 'inspection',
      icon: '🔍',
      color: 'from-pink-500 to-rose-500',
      iconBg: 'bg-rose-100'
    },
    {
      number: 2,
      key: 'preparation',
      icon: '🧪',
      color: 'from-teal-500 to-cyan-500',
      iconBg: 'bg-teal-100'
    },
    {
      number: 3,
      key: 'cleaning',
      icon: '🚚',
      color: 'from-amber-500 to-orange-500',
      iconBg: 'bg-amber-100'
    },
    {
      number: 4,
      key: 'treatment',
      icon: '🦠',
      color: 'from-blue-500 to-indigo-500',
      iconBg: 'bg-blue-100'
    }
  ]

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-4">{t('steps.title')}</h2>
        <p className="section-subtitle mb-16">{t('steps.subtitle')}</p>
        
        <div className="relative">
          {/* Вертикальная линия для десктопов */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-teal-300 to-teal-600 transform -translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Маркер на вертикальной линии для мобильных */}
                <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="md:w-1/2 relative z-10">
                    <div className={`
                      bg-white rounded-xl shadow-lg p-6 border-t-4 transition-transform duration-300 hover:-translate-y-1 
                      ${index % 2 === 0 ? 'md:mr-10 border-t-teal-500' : 'md:ml-10 border-t-teal-500'}
                    `}>
                      {/* Иконка */}
                      <div className={`absolute -top-6 ${index % 2 === 0 ? 'left-6' : 'right-6'} w-12 h-12 rounded-full flex items-center justify-center text-xl ${step.iconBg} shadow-md`}>
                        <span>{step.icon}</span>
                      </div>
                      
                      {/* Номер шага с градиентом */}
                      <div className="mb-1 mt-3 flex items-center">
                        <div className={`bg-gradient-to-r ${step.color} text-white text-xs font-bold px-2.5 py-1 rounded-full mr-2`}>
                          {t('steps.step')} {step.number}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-gray-800">
                        {t(`steps.items.${step.key}.title`)}
                      </h3>
                      <p className="text-gray-600">
                        {t(`steps.items.${step.key}.description`)}
                      </p>
                    </div>
                  </div>
                  
                  {/* Центральный круг с номером */}
                  <div className="hidden md:flex items-center justify-center relative w-0">
                    <div className={`
                      absolute left-1/2 transform -translate-x-1/2
                      bg-gradient-to-br ${step.color} text-white 
                      rounded-full w-16 h-16 
                      flex items-center justify-center 
                      font-bold text-xl z-10 
                      shadow-lg border-4 border-white
                    `}>
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process 