import React, { createContext, useState, useEffect } from 'react';
import { getCurrentUser, login, logout } from '../api/authService';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = getCurrentUser();
        setUser(user);
        setLoading(false);
    }, []);

    const handleLogin = async (email, password) => {
        const user = await login(email, password);
        setUser(user);
    };

    const handleLogout = () => {
        logout();
        setUser(null);
    };

    const value = {
        user,
        loading,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};