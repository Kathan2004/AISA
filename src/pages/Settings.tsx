import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { User, Bell, Shield, HelpCircle, LogOut, Save, Wallet } from 'lucide-react';
import { useAuth, UserProfile } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Settings() {
  const { t } = useTranslation();
  const { disconnect, account, userProfile, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserProfile>(userProfile || {
    name: '',
    farmName: '',
    location: '',
    farmSize: '',
    primaryCrops: [],
    phoneNumber: '',
    email: ''
  });

  const handleLogout = async () => {
    await disconnect();
    navigate('/login');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'primaryCrops' ? value.split(',').map(crop => crop.trim()) : value
    }));
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
              {/* Wallet Section */}
              <div className="glass-morphism p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Wallet className="w-6 h-6 text-green-600" />
                    <div>
                      <h2 className="text-xl font-semibold text-green-800">Connected Wallet</h2>
                      <p className="text-gray-600 font-mono text-sm">{account}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors"
                  >
                    Disconnect
                  </button>
                </div>
              </div>

              {/* Profile Settings */}
              <form onSubmit={handleSubmit} className="glass-morphism p-6 rounded-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <User className="w-6 h-6 text-green-600" />
                    <h2 className="text-xl font-semibold text-green-800">Farmer Profile</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    {isEditing ? 'Cancel' : 'Edit'}
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Farm Name
                    </label>
                    <input
                      type="text"
                      name="farmName"
                      value={formData.farmName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Farm Size (in acres)
                    </label>
                    <input
                      type="text"
                      name="farmSize"
                      value={formData.farmSize}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Crops (comma-separated)
                    </label>
                    <input
                      type="text"
                      name="primaryCrops"
                      value={formData.primaryCrops.join(', ')}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
                    />
                  </div>
                </div>

                {isEditing && (
                  <div className="mt-6 flex justify-end">
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Save Changes
                    </button>
                  </div>
                )}
              </form>

              {/* Notification Settings */}
              <div className="glass-morphism p-6 rounded-xl">
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

              {/* Privacy Settings */}
              <div className="glass-morphism p-6 rounded-xl">
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

              {/* Help & Support */}
              <div className="glass-morphism p-6 rounded-xl">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}