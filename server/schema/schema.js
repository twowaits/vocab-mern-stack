const graphql = require('graphql')
const Word = require('../models/Word')
const getWordDetail = require('../utils/helper')

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
} = graphql

const WordType = new GraphQLObjectType({
    name: 'Word',
    fields: () => ({
        id: { type: GraphQLID },
        word: { type: GraphQLString },
        entries: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'Entry',
                fields: () => ({
                    partOfSpeech: { type: GraphQLString },
                    origin: { type: new GraphQLList(GraphQLString) },
                    definitions: { type: new GraphQLList(GraphQLString) },
                    examples: { type: new GraphQLList(GraphQLString) }
                })
            }))
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        word: {
            type: WordType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Word.findById(args.id)
            }
        },
        words: {
            type: new GraphQLList(WordType),
            resolve(parent, args) {
                return Word.find()
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addWord: {
            type: WordType,
            args: {
                word: { type: new GraphQLNonNull(GraphQLString) }
            },
            async resolve(parent, args) {
                let wordDetail = await getWordDetail(args.word)
                if (!wordDetail) return false
                let word = new Word(wordDetail)
                return word.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})