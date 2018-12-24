const firebase = require("firebase")

var config = {
    apiKey: "AIzaSyDvEMprLIofgBdD5hWeBlY6iUrmqLS02Pc",
    authDomain: "tugasakhirtkai.firebaseapp.com",
    databaseURL: "https://tugasakhirtkai.firebaseio.com",
    projectId: "tugasakhirtkai",
    storageBucket: "tugasakhirtkai.appspot.com",
    messagingSenderId: "160359197849"
}

fire = firebase.initializeApp(config);

module.exports = fire