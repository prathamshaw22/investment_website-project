import axios from 'axios';
import { getUser } from '../utils/auth';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

api.interceptors.request.use((config) => {
    const user = getUser();
    if (user && user.token) {
        config.headers['x-auth-token'] = user.token;
    }
    return config;
});

export default api;