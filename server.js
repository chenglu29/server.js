console.log("isolation is not good for me")

const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', function(req, res) {
  res.send('Hello World')
})

var connectionString='mongodb+srv://gloria:05291984@cluster0.9h1n9.mongodb.net/users?retryWrites=true&w=majority';
//var connectionString="mongodb://localhost:3000/"
const MongoClient = require('mongodb').MongoClient
MongoClient.connect(connectionString, (err, db) => {
  if (err) return console.error(err)
  console.log('Connected to Database')
var dbo=db.db("users");
dbo.collection("users").find({}).toArray(function(err,result){
	if(err) throw err;
	console.log(result);
});

});