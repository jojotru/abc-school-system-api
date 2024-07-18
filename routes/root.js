const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

//^^^^this gives the URL options. So the user can either go to / (^ - at the start / - in the middle $ - the end), or they can go to /index, or /index.html - pretty neat!

module.exports = router