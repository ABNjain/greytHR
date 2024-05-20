const express = require("express");
require('dotenv').config();
const authUserRouter = require("./routes/authUserRoute");
const authPAdminRouter = require("./routes/authPAdminRoute");
require("./config/mongoDB");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth/user', authUserRouter);
app.use('/auth/admin', authPAdminRouter);

app.get("/", (req, res)=>{
    res.send("Hello to the API");
});

app.listen(process.env.NODEPORT, () => {
    console.log(`Server is running on http://localhost:${process.env.NODEPORT}`)
});
