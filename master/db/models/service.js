var db = require('../db');

var serviceSchema  = {
    "title" : String,
    "description" : String,
    "postedDate" : String,
    "serviceType" : String,
    "category" : String
};
module.exports = db.model('services',serviceSchema);
