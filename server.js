const express = require('express')
const path = require("path")
const app = express()
const port = 443

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './index.html'))
});

app.get('/index.html', function(req, res){
    res.sendFile(path.join(__dirname, './index.html'))
});

app.get('/form.html', function(req, res){
    res.sendFile(path.join(__dirname, './form.html'))
});

app.get('/favicon.ico', function(req, res){
    res.sendFile(path.join(__dirname, './favicon.ico'))
});

app.get('/public/najimi.webp', function(req, res){
    res.sendFile(path.join(__dirname, './public/najimi.webp'))
});

app.get('/public/nakano.webp', function(req, res){
    res.sendFile(path.join(__dirname, './public/nakano.webp'))
});

app.get('/public/graph.png', function(req, res){
    res.sendFile(path.join(__dirname, './public/graph.png'))
});

app.get('/public/guardian.png', function(req, res){
    res.sendFile(path.join(__dirname, './public/guardian.png'))
});

app.get('/public/ies.png', function(req, res){
    res.sendFile(path.join(__dirname, './public/ies.png'))
});

app.get('/public/indeed.png', function(req, res){
    res.sendFile(path.join(__dirname, './public/indeed.png'))
});

app.get('/public/patriot.png', function(req, res){
    res.sendFile(path.join(__dirname, './public/patriot.png'))
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