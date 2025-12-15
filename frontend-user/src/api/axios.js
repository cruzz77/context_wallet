import axios from 'axios';

const API = axios.create({
    baseURL: '/api', // Proxy handles the host
});

// Add a request interceptor to add the auth token to headers
API.interceptors.request.use(
    (config) => {
        const user = localStorage.getItem('user');
        if (user) {
            const { token } = JSON.parse(user);
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default API;
