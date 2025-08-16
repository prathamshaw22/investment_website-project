import React, { useState } from 'react';
import '../style/contact.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="contact-page">
            <div className="container">
                <h2>Contact Us</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={name} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={email} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" value={message} onChange={onChange} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
