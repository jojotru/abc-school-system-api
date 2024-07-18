const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const notechema = new mongoose.Schema(
    {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false //when creating notes, it will be set to false cause notes aren't automatically complete until we say it is. 
    }
    },

    {
    timestamps: true

    }
)

noteSchema.plugin(AutoIncrement, {
    inc_field: 'ticket', 
    id: 'ticketNums',
    start_seq: 500
})

module.exports = mongoose.model('Note', noteSchema)