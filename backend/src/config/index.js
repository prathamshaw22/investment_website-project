require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    db: {
        uri: process.env.MONGODB_URI,
    },
    jwtSecret: process.env.JWT_SECRET,
};