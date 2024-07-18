require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const { logEvents } = require('./middleware/logger')
const PORT = process.env.PORT || 3500

console.log(process.env.NODE_ENV)

connectDB()

app.use(logger)

app.use(cors(corsOptions))

app.use(express.json())
//to add ability to use json

app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, 'public'))) // __dirname - global variable that node understands to look inside of the /public folder to look for static files like CSS or images used on server. Also can be written as app.use(express.static('public'))

app.use('/', require('./routes/root'))

app.use('/users', require('./routes/userRoutes'))

// use .all and '*' as the catch all if the pages above didn't lead to anything (below)
app.all('*', (req, res) => {
    res.status(404) //has function checking to see if it's a 404
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }else if (req.accepts('json')){
        res.json({message: "404 Not Found"}) //in case using json
    }else{
        res.type('txt').send('404 Not Found') // in case error is with anything else
    }
})

app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    'mongoErrLog.log'
    )
})


