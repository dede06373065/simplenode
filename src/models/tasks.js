let tasks = [];
let id = 1;

function getUserIndex(id){
    console.log('@@',tasks.findIndex(i => i.id === id))
    return tasks.findIndex(i => i.id === id);
}
function getUserById(id){
    return tasks.find(i => i.id ===id);
}
function addUser({user}){
    const task = {id:id++,user};
    tasks.push(task);
    return task;
}
function deleteUser(id){
    const index = getUserIndex(id);
    console.log(index);
    if(index<0)return;
    tasks.splice(index,1);
    return tasks;
}
function updateUser(id,{user}){
    const task = getUserById(id);
    console.log(task);
    if(task){
        task.user=user
    }
    return task;
}

module.exports = {
    addUser,
    getUserById,
    deleteUser,
    updateUser
}