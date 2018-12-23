const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const request = require("request")
const cors = require('cors');
const urlUser = 'http://localhost:8003'
const urlAddress = 'http://localhost:8002'

app.use(bodyParser.json())
app.use(cors())

const getApi = (url, callback) =>{
   return request(url, function(err, res, body){
       return callback(body)
   })
}

const postApi = (url, data, callback) => {
    const options = {headers: {'content-type' : 'application/JSON'},method: "POST", uri : url, body: JSON.stringify(data)}
    return request(options, function(err, res, body){
        return callback(body)
    })
}

app.post("/AddUser", (req,res) => {
    newUser = req.body.name
    address = req.body.address
    
    postApi(urlUser+"/add", {"name" : newUser}, (response) => {
        console.log(response)
    })

    postApi(urlAddress+"/add", {"name" : newUser, "address" : address}, (response)=>{
        console.log(response)
    })

    res.end()
})

app.get("/ListOfUser", (req,res) =>{
    var listOfUser = []
    getApi(urlUser+"/all", (response) =>{
        console.log(response)
        res.json(JSON.parse(response))
    })
})

app.get("/details/:name", (req,res) => {
    getApi(urlAddress+"/search/"+req.params.name, (response) =>{
        res.json(JSON.parse(response))
    })
})

app.post("/edit/:name", (req,res)=>{
    postApi(urlAddress+"/edit/"+req.params.name, {"address" : req.body.address}, (response) =>{
        res.json(JSON.parse(response))
    })
})

app.post("/delete/:name", (req, res) => {
    postApi(urlUser+"/delete/"+req.params.name, {}, (response) =>{
        console.log(JSON.parse(response))
    })

    postApi(urlAddress+"/delete/"+req.params.name, {}, (response) =>{
        console.log(JSON.parse(response))
    })

    res.end()
})

module.exports = app