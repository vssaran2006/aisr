var userDB = require('../../db/models/users.js');
var users = {
	getAll : function (req, res) {
        var response = {};
        userDB.find({},function(err,data){
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = data;
            }
            res.json(response);
        });

		 //res.json("{'test':'req'}");
	}
}

module.exports = users; 