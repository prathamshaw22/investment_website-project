const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Auth Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/chatbot', require('./routes/chatbot'));

module.exports = app;