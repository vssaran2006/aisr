
var services = require('./serviceRequest.js');
var users = require('./users.js');

module.exports = function(router){

    //router.get('/api/v1/products', services.getAll);
    router.route('/api/services').get(services.getAll);
    router.route('/api/services').post(services.createService);
    router.route('/api/users').get(users.getAll);
};

// router.route("/services").post(function(req, res){
//     var db = new mongoService();
//     db.title = req.body.title;
//     db.description = req.body.description;
//     db.postedDate = new Date();
//     db.serviceType = req.body.serviceType;
//     db.category = req.body.category;
//     db.save(function(err){
//         if(err) {
//             response = {"error" : true,"message" : "Error adding data"};
//         } else {
//             response = {"error" : false,"message" : "Service Created"};
//         }
//         res.json(response);
//     });    
// }).get(function(req,res){
//     res.json({'s':'dd'});
// });