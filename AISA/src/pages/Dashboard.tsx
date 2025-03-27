import React, { useState } from 'react';
import { Cloud, Droplets, MessageSquare, Plane as Plant, ThermometerSun, Sprout } from 'lucide-react';

export function Dashboard() {
  const [showChatbot, setShowChatbot] = useState(false);

  const weatherData = {
    temperature: '32°C',
    humidity: '65%',
    forecast: 'Partly Cloudy',
    windSpeed: '12 km/h',
    rainfall: '0mm'
  };

  const soilHealth = {
    moisture: '42%',
    pH: '6.8',
    nutrients: 'Optimal',
    organicMatter: '3.2%',
    nitrogen: 'High'
  };

  const recommendations = [
    {
      title: 'Optimal Irrigation Time',
      description: 'Best time to irrigate crops today: 6:00 AM - 7:30 AM. Expected to save 20% more water based on current soil moisture levels.',
      icon: <Droplets className="w-6 h-6 text-blue-500" />,
      priority: 'High'
    },
    {
      title: 'Weather Alert',
      description: 'Light rain expected in the next 24 hours. Consider postponing any planned pesticide application.',
      icon: <Cloud className="w-6 h-6 text-gray-500" />,
      priority: 'Medium'
    },
    {
      title: 'Crop Health',
      description: 'Your wheat crops are showing excellent growth patterns. Predicted yield increase of 15% compared to last season.',
      icon: <Plant className="w-6 h-6 text-green-500" />,
      priority: 'Low'
    }
  ];

  const schemes = [
    {
      title: 'PM-KISAN Scheme',
      description: 'Next installment of ₹2,000 due in 15 days. Complete your e-KYC before the deadline.',
      status: 'Active',
      amount: '₹2,000',
      deadline: '2024-04-15'
    },
    {
      title: 'Crop Insurance',
      description: 'Premium payment of ₹3,500 pending for Kharif season. Last date for enrollment: April 30, 2024',
      status: 'Action Required',
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
                <h2 className="text-2xl font-bold text-green-800">Weather Conditions</h2>
                <ThermometerSun className="w-10 h-10 text-yellow-500" />
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Temperature</p>
                  <p className="text-3xl font-bold text-green-700">{weatherData.temperature}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Humidity</p>
                  <p className="text-3xl font-bold text-green-700">{weatherData.humidity}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Wind Speed</p>
                  <p className="text-3xl font-bold text-green-700">{weatherData.windSpeed}</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <p className="text-blue-800 font-medium">Forecast: {weatherData.forecast}</p>
                <p className="text-blue-600 mt-2">Expected Rainfall: {weatherData.rainfall}</p>
              </div>
            </div>

            <div className="glass-morphism rounded-2xl p-8 card-hover">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-green-800">Soil Health</h2>
                <Sprout className="w-10 h-10 text-green-500" />
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Moisture</p>
                  <p className="text-3xl font-bold text-green-700">{soilHealth.moisture}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 mb-2">pH Level</p>
                  <p className="text-3xl font-bold text-green-700">{soilHealth.pH}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Organic Matter</p>
                  <p className="text-3xl font-bold text-green-700">{soilHealth.organicMatter}</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-xl">
                <p className="text-green-800 font-medium">Nutrient Status: {soilHealth.nutrients}</p>
                <p className="text-green-600 mt-2">Nitrogen Levels: {soilHealth.nitrogen}</p>
              </div>
            </div>
          </div>

          {/* AI Recommendations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white text-shadow mb-6">AI Recommendations</h2>
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
                        {rec.priority} Priority
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
            <h2 className="text-2xl font-bold text-white text-shadow mb-6">Government Schemes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {schemes.map((scheme, index) => (
                <div key={index} className="glass-morphism rounded-2xl p-6 card-hover">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-3">{scheme.title}</h3>
                      <p className="text-gray-700 mb-4">{scheme.description}</p>
                      <div className="flex gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Amount</p>
                          <p className="font-bold text-green-700">{scheme.amount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Deadline</p>
                          <p className="font-bold text-green-700">{scheme.deadline}</p>
                        </div>
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      scheme.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
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
                  <h3 className="font-bold text-green-800">AI Assistant</h3>
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
                    How can I help you today with your farming needs?
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white bg-opacity-90"
                />
                <button className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition-colors">
                  Send
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}