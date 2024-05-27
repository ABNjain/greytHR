const express = require("express");
const path = require('path');
const cors = require("cors");
require('dotenv').config();
// const corsOptions = require("./config/corsOptions"); 
const authUserRouter = require("./routes/authUserRoute");
const authPAdminRouter = require("./routes/authPAdminRoute");
require("./config/mongoDB");

const app = express();
const corsOptions = {
    origin: 'http://localhost:3000', // or an array of allowed origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // allowedHeaders: ['Content-Type', 'Authorization'],
    // credentials: true, // if you need to include cookies in the requests
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

app.use('/auth/user', authUserRouter);
app.use('/auth/admin', authPAdminRouter);

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'app.js'));
});

app.listen(process.env.NODEPORT, () => {
    console.log(`Server is running on http://localhost:${process.env.NODEPORT}`)
});
