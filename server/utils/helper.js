const axios = require('axios')
require('dotenv').config()

app_id = process.env.oxfordAppId
app_key = process.env.oxfordAppKey

oxfordBaseUrl = 'https://od-api.oxforddictionaries.com/api/v2/'

const getWordDetail = async (word) => {
    const options = {
        method: 'GET',
        headers: { 'content-type': 'application/json', app_id, app_key },
        url: `${oxfordBaseUrl}entries/en-us/${word}?fields=definitions,etymologies,examples&strictMatch=true`
    }

    let wordObj = {}

    try {
        let { data } = await axios(options)
        wordObj.word = data.word
        wordObj.entries = []
        data.results[0].lexicalEntries.forEach(entry => {
            wordObj.entries.push({
                partOfSpeech: entry.lexicalCategory.text,
                origin: entry.entries[0].etymologies,
                definitions: entry.entries[0].senses[0].definitions,
                examples: entry.entries[0].senses[0].examples.map(example => example.text)
            })
        })
        return wordObj
    } catch (e) {
        console.log(e)
    }
}

module.exports = getWordDetail