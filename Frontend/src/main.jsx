import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

export const Context = createContext();

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const user = localStorage.getItem('user');
    return !!user;
  });
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : {};
  });

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
