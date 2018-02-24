const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.argv[2] || 8080
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cart = []

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/', (req, res) => {
    let newItem = req.body.product
    cart.push(newItem)
    res.json(cart)
})

app.get('/', (req, res)=>{
    res.send(cart)
})

app.listen(port, (req, res)=>{
    console.log(`Listening on port ${port}`)
})
