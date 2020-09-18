const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/schema')
require('dotenv').config()

const app = express()

//allow cross sharing of resources
app.use(cors())

//connect to mongodb
mongoose.connect(process.env.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
//check the mongodb connection
mongoose.connection.once('open', () => console.log('Connected to database'))

//use graphql as middleware
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

//listen for the request
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is up at port ${port}`))