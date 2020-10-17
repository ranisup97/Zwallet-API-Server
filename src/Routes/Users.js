const userRoute = require('express').Router()
const usersController = require('../Controllers/Users')
const verifyToken = require('../Helpers/Middleware/verifyToken')
const upload = require('../Helpers/Uploads')

userRoute.get('/', verifyToken, usersController.getPagination)
userRoute.get('/', verifyToken, usersController.getAllUsers)
userRoute.get('/:id', verifyToken, usersController.getUser)
userRoute.post('/', upload, verifyToken, usersController.createUser)
userRoute.delete('/:id', verifyToken, usersController.deleteUser)
userRoute.put('/:id', verifyToken, usersController.updatePUT)

module.exports = userRoute