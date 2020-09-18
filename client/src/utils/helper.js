import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const serverUrl = 'http://localhost:5000/graphql'

const client = new ApolloClient({
    uri: serverUrl,
    cache: new InMemoryCache()
})

export const getAllWords = async () => {
    const result = await client
        .query({
            query: gql`
            {
                words{
                    word
                    entries{
                        partOfSpeech
                        origin
                        definitions
                        examples
                    }
                }
            }`
        })
    return result.data.words
}

export const addNewWord = async (word) => {
    const result = await client
        .mutate({
            mutation: gql`
            mutation{
                addWord(word:"${word}"){
                    word
                    entries{
                        partOfSpeech
                        origin
                        definitions
                        examples
                    }
                }
            }`
        })
    if (result.data.addWord.word === null) return false
    console.log(result.data.addWord);
    return result.data.addWord
}