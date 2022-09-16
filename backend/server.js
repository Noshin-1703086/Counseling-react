const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/users')
const cors = require('cors')
const connection = require("./db");
const authRoutes = require("./routes/auth")
const infoRoutes = require("./routes/getinfo")
const bookRoutes = require("./routes/bookinfo")

dotenv.config()

connection();

app.use(express.json())
app.use(cors())
app.use('/api/users', routesUrls)
app.use('/api/auth', authRoutes)
app.use('/api/getinfo', infoRoutes)
app.use('/api/book', bookRoutes)
const port = process.env.PORT || 4000;
app.listen(port, console.log(`Listening on port ${port}...`));