var express = require("express");
var app = express();
var request = require("request");
var ejs = require("ejs");



app.get("/results", function(req, res){
	
	request("http://www.omdbapi.com/?s='Harry'", function(error, response, body){
		if(!error && response.statusCode == 200) {
			var results = JSON.parse(body);
			res.send(results["Search"][0]["Title"]);
		}
	});

});





// app.listen(process.env.PORT, process.env.IP, function(){
// 	console.log("Server has started...");
// });

app.listen("5234", "localhost", function(){
	console.log("Server has started...");
});