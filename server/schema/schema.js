const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString } = graphql

const WordType = new GraphQLObjectType({
    name: 'Word',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString }
    })
})