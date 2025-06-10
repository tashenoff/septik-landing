import React from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

const reviews = [
  {
    rating: 5,
    text: 'Мой септик давно нуждался в глубокой очистке, и я был приятно удивлен результатом. Использование биопрепаратов Т-103 и Т-107 действительно творит чудеса – никаких неприятных запахов, а система работает как новая. Процесс был быстрым и эффективным, а главное – экологически безопасным. Рекомендую всем, кто ищет надежное и современное решение для обслуживания септиков!',
    name: 'Айгуль Саптаева',
    date: '15.03.2024',
    category: 'Очистка септиков',
  },
  {
    rating: 5,
    text: 'Обратился в WBIOT по рекомендации друзей, и ни разу не пожалел. У меня были проблемы с заиливанием септика, и обычная откачка уже не помогала. Специалисты WBIOT применили свою уникальную технологию с препаратами Т-103 и Т-107, и результат превзошел все ожидания. Септик полностью очищен, а бактерии продолжают работать, обеспечивая долгосрочный эффект. Очень порадовал профессионализм и оперативность команды. Спасибо за отличную работу!',
    name: 'Азамат Нурланов',
    date: '12.03.2024',
    category: 'Очистка септиков',
  },
  {
    rating: 5,
    text: 'Долго искал компанию, которая сможет качественно обслужить мой септик, и наконец нашел WBIOT. Их подход с использованием биоразлагаемых препаратов Т-103 и Т-107 – это просто находка! Всего за 24 часа мой септик был полностью очищен от ила и твердых отходов, а неприятные запахи исчезли. Особенно ценно, что все это безопасно для окружающей среды. Теперь я уверен в чистоте и надежности своей системы. Обязательно буду обращаться к ним снова и рекомендовать знакомым.',
    name: 'Светлана Ким',
    date: '08.03.2024',
    category: 'Очистка септиков',
  },
]

const StarIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-400 inline-block mr-1"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
  </svg>
)

const ReviewCard = ({ rating, text, name, date, category }: {
  rating: number
  text: string
  name: string
  date: string
  category: string
}) => (
  <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 min-h-[200px]">
    <div className="flex items-center mb-2">
      {Array.from({ length: rating }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
    <p className="text-gray-800 text-base">{text}</p>
    <div className="mt-auto">
      <div className="font-semibold text-gray-900">{name}</div>
      <div className="text-sm text-gray-500 flex items-center gap-2">
        <span>{date}</span>
        <span>•</span>
        <span>{category}</span>
      </div>
    </div>
  </div>
)

// Плавающая кнопка WhatsApp
const FloatingWhatsappButton = () => (
  <a
    href="https://wa.me/77079263581"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:bg-[#1ebe5d] transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
    aria-label="Написать в WhatsApp"
    target="_blank"
    rel="noopener noreferrer"
    tabIndex={0}
  >
    <FaWhatsapp className="w-7 h-7 text-white" />
  </a>
)

const ReviewsSection = () => (
  <section className="py-10 px-2 md:px-0 bg-gray-50">
    <h2 className="section-title mb-4">Отзывы</h2>
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </div>
      <a
        href="https://www.instagram.com/wbiot?igsh=MWlkZnBpdWFvNzJlOQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 mt-8 mb-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl shadow-md py-4 px-6 text-white font-semibold text-lg hover:scale-105 transition-transform duration-200"
        aria-label="Больше отзывов — в нашем Instagram"
        tabIndex={0}
      >
        <FaInstagram className="w-7 h-7" />
        <span>Больше отзывов — в нашем Instagram</span>
      </a>
    </div>
    <FloatingWhatsappButton />
  </section>
)

export default ReviewsSection 