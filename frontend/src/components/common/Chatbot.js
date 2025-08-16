import React, { useState } from 'react';
import '../../style/chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = async () => {
        if (input.trim() === '') return;

        const newMessage = { text: input, sender: 'user' };
        setMessages([...messages, newMessage]);

        // Simulate API call to backend
        const response = await fetch('/api/chatbot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: input }),
        });
        const data = await response.json();

        const botMessage = { text: data.reply, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
        setInput('');
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chatbot-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSendMessage();
                        }
                    }}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
