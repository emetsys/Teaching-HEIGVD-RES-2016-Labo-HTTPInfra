var Chance = require('chance');
var chance = new Chance();
var express = require('express');
var app = express();



app.get('/', function(req, res){
	res.send(getNumbers());
});

app.listen (2245, function(){
	console.log('Accepting the requests on port 2245');
});

function getNumbers(){
	var tab = [];

	var nNombre = chance.integer({min: 1, max: 15});

	for( var i = 0; i< nNombre; i++){
		tab.push({d20:chance.d20()});
	}

	console.log (nNombre);

	console.log(tab);

	return tab;
}

