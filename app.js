var express = require("express");
var app = express();
var request = require("request");
var ejs = require("ejs");

app.set("view engine", "ejs");


app.get("/", function(req, res){
	res.render("search");
});

app.get("/results", function(req, res){
	var query = req.query.movies;
	var url = "http://www.omdbapi.com/?s=" + query
	request(url, function(error, response, body){
		if(!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render("results", {data: data});
		}
	});
});





// app.listen(process.env.PORT, process.env.IP, function(){
// 	console.log("Server has started...");
// });

app.listen("5234", "localhost", function(){
	console.log("Server has started...");
});
