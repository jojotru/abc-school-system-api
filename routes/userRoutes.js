const express = require('express')
const router = express.Router()

router.route('/') //aka /users
    .get()
    .post()
    .patch()
    .delete()


    module.exports = router
