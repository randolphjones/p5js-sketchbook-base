var LOCAL_PORT = 3000;

var express = require('express');
var app = express();
var fs = require('fs');
var config = require('./config.js');
var indexData = {config: config};

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('view options', {layout:'layout.ejs'});

app.use(express.static('./sketchbook'));
//set up the server to vend the content
app.get('/', function(req, res){
	//generate a list of sketches
	fs.readdir('./sketchbook', function(err, directories){
		indexData.sketches = []; 
		for(d in directories){
			var pri = indexData.config.privateFolders;
			if(pri.indexOf(directories[d]) < 0){
				indexData.sketches.push(directories[d]);
			}
		}
		res.render('main', indexData);
	});
});

app.listen(LOCAL_PORT);
console.log('Serving sketchbook at port ' + LOCAL_PORT)	