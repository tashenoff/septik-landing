const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat mb-4">
              О нашей технологии
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Эффективные и экологичные решения для обслуживания септиков
            </p>
          </div>
          
          {/* Блок Т-103 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 hover:shadow-xl transition-shadow duration-300">
            {/* Заголовок блока */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 py-6 px-8">
              <h3 className="text-2xl font-bold text-white font-montserrat flex items-center">
                <span className="mr-3 text-2xl">🧪</span>
                Что такое Т-103 и зачем он нужен?
              </h3>
            </div>
            
            {/* Карточки с информацией */}
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-teal-50 rounded-lg p-5 border-l-4 border-teal-600">
                  <div className="flex items-center mb-3">
                    <span className="text-teal-600 text-2xl mr-3">🌱</span>
                    <h4 className="font-medium text-teal-800">Био-формула</h4>
                  </div>
                  <p className="text-gray-700">Т-103 — это мощная химия, но полностью биоразлагаемая</p>
                </div>
                
                <div className="bg-teal-50 rounded-lg p-5 border-l-4 border-teal-600">
                  <div className="flex items-center mb-3">
                    <span className="text-teal-600 text-2xl mr-3">⏱️</span>
                    <h4 className="font-medium text-teal-800">Быстрое действие</h4>
                  </div>
                  <p className="text-gray-700">Заливаем в септик канистру Т-103, ждём всего 24 часа</p>
                </div>
                
                <div className="bg-teal-50 rounded-lg p-5 border-l-4 border-teal-600">
                  <div className="flex items-center mb-3">
                    <span className="text-teal-600 text-2xl mr-3">💧</span>
                    <h4 className="font-medium text-teal-800">Полная очистка</h4>
                  </div>
                  <p className="text-gray-700">За это время препарат разжижает весь ил и грязь — не только воду, но и плотные отходы!</p>
                </div>
                
                <div className="bg-teal-50 rounded-lg p-5 border-l-4 border-teal-600">
                  <div className="flex items-center mb-3">
                    <span className="text-teal-600 text-2xl mr-3">🚚</span>
                    <h4 className="font-medium text-teal-800">Эффективная откачка</h4>
                  </div>
                  <p className="text-gray-700">Ассенизатор сможет откачать всё подчистую!</p>
                </div>
              </div>
              
              {/* Дополнительные преимущества */}
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-teal-600 text-2xl mr-3">✨</span>
                  Дополнительные преимущества
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1">✓</span>
                    <p className="text-gray-700">Большая часть Т-103 превращается в углекислый газ и воду, остатки легко удаляются</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1">✓</span>
                    <p className="text-gray-700">Можно проливать все сливы в доме — прочистит трубы и уберёт запах</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Блок Т-107 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Заголовок блока */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-6 px-8">
              <h3 className="text-2xl font-bold text-white font-montserrat flex items-center">
                <span className="mr-3 text-2xl">🧬</span>
                На следующий день заливаем Т-107
              </h3>
            </div>
            
            {/* Карточки с информацией */}
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
                  <div className="flex items-center mb-3">
                    <span className="text-blue-600 text-2xl mr-3">🧫</span>
                    <h4 className="font-medium text-blue-800">Полезные бактерии</h4>
                  </div>
                  <p className="text-gray-700">Это — суперконцентрат полезных бактерий для биологической очистки</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
                  <div className="flex items-center mb-3">
                    <span className="text-blue-600 text-2xl mr-3">🔬</span>
                    <h4 className="font-medium text-blue-800">Высокая концентрация</h4>
                  </div>
                  <p className="text-gray-700">На 100 г — около 300 миллиардов клеток живых бактерий</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
                  <div className="flex items-center mb-3">
                    <span className="text-blue-600 text-2xl mr-3">🌍</span>
                    <h4 className="font-medium text-blue-800">Глубокая очистка</h4>
                  </div>
                  <p className="text-gray-700">Они доочищают почву в глубину, а главное — остаются работать дальше</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
                  <div className="flex items-center mb-3">
                    <span className="text-blue-600 text-2xl mr-3">👍</span>
                    <h4 className="font-medium text-blue-800">Долгосрочный эффект</h4>
                  </div>
                  <p className="text-gray-700">Всё, что потом попадёт в септик, будет переработано бактериями!</p>
                </div>
              </div>
              
              {/* Информация о безопасности */}
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-blue-600 text-2xl mr-3">🌿</span>
                  Экологическая безопасность
                </h4>
                <p className="text-gray-700">
                  Препарат Т-107 полностью безопасен для окружающей среды и здоровья человека. 
                  Бактерии естественным образом очищают систему без использования агрессивной химии.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 