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
const book_rRoutes = require("./routes/book_rinfo")
const confirm_bookRoutes = require("./routes/confirminfo")
const getscheduleRoutes = require("./routes/getschedule")
const confirm_appRoutes = require("./routes/confirm_app")
const session_infoRoutes = require("./routes/session_info")
const getidRoutes = require("./routes/get_id")
const postjournalRoutes = require("./routes/postjournal")
const postnoteRoutes = require("./routes/postnote")
const J_getinfoRoutes = require("./routes/j_getinfo")
const N_getinfoRoutes = require("./routes/n_getinfo")

dotenv.config()

connection();

app.use(express.json())
app.use(cors())
app.use('/api/users', routesUrls)
app.use('/api/auth', authRoutes)
app.use('/api/getinfo', infoRoutes)
app.use('/api/book', bookRoutes)
app.use('/api/book_r', book_rRoutes)
app.use('/api/check_confirmation', confirm_bookRoutes)
app.use('/api/getschedule', getscheduleRoutes)
app.use('/api/confirm', confirm_appRoutes)
app.use('/api/get_session_info', session_infoRoutes)
app.use('/api/Get_id', getidRoutes)
app.use('/api/J_post', postjournalRoutes)
app.use('/api/N_post', postnoteRoutes)
app.use('/api/J_getinfo', J_getinfoRoutes)
app.use('/api/N_getinfo', N_getinfoRoutes)

const port = process.env.PORT || 4000;
app.listen(port, console.log(`Listening on port ${port}...`));