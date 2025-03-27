import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Leaf, Bell, Settings, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  const notifications = [
    {
      id: 1,
      title: t('notifications.weather'),
      message: t('notifications.weatherAlert'),
      time: '5m ago'
    },
    {
      id: 2,
      title: t('notifications.market'),
      message: t('notifications.priceUpdate'),
      time: '1h ago'
    }
  ];

  return (
    <header className="glass-morphism sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <h1 className="text-2xl font-bold text-green-800">AISA</h1>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link 
              to="/" 
              className={`text-lg ${location.pathname === '/' ? 'text-green-600 font-semibold' : 'text-green-800'}`}
            >
              {t('header.dashboard')}
            </Link>
            <Link 
              to="/marketplace" 
              className={`text-lg ${location.pathname === '/marketplace' ? 'text-green-600 font-semibold' : 'text-green-800'}`}
            >
              {t('header.marketplace')}
            </Link>
            <Link 
              to="/traceability" 
              className={`text-lg ${location.pathname === '/traceability' ? 'text-green-600 font-semibold' : 'text-green-800'}`}
            >
              {t('header.traceability')}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-green-600 bg-opacity-90 px-4 py-2 rounded-lg text-white hover:bg-green-700 transition-colors"
          >
            <Languages className="w-5 h-5" />
            {i18n.language === 'en' ? 'English' : 'हिंदी'}
          </button>
          
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative"
            >
              <Bell className="w-6 h-6 text-green-800 cursor-pointer hover:text-green-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 glass-morphism rounded-xl shadow-lg py-2 z-50">
                <h3 className="px-4 py-2 text-lg font-semibold text-green-800 border-b border-gray-200">
                  {t('notifications.title')}
                </h3>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="px-4 py-3 hover:bg-green-50 transition-colors cursor-pointer"
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-green-800">{notification.title}</h4>
                        <span className="text-xs text-gray-500">{notification.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <Settings 
            className="w-6 h-6 text-green-800 cursor-pointer hover:text-green-600 transition-colors"
            onClick={() => navigate('/settings')}
          />
        </div>
      </div>
    </header>
  );
}