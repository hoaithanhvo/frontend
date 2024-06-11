// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://your-api-url', // Thay đổi URL API của bạn ở đây
});

// Add a request interceptor
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login'; // Điều hướng đến trang đăng nhập
    }
    return Promise.reject(error);
});

export default api;
