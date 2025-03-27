import React, { useState } from 'react';
import { Cloud, Droplets, MessageSquare, Plane as Plant, ThermometerSun, Sprout } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Dashboard() {
  const { t } = useTranslation();
  const [showChatbot, setShowChatbot] = useState(false);

  const weatherData = {
    temperature: '32°C',
    humidity: '65%',
    forecast: t('dashboard.weather.forecast'),
    windSpeed: '12 km/h',
    rainfall: '0mm'
  };

  const soilHealth = {
    moisture: '42%',
    pH: '6.8',
    nutrients: t('dashboard.soil.nutrients'),
    organicMatter: '3.2%',
    nitrogen: t('dashboard.soil.nitrogen')
  };

  const recommendations = [
    {
      title: t('dashboard.recommendations.irrigation.title'),
      description: t('dashboard.recommendations.irrigation.description'),
      icon: <Droplets className="w-6 h-6 text-blue-500" />,
      priority: 'High'
    },
    {
      title: t('dashboard.recommendations.weather.title'),
      description: t('dashboard.recommendations.weather.description'),
      icon: <Cloud className="w-6 h-6 text-gray-500" />,
      priority: 'Medium'
    },
    {
      title: t('dashboard.recommendations.crop.title'),
      description: t('dashboard.recommendations.crop.description'),
      icon: <Plant className="w-6 h-6 text-green-500" />,
      priority: 'Low'
    }
  ];

  const schemes = [
    {
      title: 'PM-KISAN Scheme',
      description: 'Next installment of ₹2,000 due in 15 days. Complete your e-KYC before the deadline.',
      status: t('dashboard.schemes.status.active'),
      amount: '₹2,000',
      deadline: '2024-04-15'
    },
    {
      title: 'Crop Insurance',
      description: 'Premium payment of ₹3,500 pending for Kharif season. Last date for enrollment: April 30, 2024',
      status: t('dashboard.schemes.status.actionRequired'),
      amount: '₹3,500',
      deadline: '2024-04-30'
    }
  ];

  return (
    <div className="hero-pattern min-h-screen">
      <div className="gradient-overlay min-h-screen py-8">
        <main className="container mx-auto px-6">
          {/* Weather and Soil Health Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-morphism rounded-2xl p-8 card-hover">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-green-800">{t('dashboard.weather.title')}</h2>
                <ThermometerSun className="w-10 h-10 text-yellow-500" />
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">{t('dashboard.weather.temperature')}</p>
                  <p className="text-3xl font-bold text-green-700">{weatherData.temperature}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 mb-2">{t('dashboard.weather.humidity')}</p>
                  <p className="text-3xl font-bold text-green-700">{weatherData.humidity}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 mb-2">{t('dashboard.weather.windSpeed')}</p>
                  <p className="text-3xl font-bold text-green-700">{weatherData.windSpeed}</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <p className="text-blue-800 font-medium">{t('dashboard.weather.forecast')}: {weatherData.forecast}</p>
                <p className="text-blue-600 mt-2">{t('dashboard.weather.rainfall')}: {weatherData.rainfall}</p>
              </div>
            </div>

            <div className="glass-morphism rounded-2xl p-8 card-hover">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-green-800">{t('dashboard.soil.title')}</h2>
                <Sprout className="w-10 h-10 text-green-500" />
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">{t('dashboard.soil.moisture')}</p>
                  <p className="text-3xl font-bold text-green-700">{soilHealth.moisture}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 mb-2">{t('dashboard.soil.ph')}</p>
                  <p className="text-3xl font-bold text-green-700">{soilHealth.pH}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 mb-2">{t('dashboard.soil.organicMatter')}</p>
                  <p className="text-3xl font-bold text-green-700">{soilHealth.organicMatter}</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-xl">
                <p className="text-green-800 font-medium">{t('dashboard.soil.nutrients')}: {soilHealth.nutrients}</p>
                <p className="text-green-600 mt-2">{t('dashboard.soil.nitrogen')}: {soilHealth.nitrogen}</p>
              </div>
            </div>
          </div>

          {/* AI Recommendations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white text-shadow mb-6">{t('dashboard.recommendations.title')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {recommendations.map((rec, index) => (
                <div key={index} className="glass-morphism rounded-2xl p-6 card-hover">
                  <div className="flex items-center gap-4 mb-4">
                    {rec.icon}
                    <div>
                      <h3 className="font-bold text-green-800">{rec.title}</h3>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        rec.priority === 'High' ? 'bg-red-100 text-red-800' :
                        rec.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {t(`dashboard.recommendations.priority.${rec.priority.toLowerCase()}`)}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700">{rec.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Government Schemes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white text-shadow mb-6">{t('dashboard.schemes.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {schemes.map((scheme, index) => (
                <div key={index} className="glass-morphism rounded-2xl p-6 card-hover">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-3">{scheme.title}</h3>
                      <p className="text-gray-700 mb-4">{scheme.description}</p>
                      <div className="flex gap-4">
                        <div>
                          <p className="text-sm text-gray-600">{t('dashboard.schemes.amount')}</p>
                          <p className="font-bold text-green-700">{scheme.amount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">{t('dashboard.schemes.deadline')}</p>
                          <p className="font-bold text-green-700">{scheme.deadline}</p>
                        </div>
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      scheme.status === t('dashboard.schemes.status.active') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {scheme.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Chatbot Button */}
          <button
            onClick={() => setShowChatbot(!showChatbot)}
            className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all transform hover:scale-110"
          >
            <MessageSquare className="w-6 h-6" />
          </button>

          {/* Chatbot Dialog */}
          {showChatbot && (
            <div className="fixed bottom-28 right-8 w-96 glass-morphism rounded-2xl shadow-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                  <h3 className="font-bold text-green-800">{t('dashboard.chatbot.title')}</h3>
                </div>
                <button
                  onClick={() => setShowChatbot(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="h-96 overflow-y-auto rounded-xl p-4 mb-4 bg-white bg-opacity-50">
                <div className="space-y-4">
                  <p className="text-gray-700 bg-green-50 p-3 rounded-lg inline-block">
                    {t('dashboard.chatbot.welcome')}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder={t('dashboard.chatbot.placeholder')}
                  className="flex-1 px-4 py-2 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white bg-opacity-90"
                />
                <button className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition-colors">
                  {t('dashboard.chatbot.send')}
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
