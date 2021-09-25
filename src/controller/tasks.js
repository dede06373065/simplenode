const Tasks = require('../models/tasks')

function addUser(req,res){
    const {user} = req.body;
    const task = Tasks.addUser({user});
    console.log('addUser:',task)
    return res.status(201).json(task);
}

function getUserById(req,res){
    const {id} = req.params;
    const task = Tasks.getUserById(id);
    console.log('getUserById:',task)
    return res.status(200).json(task);
}

function deleteUser(req, res){
    const {id} = req.params;
    const task = Tasks.deleteUser(id);
    console.log('deleteUser',task);
    if(task){
        return res.status(200).json(task);
    }
    return res.send('user is not exist!');
}

function updateUser(req,res){
    const {id} = req.params;
    const {user} = req.body;
    const task = Tasks.updateUser(id,{user});
    return res.status(201).json(task);
}
module.exports = {
    addUser,
    getUserById,
    deleteUser,
    updateUser
}