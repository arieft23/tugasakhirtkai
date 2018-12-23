const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())

var address = {}

app.get("/all", (req,res) =>{
    res.json(address)
})

app.get("/search/:name", (req,res) => {
    const user = address[req.params.name]
    res.json(user)
})

app.post("/add", (req,res)=>{
    const newAddress = {"name": req.body.name, "address" : req.body.address}
    console.log(newAddress)
    address[req.body.name] = newAddress
    res.json(newAddress)
})

app.post("/edit/:name", (req,res)=>{
    const user = address[req.params.name]
    user.address = req.body.address
    address[req.params.name] = user
    res.json(user)
})

app.post("/delete/:name", (req, res)=>{
    delete address[req.params.name]
})
module.exports = app