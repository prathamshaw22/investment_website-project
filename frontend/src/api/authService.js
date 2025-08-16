import api from './api';
import { storeUser, removeUser } from '../utils/auth';

export const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    storeUser(response.data);
    return response.data;
};

export const register = async (name, email, password) => {
    const response = await api.post('/auth/register', { name, email, password });
    storeUser(response.data);
    return response.data;
};

export const logout = () => {
    removeUser();
};

export const getCurrentUser = async () => {
    try {
        const response = await api.get('/auth/me');
        return response.data;
    } catch (error) {
        return null;
    }
};