const express = require('express')
require('dotenv').config()
//import express from "express" ;
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('djtwitterurl') 
})

app.get('/login', (req,res) => {
    res.send('<h1> Please Login </h1>') 
})

app.get('/youtube', (req,res) => {
    res.send('<h1> Study on Youtube </h1>') 
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
