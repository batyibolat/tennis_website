import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const response = await axios.post(`${API_URL}/token/refresh/`, {
          refresh: refreshToken
        });
        
        const { access } = response.data;
        localStorage.setItem('access_token', access);
        
        originalRequest.headers.Authorization = `Bearer ${access}`;
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials) => axios.post(`${API_URL}/token/`, credentials),
  register: (userData) => axios.post(`${API_URL}/register/`, userData),
  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
  }
};

export const playersAPI = {
  getAll: () => api.get('/players/'),
  getATP: () => api.get('/players/atp/'),
  getWTA: () => api.get('/players/wta/'),
  getTopPlayers: () => api.get('/players/top_players/'),
  getById: (id) => api.get(`/players/${id}/`),
  searchATP: (query) => api.get(`/players/atp/search?q=${query}`),
  searchWTA: (query) => api.get(`/players/wta/search?q=${query}`),
};

export const newsAPI = {
  getAll: () => api.get('/news/'),
  getFeatured: () => api.get('/news/featured/'),
  getById: (id) => api.get(`/news/${id}/`),
  incrementViews: (id) => api.post(`/news/${id}/increment_views/`),
  search: (query) => api.get(`/news/search?q=${query}`),
};

export const tournamentsAPI = {
  getAll: () => api.get('/tournaments/'),
  getById: (id) => api.get(`/tournaments/${id}/`),
};

export const chatAPI = {
  sendMessage: (message) => api.post('/chat/', { message }),
  getHistory: () => api.get('/chat/'),
};

export default api;