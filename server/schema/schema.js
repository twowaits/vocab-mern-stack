const graphql = require('graphql')

const { GraphQLObjectType } = graphql

const WordType = new GraphQLObjectType({
    name: 'Word',
    fields: () => ({
        
    })
})