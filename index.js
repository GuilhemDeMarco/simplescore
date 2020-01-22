var http = require('http')
var url = require('url')

var jsonFile= require('jsonfile')

var jsondb = "./db.json"

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var u = url.parse(req.url, true)
    var q = url.parse(req.url, true).query;
    
    if(q){
        console.log(q)
        if(q.id && q.score){
            console.log(q.id)
            console.log(q.score)

        }
    }
}).listen(8080);