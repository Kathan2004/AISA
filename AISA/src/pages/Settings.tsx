import React from 'react';
import { useTranslation } from 'react-i18next';
import { User, Bell, Shield, HelpCircle, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Settings() {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="hero-pattern min-h-screen">
      <div className="gradient-overlay min-h-screen py-8">
        <div className="container mx-auto px-6">
          <div className="glass-morphism rounded-2xl p-8">
            <h1 className="text-3xl font-bold text-green-800 mb-8">
              {t('settings.title')}
            </h1>

            <div className="space-y-6">
              <div className="glass-morphism p-6 rounded-xl card-hover">
                <div className="flex items-center gap-4">
                  <User className="w-6 h-6 text-green-600" />
                  <div>
                    <h2 className="text-xl font-semibold text-green-800">
                      {t('settings.profile.title')}
                    </h2>
                    <p className="text-gray-600">{t('settings.profile.description')}</p>
                  </div>
                </div>
              </div>

              <div className="glass-morphism p-6 rounded-xl card-hover">
                <div className="flex items-center gap-4">
                  <Bell className="w-6 h-6 text-green-600" />
                  <div>
                    <h2 className="text-xl font-semibold text-green-800">
                      {t('settings.notifications.title')}
                    </h2>
                    <p className="text-gray-600">{t('settings.notifications.description')}</p>
                  </div>
                </div>
              </div>

              <div className="glass-morphism p-6 rounded-xl card-hover">
                <div className="flex items-center gap-4">
                  <Shield className="w-6 h-6 text-green-600" />
                  <div>
                    <h2 className="text-xl font-semibold text-green-800">
                      {t('settings.privacy.title')}
                    </h2>
                    <p className="text-gray-600">{t('settings.privacy.description')}</p>
                  </div>
                </div>
              </div>

              <div className="glass-morphism p-6 rounded-xl card-hover">
                <div className="flex items-center gap-4">
                  <HelpCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <h2 className="text-xl font-semibold text-green-800">
                      {t('settings.help.title')}
                    </h2>
                    <p className="text-gray-600">{t('settings.help.description')}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full glass-morphism p-6 rounded-xl card-hover bg-red-50"
              >
                <div className="flex items-center gap-4">
                  <LogOut className="w-6 h-6 text-red-600" />
                  <div>
                    <h2 className="text-xl font-semibold text-red-800">
                      {t('settings.logout')}
                    </h2>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}