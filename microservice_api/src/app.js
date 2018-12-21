const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const request = require("request")
const urlUser = 'http://localhost:8003'
const urlAddress = 'localhost:8002'

app.use(bodyParser.json())

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
        res.json(JSON.parse(response))
        res.end()
    })
})

app.get("/ListOfUser", (req,res) =>{
    var listOfUser = []
    getApi(urlUser+"/all", (response) =>{
        console.log(response)
        res.json(JSON.parse(response))
    })
})

app.get("/details/:name", (req,res) => {
    
})

app.post("/edit/:name", (req,res)=>{
    
})

module.exports = app