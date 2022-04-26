var express = require('express');
var router = express.Router();
const {index, getUserById, addUser, updateUser, deleteUser} = require('./controller')

/* GET home page. */
router.get('/users', index);
router.get('/users/:id', getUserById)
router.post('/users', addUser)
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

module.exports = router;
