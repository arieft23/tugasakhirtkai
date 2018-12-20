const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())

var user = []

app.get("/all", (req,res) =>{
    res.json(user)
})

app.get("/search", (req,res) => {
    res.json(user.filter(nama=> nama === req.headers.name))
})

app.post("/add", (req,res)=>{
    newUser = req.body.name
    user.push(newUser)
    res.json(newUser)
})

app.post("/delete", (req, res)=>{
    user = user.filter(nama => nama !== req.body.name)
    res.json(user)
})
module.exports = app