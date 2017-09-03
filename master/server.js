var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

app.use(express.static('./')); 		// set the static files location /public/img will be /img for users
//app.use(express.static('./node_modules')); 		// set the static files location /public/img will be /img for users




require('./api/routes/routes.js')(router);

router.get("/index.html",function(req,res){
     res.sendFile(__dirname + '/app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.use('/',router);
app.listen(3000);
console.log(process.env)
console.log("Listening to PORT 3000");