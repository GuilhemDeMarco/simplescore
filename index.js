var http = require('http')
var url = require('url')

var jsonFile= require('jsonfile')

//I'm using a json file as a database for now because I'm used to it
//I am aware that it's not efficient, I will change this as soon as my code works
var jsondb = "./db.json"

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var u = url.parse(req.url, true)
    var q = url.parse(req.url, true).query;

    if(q){
        console.log(q)
        if(q.id && q.player && q.score){
            console.log(q.id)
            console.log(q.player)
            console.log(q.score)

        }
    }
}).listen(8080);
