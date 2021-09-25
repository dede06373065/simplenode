const {getUserById} = require('../models/tasks')
module.exports = function checkExist(req,res,next){
    const {id} = req.params;
    if(!getUserById){
        return res.sendStatus(404);
    }
    next();
}