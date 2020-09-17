const mongoose = require('mongoose')

//creating a mongoose schema
const wordShema = new mongoose.Schema({
    word: { type: String, unique: true },
    entries: [{
        partOfSpeech: { type: String },
        origin: [{ type: String }],
        definitions: [{ type: String }],
        examples: [{ type: String }]
    }]
})

//creating a mongoose model
module.exports = mongoose.model('Word', wordShema)