var MongoClient = require('mongodb').MongoClient;
var db;
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, dba) {
	if(err) { return console.dir(err); }
	db = dba;
});

var express = require('express');
var app = express();

app.get('/', function (req, res) {

	console.log("db object", db);
	console.log("start DB queries here");
	//db.collection('test').insert({name: 'Peter'}, function(err, result) { res.send(result); });

});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});