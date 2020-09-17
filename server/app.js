const express = require('express')
const graphqlHTTP = require('express-graphql')
require('dotenv').config()

const app = express()

app.use('/graphql', graphqlHTTP({
    
}))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is up at port ${port}`))