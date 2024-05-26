// backend/config/corsOptions.js

const corsOptions = {
    origin: 'http://localhost:3000', // or an array of allowed origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // if you need to include cookies in the requests
};

module.exports = corsOptions;
