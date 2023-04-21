const express = require('express');
require("dotenv").config();
const app = express()
const cors = require("cors")
require("./db/conn")
const users = require("./models/userSchema")
const { mongoose } = require('mongoose');
const router =require("./routes/router")


const port = 3000;

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log("Server start ")
})