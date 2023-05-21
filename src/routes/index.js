const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUserById, deleteUser, updateUser, promUsers } = require('../controllers/index.controller')

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);
router.get('/promedio-edad', promUsers);

module.exports = router;