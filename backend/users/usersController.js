const express = require('express');
const router = express.Router();

const User = require('./User');
const getUsers = User.getUsers;
const addUser = User.addUser;
const updateUser = User.updateUser;
const deleteUser = User.deleteUser;

router.get('/', getUsers);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
