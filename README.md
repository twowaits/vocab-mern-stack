## Vocab App
Vocab App is a mern stack web app to improve the vocabulary.

## Setup

### 1. Clone the Repository
```
git clone https://github.com/abhi3315/vocab-mern-stack
```

### 2. Setting Up GraphQL server
Go to server folder and download dependencies
```
cd server
npm i
```
Create a .env file inside server folder and provide the key values mentioned below
```
mongodbUri=<YOUR_MONGODB_URI>
oxfordAppId=<YOUR_OXFORD_APP_ID>
oxfordAppKey=<YOUR_OXFORD_APP_KEY
```
Run the server
```
npm run start
```

### 3. Setting Up Client UI
Go to client folder and download dependencies
```
cd ../client
npm i
```
Give your server url inside client/src/utils/helper.js
```
const serverUrl = '<YOUR_SERVER_URL>'
```
Run the client server
```
npm start
```
