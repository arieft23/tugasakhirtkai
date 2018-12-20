const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())

var user = []

app.get("/all", (req,res) =>{
    res.json(user)
})

app.get("/search", (req,res) => {
    res.json(user)
})

app.post("/add", (req,res)=>{
    res.json(user)
})

app.post("/edit", (req,res)=>{
    res.json(user)
})

module.exports = app