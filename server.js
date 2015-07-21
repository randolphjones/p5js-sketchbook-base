var LOCAL_PORT = 3000;

var express = require('express');
var exp = express();

//dependencies for a future build out
//exp.set('view engine', 'ejs');
//exp.engine('html', require('ejs').renderFile);

exp.use(express.static('./sketchbook'));
//set up the server to vend the content
exp.get('/', function(req, res){
	//res.render('main');
	res.send('Access your processing sketchbook from it\s associated directory');
});

exp.listen(LOCAL_PORT);
console.log('Serving sketchbook at port ' + LOCAL_PORT)	