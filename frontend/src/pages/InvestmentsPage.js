import React from 'react';
import { Link } from 'react-router-dom';

const InvestmentsPage = () => {
    return (
        <div className="investments-page">
            <div className="container">
                <h2>Investment Plans</h2>
                <div className="plans">
                    <div className="plan">
                        <h3>Basic Plan</h3>
                        <p>Get started with our basic plan and explore the world of AI-powered investments.</p>
                        <Link to="/register" className="btn btn-secondary">Choose Plan</Link>
                    </div>
                    <div className="plan">
                        <h3>Pro Plan</h3>
                        <p>Unlock advanced features and maximize your returns with our pro plan.</p>
                        <Link to="/register" className="btn btn-secondary">Choose Plan</Link>
                    </div>
                    <div className="plan">
                        <h3>Enterprise Plan</h3>
                        <p>Get a customized investment plan tailored to your specific needs.</p>
                        <Link to="/register" className="btn btn-secondary">Choose Plan</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestmentsPage;
