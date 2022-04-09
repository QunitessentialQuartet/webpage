const express = require('express')
const path = require("path")
const app = express()
const port = 3000

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './index.html'))
});

app.get('/public/nakano_background.webm', function(req, res){
    res.sendFile(path.join(__dirname, './public/nakano_background.webm'))
});

app.get('/styles/css.css', function(req, res){
    res.sendFile(path.join(__dirname, './styles/css.css'))
})

app.get('/styles/NyataFTR-Regular.otf', function(req, res){
    res.sendFile(path.join(__dirname, './styles/NyataFTR-Regular.otf'))
})

app.get('/js/vanta.halo.min.js', function(req, res){
    res.sendFile(path.join(__dirname, './js/vanta.halo.min.js'))
})

app.get('/js/three.r119.min.js', function(req, res){
    res.sendFile(path.join(__dirname, './js/three.r119.min.js'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})