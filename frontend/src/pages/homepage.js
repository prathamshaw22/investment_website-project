import React from 'react';
import { Link } from 'react-router-dom';
import '../style/main.css';
import '../style/homepage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to AI Investment</h1>
                    <p>Your trusted partner for AI-powered investments.</p>
                    <Link to="/register" className="btn btn-primary">Get Started</Link>
                </div>
            </section>

            <section className="features-section">
                <div className="container">
                    <h2>Why Choose Us?</h2>
                    <div className="features">
                        <div className="feature">
                            <h3>AI-Powered Insights</h3>
                            <p>Our advanced AI algorithms analyze market data to provide you with the best investment opportunities.</p>
                        </div>
                        <div className="feature">
                            <h3>Secure & Reliable</h3>
                            <p>Your investments are safe with our secure and reliable platform.</p>
                        </div>
                        <div className="feature">
                            <h3>24/7 Support</h3>
                            <p>Our dedicated support team is available 24/7 to assist you with any queries.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="investment-plans-section">
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
            </section>

            <section className="testimonials-section">
                <div className="container">
                    <h2>What Our Clients Say</h2>
                    <div className="testimonials">
                        <div className="testimonial">
                            <p>"AI Investment has helped me grow my wealth significantly. Their AI-powered insights are spot on!"</p>
                            <span>- John Doe</span>
                        </div>
                        <div className="testimonial">
                            <p>"I was new to investing, but AI Investment made it easy for me to get started. Their platform is user-friendly and their support team is excellent."</p>
                            <span>- Jane Smith</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section">
                <div className="container">
                    <h2>Contact Us</h2>
                    <p>Have a question? We'd love to hear from you.</p>
                    <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
