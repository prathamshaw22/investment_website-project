const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { message } = req.body;
    let reply = 'I am sorry, I do not understand.';

    if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
        reply = 'Hello there! How can I help you today?';
    } else if (message.toLowerCase().includes('investment plans')) {
        reply = 'We offer various investment plans like Basic, Pro, and Enterprise. You can find more details on our Investments page.';
    } else if (message.toLowerCase().includes('contact')) {
        reply = 'You can reach us through the Contact Us page on our website.';
    } else if (message.toLowerCase().includes('about')) {
        reply = 'We are a team of passionate investors and AI experts dedicated to helping you achieve your financial goals.';
    }

    res.json({ reply });
});

module.exports = router;
