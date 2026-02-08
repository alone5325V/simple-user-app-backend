const express = require('express')
const User = require('./models/User.js')
const mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT || 3000
const dbUrl = process.env.URI
const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send("API is running..."))

app.listen(PORT, () => {
    console.log(`Server live on port: ${PORT}`)
})

mongoose.connect(dbUrl)
    .then(() => {
        console.log("Connected to database!")
    })
    .catch(() => {
        console.log("Connection failed!")
    })

