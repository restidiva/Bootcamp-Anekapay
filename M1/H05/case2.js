var express = require('express');
var request = require('request');

var app = express();

app.get('/grab', (req, res) => {
	 request('http://bola.kompas.com/ligaindonesia', function(error, response, html){
	 	if(html) {
	 		var regex = /<div class="article__asset"><img src="(.+?)" alt="(.+?)"\/><\/div>/g;

	 		var matches, output = [];
			while (matches = regex.exec(html)) {
			    output.push({
			    	title: matches[2],
			    	image: matches[1]
			    });
			}
			
			res.json(output);
	 	}
	 })
});

app.listen('5000', function (req, res) {
	console.log("server running in port 5000");
});