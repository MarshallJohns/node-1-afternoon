const express = require('express')
const products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express()
const SERVER_PORT = 4000


app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct)

app.listen(SERVER_PORT, () => {
    console.log(`listening on port ${SERVER_PORT}`)
})