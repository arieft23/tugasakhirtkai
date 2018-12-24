const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const fire = require("./fire")
const ref = fire.database().ref("address")

app.use(bodyParser.json())

var address = {}

app.get("/all", (req,res) =>{
    ref.once("value", (snap)=>{
        res.json(snap.val())
    })
})

app.get("/search/:name", (req,res) => {
    ref.child(req.params.name).once("value", (snap)=>{
        res.json(snap.val())
    }, (error)=>{
        res.json({})
    })
})

app.post("/add", (req,res)=>{
    var newAddress = {
        name: req.body.name,
        address : req.body.address
    }

    ref.child(req.body.name).set(newAddress)

    res.end()

})

app.post("/edit/:name", (req,res)=>{
    const newData = {name: req.params.name, address : req.body.address}
    ref.child(req.params.name).set(newAddress)
    res.json(newData)
})

app.post("/delete/:name", (req, res)=>{
    ref.child(req.params.name).remove()
    res.end()
})
module.exports = app