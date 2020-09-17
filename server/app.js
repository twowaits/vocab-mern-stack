const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

//connect to mongodb
mongoose.connect(process.env.mongodbUri)
//check the mongodb connection
mongoose.connection.once('open', () => console.log('connected to database'))

//use graphql as middleware
// app.use('/graphql', graphqlHTTP({

// }))

//listen for the request
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is up at port ${port}`))