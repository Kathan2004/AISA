import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

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

  // Follow account switches and lock/unlock in the wallet.
  useEffect(() => {
    const onAccountsChanged = (...args: unknown[]) => {
      const accounts = (args[0] as string[]) || [];
      setAccount(accounts[0] ?? null);
      setIsAuthenticated(accounts.length > 0);
    };
    window.ethereum?.on?.('accountsChanged', onAccountsChanged);
    return () => window.ethereum?.removeListener?.('accountsChanged', onAccountsChanged);
  }, []);

  useEffect(() => {
    checkConnection();
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      try {
        setUserProfile(JSON.parse(savedProfile));
      } catch {
        localStorage.removeItem('userProfile');
      }
    }
  }, []);

  const checkConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = (await window.ethereum.request({ method: 'eth_accounts' })) as string[];
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
      const accounts = (await window.ethereum.request({ method: 'eth_requestAccounts' })) as string[];
      setAccount(accounts[0]);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  const disconnect = async () => {
    try {
      // MetaMask has no "disconnect"; revoking the account permission is the equivalent.
      await window.ethereum
        ?.request({ method: 'wallet_revokePermissions', params: [{ eth_accounts: {} }] })
        .catch(() => undefined);
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