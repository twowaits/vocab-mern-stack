const mongoose = require('mongoose')

const wordShema = new mongoose.Schema({
    word: { type: String, unique: true },
    pronounciationUrl: { type: String },
    origin: [{ type: String }],
    entries: [{
        partOfSpeech: { type: String },
        definition: { type: String },
        examples: [{ type: String }]
    }]
})

module.exports = mongoose.model('Word', wordShema)