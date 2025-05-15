import { useTranslation } from 'react-i18next';

const Benefits = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      key: 'effective',
      icon: '✅'
    },
    {
      key: 'eco_friendly',
      icon: '🌿'
    },
    {
      key: 'fast',
      icon: '⏱'
    },
    {
      key: 'long_lasting',
      icon: '💪'
    },
    {
      key: 'no_smell',
      icon: '👃'
    },
    {
      key: 'cost_effective',
      icon: '💰'
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('benefits.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.key} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{benefit.icon}</div>
                <h3 className="text-xl font-bold">{t(`benefits.items.${benefit.key}.title`)}</h3>
              </div>
              <p className="text-gray-600">{t(`benefits.items.${benefit.key}.description`)}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-teal-50 rounded-lg p-6 md:p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-teal-700">{t('benefits.professional.title')}</h3>
          <p className="text-lg mb-0">{t('benefits.professional.description')}</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 