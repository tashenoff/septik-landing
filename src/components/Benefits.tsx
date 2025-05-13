const Benefits = () => {
  const benefits = [
    {
      title: 'Эффективно',
      description: 'Наша технология позволяет полностью очистить септик от твердых отходов и ила, а не только от воды.',
      icon: '✅'
    },
    {
      title: 'Безопасно для природы',
      description: 'Используемые препараты полностью биоразлагаемы и не наносят вред окружающей среде.',
      icon: '🌿'
    },
    {
      title: 'Удобно и быстро',
      description: 'Весь процесс очистки занимает минимум времени, а результат сохраняется надолго.',
      icon: '⏱'
    },
    {
      title: 'Долгосрочный результат',
      description: 'Бактерии продолжают работать после очистки, перерабатывая новые отходы, поступающие в септик.',
      icon: '💪'
    },
    {
      title: 'Устранение запаха',
      description: 'Препараты эффективно устраняют неприятные запахи как в септике, так и в сливных трубах.',
      icon: '👃'
    },
    {
      title: 'Экономия средств',
      description: 'Регулярное использование нашей технологии снижает необходимость в частой откачке и капитальном ремонте.',
      icon: '💰'
    }
  ]

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Преимущества нашей технологии</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{benefit.icon}</div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-teal-50 rounded-lg p-6 md:p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-teal-700">Профессиональный подход и качество</h3>
          <p className="text-lg mb-0">
            Мы используем проверенные технологии и профессиональное оборудование для обеспечения наилучшего результата. 
            Наша команда имеет большой опыт работы с септиками различных типов и готова решить любые проблемы, 
            связанные с их обслуживанием.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Benefits 