const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())

var address = {}

app.get("/all", (req,res) =>{
    res.json(address)
})

app.get("/search", (req,res) => {
    const user = address[req.headers.name]
    res.json(user)
})

app.post("/add", (req,res)=>{
    const newAddress = {"name": req.body.name, "address" : req.body.address}
    address[req.body.name] = newAddress
    console.log(newAddress)
    res.json(newAddress)
})

app.post("/edit", (req,res)=>{
    const user = address[req.body.name]
    user.address = req.body.address
    address[req.body.name] = user
    res.json(user)
})

module.exports = app