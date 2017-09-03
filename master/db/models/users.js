var db = require('../db');

var userSchema  = {
    "userEmail" : String,
    "userPassword" : String
};
module.exports = db.model('users',userSchema);
