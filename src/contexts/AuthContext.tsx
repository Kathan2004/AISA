import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ethers } from 'ethers';

interface AuthContextType {
  isAuthenticated: boolean;
  account: string | null;
  connectWallet: () => Promise<void>;
  disconnect: () => Promise<void>;
  userProfile: UserProfile | null;
  updateProfile: (profile: UserProfile) => void;
}

export interface UserProfile {
  name: string;
  farmName: string;
  location: string;
  farmSize: string;
  primaryCrops: string[];
  phoneNumber: string;
  email: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    checkConnection();
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
    }
  }, []);

  const checkConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error checking connection:', error);
      }
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  const disconnect = async () => {
    try {
      if (window.ethereum && window.ethereum.disconnect) {
        await window.ethereum.disconnect();
      }
      setAccount(null);
      setIsAuthenticated(false);
      localStorage.removeItem('userProfile');
      setUserProfile(null);
    } catch (error) {
      console.error('Error disconnecting:', error);
    }
  };

  const updateProfile = (profile: UserProfile) => {
    setUserProfile(profile);
    localStorage.setItem('userProfile', JSON.stringify(profile));
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      account, 
      connectWallet, 
      disconnect,
      userProfile,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}