import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { Marketplace } from './pages/Marketplace';
import { Traceability } from './pages/Traceability';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route 
          path="/traceability" 
          element={isAuthenticated ? <Traceability /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/settings" 
          element={isAuthenticated ? <Settings /> : <Navigate to="/login" />} 
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;