import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import { Wallet } from 'lucide-react';

export function Login() {
  const { t } = useTranslation();
  const { connectWallet } = useAuth();
  const navigate = useNavigate();

  const handleConnect = async () => {
    await connectWallet();
    navigate('/settings');
  };

  return (
    <div className="hero-pattern min-h-screen">
      <div className="gradient-overlay min-h-screen py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto glass-morphism rounded-2xl p-8">
            <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">
              {t('login.title')}
            </h1>
            <div className="text-center mb-8">
              <Wallet className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <p className="text-gray-600">{t('login.connectWallet')}</p>
            </div>
            <button
              onClick={handleConnect}
              className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-3"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" className="w-6 h-6" />
              {t('login.metamask')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}