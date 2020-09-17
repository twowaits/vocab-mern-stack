const graphql = require('graphql')
const Word = require('../models/Word')

const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLID,
} = graphql

const WordType = new GraphQLObjectType({
    name: 'Word',
    fields: () => ({
        id: { type: GraphQLID },
        word: { type: GraphQLString },
        pronounciationUrl: { type: GraphQLString },
        origin: new GraphQLList(GraphQLString),
        entries: new GraphQLList(new GraphQLObjectType({
            partOfSpeech: { type: GraphQLString },
            definition: { type: GraphQLString },
            examples: new GraphQLList(GraphQLString)
        }))
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