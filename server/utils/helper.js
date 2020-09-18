const axios = require('axios')
require('dotenv').config()

//app key and app id provided by oxford
app_id = process.env.oxfordAppId
app_key = process.env.oxfordAppKey

//oxford API base url
oxfordBaseUrl = 'https://od-api.oxforddictionaries.com/api/v2/'

//function to get details of words
const getWordDetail = async (word) => {
    const options = {
        method: 'GET',
        headers: { 'content-type': 'application/json', app_id, app_key },
        url: `${oxfordBaseUrl}entries/en-us/${word}?fields=definitions,etymologies,examples&strictMatch=true`
    }

    //definig an empty object
    let wordObj = {}

    //error handling
    try {
        let { data } = await axios(options)

        //add required fields to word object
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

        //return word object
        return wordObj
    } catch (e) {
        return false
    }
}

module.exports = getWordDetail