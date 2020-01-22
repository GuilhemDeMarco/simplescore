var http = require('http')
var url = require('url')

var jsonFile= require('jsonfile')

//I'm using a json file as a database for now because I'm used to it
//I am aware that it's not efficient, I will change this as soon as my code works
var jsondb = "./db.json"

console.log("up")
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var u = url.parse(req.url, true)
    var q = url.parse(req.url, true).query;

    console.log(u.pathname)
    if(u.pathname == "/scoring/"){
      if(q){
          console.log(q)
          if(q.id && q.player && q.score){
              console.log(q.id)
              console.log(q.player)
              console.log(q.score)
              addToDB(q.id,q.player,q.score)
          }
      }
    }
}).listen(8080);

function addToDB(id,player,score){
  console.log("--------------add--------------")
  jsonFile.readFile(jsondb, function(err, data){
    console.log(data)
    console.log(data[id])
    if(data[id]){
      console.log("--------------yup--------------")
      console.log(data[id])
      for(i in data[id]){
        console.log(i)
        console.log(data[id][i])
        console.log(Object.keys(data[id][i]).toString())
        if(Object.keys(data[id][i]).toString() == player){
          console.log("already here")
          console.log(data[id][i][player])
          if(data[id][i][player] < score){
            console.log("plus grand")
            data[id][i][player] = score
            jsonFile.writeFile(jsondb, data, { spaces: 2 }, function (err) {
        			if (err) console.error(err)
        		})//c le boudel
          }
        }
      }
      //console.log(player)
      let playerObject = {}
      playerObject[player] = score
      //console.log(playerObject)
      data[id].push(playerObject)
      //console.log(data[id])
      /*
      jsonFile.writeFile(jsondb, data, { spaces: 2 }, function (err) {
  			if (err) console.error(err)
  		})*/
    }
    else{
      console.log("nup")
    }
  })
}
