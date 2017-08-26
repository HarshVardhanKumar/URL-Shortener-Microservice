// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var mongo = require('mongodb').MongoClient ;
var mongourl = 'mongodb://'+process.env.DBUS+":"+process.env.DWORD+"@ds153113.mlab.com:53113/mongofordevelop"
var words = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split('') ;
var url  = "" ;
var erroruser = {"error": "please enter a valid url"}
var errorsystem = {"error" : "some error occurred"}
var output = "";
var baseURL = "https://hissing-olive.glitch.me/g/" ;
           
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/new/:type(https|http)://:urlv", function(req, res) {
  //url to be convertedd
  let url = req.params.type+"://"+req.params.urlv ;
  let finalString = "" ;
  
  //test the value of https://
  let test = req.params.type ;
  if(test!=="https" && test!=="http") {
    res.send(erroruser)
  }
  
  //connect ;
  var collection ;
  var countval = 0 ;
  mongo.connect(mongourl, function(err, db) {
    if(err) {
      //error occurred
      res.send("connectionerror") ;
      db.close() ;
    }
    else {
      //finding if the url already exists
      
      var collection = db.collection('urls') ;
      collection.find({oldURL: url},{_id:0, oldURL:1, shortURL: 1}).toArray(function(err, docs) {
        if(err) {
          res.send(errorsystem) ;
        }
        else {
          if(docs.length>0) {
            var objectv = {} ;
            objectv["oldURL"] = docs[0]["oldURL"]
            objectv["shortURL"] = baseURL+docs[0]["shortURL"]
            res.jsonp(objectv) ;
          }
          else {
            collection.find({idco: "count"}).toArray(function(err, docs) {
              if(err) {
                res.send("findingerror") ;
              }
              countval = parseInt(docs[0]["countval"]) ;
        
      // calling function 
              var q = 0 ;
              var r = 0 ;
              var rstring = "" ;
              while(countval>0) {
                q = Math.floor(countval/words.length) ;
                r = countval%words.length ;
                rstring+=r ;
                finalString= words[r]+finalString ;
                countval = q ;
              }
      
              var object = {} ;
              object["oldURL"] = url ;
              object["shortURL"] = baseURL+finalString ;
        
              collection.insert({"oldURL": url, "shortURL": finalString } , function(err, data) {
                if(err) {  
                  res.send(err) ;
                  db.close() ;
                }
                else {
                  res.jsonp(object) ;
                  collection.update({idco:"count"}, {$inc: {"countval":1}}) ;  
                  db.close() ;
                }
              });
          })
          }
        }
      })
      
    }
  
  })
})

app.get('/g/:shortURL', function(req, res) {
  var url = req.params.shortURL ;
  mongo.connect(mongourl, function(err, db) {
    var collection = db.collection('urls') ;
    collection.find({shortURL: url}).toArray(function(err, docs) {
      if(err) {
        res.send(errorsystem) ;
      }
      else {
        var object = docs[0] ;
        res.redirect(object.oldURL)
        db.close() ;
      }
    })
  })
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
