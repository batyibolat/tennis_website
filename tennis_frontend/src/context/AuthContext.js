import React, { createContext, useState, useContext, useEffect } from 'react';
import { authAPI } from '../services/api';
import axios from "axios";
const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await authAPI.login(credentials);
      const { access, refresh } = response.data;
      
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      
      // Получаем данные пользователя
      try {
        const userResponse = await axios.get('http://localhost:8000/api/profile/', {
          headers: {
            'Authorization': `Bearer ${access}`
          }
        });
        
        if (userResponse.data && userResponse.data.length > 0) {
          const userData = userResponse.data[0].user;
          localStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
        } else {
          // Если нет профиля, используем минимальные данные
          const basicUserData = {
            username: credentials.username,
            first_name: '',
            last_name: '',
            email: ''
          };
          localStorage.setItem('user', JSON.stringify(basicUserData));
          setUser(basicUserData);
        }
      } catch (profileError) {
        console.error('Error fetching user profile:', profileError);
        // Используем минимальные данные
        const basicUserData = {
          username: credentials.username,
          first_name: '',
          last_name: '',
          email: ''
        };
        localStorage.setItem('user', JSON.stringify(basicUserData));
        setUser(basicUserData);
      }
      
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 
               error.response?.data?.non_field_errors?.[0] || 
               error.response?.data || 
               error.message 
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await authAPI.register(userData);
      const { access, refresh } = response.data;
      
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      
      // После регистрации сразу логинимся
      const loginResult = await login({
        username: userData.username,
        password: userData.password
      });
      
      if (loginResult.success) {
        return { success: true };
      } else {
        return { success: false, error: loginResult.error };
      }
      
    } catch (error) {
      console.error('Registration error:', error);
      return { 
        success: false, 
        error: error.response?.data?.detail || 
               error.response?.data || 
               'Registration failed. Please try again.' 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};