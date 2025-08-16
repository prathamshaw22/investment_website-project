import React from 'react';
import '../style/dashboard.css';

const DashboardPage = () => {
    const portfolio = [
        { name: 'Apple', shares: 10, price: 150 },
        { name: 'Google', shares: 5, price: 2800 },
        { name: 'Tesla', shares: 12, price: 700 },
    ];

    return (
        <div className="dashboard-page">
            <div className="container">
                <h2>Dashboard</h2>
                <div className="portfolio">
                    <h3>My Portfolio</h3>
                    <div className="portfolio-item header">
                        <span>Name</span>
                        <span>Shares</span>
                        <span>Price</span>
                        <span>Total</span>
                    </div>
                    {portfolio.map(item => (
                        <div className="portfolio-item" key={item.name}>
                            <span>{item.name}</span>
                            <span>{item.shares}</span>
                            <span>${item.price}</span>
                            <span>${item.shares * item.price}</span>
                        </div>
                    ))}
                </div>
                <div className="chart-container">
                    <h3>Performance</h3>
                    {/* Chart will be implemented here */}
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0' }}></div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;