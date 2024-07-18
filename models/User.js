const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        default: "Employee" //automatically assign user to employee. Array so that you can add more roles.
    }],
    active: {
        type: Boolean,
        default: true //makes it so every new ee added will be set to true aka active ee.
    }
})

module.exports = mongoose.model('User', userSchema)