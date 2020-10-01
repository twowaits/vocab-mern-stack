const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    words: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Word'
    }]
})

module.exports = mongoose.model('User', userSchema)