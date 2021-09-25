const express = require('express');
const {
    addUser,
    getUserById,
    deleteUser,
    updateUser
} = require('../controller/tasks');
const parseId = require('../middleware/parseId');
const checkExist = require('../middleware/checkExist');
const router = express.Router();

router.get('/tasks/:id', checkExist,parseId, getUserById);
router.post('/tasks', addUser);
router.delete('/tasks/:id', checkExist, parseId, deleteUser);
router.put('/tasks/:id',checkExist,parseId,updateUser);

module.exports = router;