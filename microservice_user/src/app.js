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
    if(!isExist(newUser)){
        user.push(newUser)
        res.json(newUser)
    }else{
        res.write("There is already exist with same name")
        res.end()
    }
})

app.post("/delete/:name", (req, res)=>{
    user = user.filter(nama => nama !== req.params.name)
    res.json(user)
})

const isExist = (name) => {
    if((user.filter(nama => name === nama).length) > 0) return true
    else return false
}
module.exports = app