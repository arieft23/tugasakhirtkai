const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())

var user = []

app.get("/all", (req,res) =>{
    res.json(user)
})

app.get("/search/:name", (req,res) => {
    res.json(user.filter(nama=> nama.toLowerCase().includes(req.params.name.toLowerCase())))
})

app.post("/add", (req,res)=>{
    newUser = req.body.name
    user.push(newUser)
    res.json(newUser)
})

app.post("/delete/:name", (req, res)=>{
    user = user.filter(nama => nama !== req.params.name)
    res.json(user)
})
module.exports = app