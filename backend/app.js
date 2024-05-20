const express = require("express");
require('dotenv').config();
const authRouter = require("./routes/auth");
require("./config/mongoDB");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);

app.get("/", (req, res)=>{
    res.send("Hello to the API");
});

app.listen(process.env.NODEPORT, () => {
    console.log(`Server is running on http://localhost:${process.env.NODEPORT}`)
});
