var serviceDB = require('../../db/models/service.js');
var serviceRequests = {
	getAll : function (req, res) {
        var response = {};
        serviceDB.find({},function(err,data){
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = data;
            }
            res.json(response);
        });

		 //res.json("{'test':'req'}");
	},
	createService :  function(req, res){
	    var db = new serviceDB();
	    db.title = req.body.title;
	    db.description = req.body.description;
	    db.postedDate = new Date();
	    db.serviceType = req.body.serviceType;
	    db.category = req.body.category;
	    db.save(function(err){
	        if(err) {
	            response = {"error" : true,"message" : "Error adding data"};
	        } else {
	            response = {"error" : false,"message" : "Service Created"};
	        }
	        res.json(response);
	    }); 		
	    
	}

}

module.exports = serviceRequests; 