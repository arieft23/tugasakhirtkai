const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const fire = require("./fire")
const ref = fire.database().ref("user")


var user = []


ref.on("value", (snap)=>{
    user = []
    snap.forEach(x => {
        user.push(x.val())
    })
})

app.use(bodyParser.json())

app.get("/all", (req,res) =>{
    console.log(user)
    res.json(user)
})

app.get("/search/:name", (req,res) => {
    res.json(user.filter(nama=> nama.toLowerCase().includes(req.params.name.toLowerCase())))
})

app.post("/add", (req,res)=>{
    newUser = req.body.name
    if(!isExist(newUser)){
        ref.push(newUser)
        res.json(newUser)
    }else{
        res.write("There is already exist with same name")
        res.end()
    }
})

app.post("/delete/:name", (req, res)=>{
    ref.once("value", (snap) =>{
        key = -1
        snap.forEach(x => {
            if(x.val() == req.params.name) key = x.key
        })
        ref.child(key).remove()
    })
    
    res.json(user)
})

const isExist = (name) => {
    if((user.filter(nama => name === nama).length) > 0) return true
    else return false
}
module.exports = app