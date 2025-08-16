import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
    const { user, onLogout } = useAuth();

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">AI Investment</Link>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/investments">Investments</Link>
                {user ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/chatbot">Chatbot</Link>
                        {user.role === 'admin' && (
                            <Link to="/admin">Admin</Link>
                        )}
                        <button onClick={onLogout} className="btn btn-sm">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
