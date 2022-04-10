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

app.get('/public/sadclaire.png', function(req, res){
    res.sendFile(path.join(__dirname, './public/sadclaire.png'))
});

app.get('/public/nezuko.png', function(req, res){
    res.sendFile(path.join(__dirname, './public/nezuko.png'))
});

app.get('/public/miku.jpg', function(req, res){
    res.sendFile(path.join(__dirname, './public/miku.jpg'))
});

app.get('/public/generous.png', function(req, res){
    res.sendFile(path.join(__dirname, './public/generous.png'))
});

app.get('/public/outreach.png', function(req, res){
    res.sendFile(path.join(__dirname, './public/outreach.png'))
});

app.get('/public/charity.png', function(req, res){
    res.sendFile(path.join(__dirname, './public/charity.png'))
});

app.get('/public/freedom.png', function(req, res){
    res.sendFile(path.join(__dirname, './public/freedom.png'))
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
    console.log(`Nakano listening on port ${port}`)
})