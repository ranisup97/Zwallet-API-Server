const transferRoute = require('express').Router()
const transferController = require('../Controllers/Transfer')

// const usersController = require('../Controllers/Users')
const verifyToken = require('../Helpers/Middleware/verifyToken')

transferRoute.get('/', verifyToken, transferController.getPagination)
transferRoute.get('/', verifyToken, transferController.getAllTransfer)
transferRoute.get('/', verifyToken, transferController.searchByName)
transferRoute.get('/:id', verifyToken, transferController.getTransfer)
transferRoute.post('/', verifyToken, transferController.createTransfer)
transferRoute.delete('/:id', verifyToken, transferController.deleteTransfer)
transferRoute.get('/search', transferController.searchByName)
transferRoute.put('/:id',verifyToken, transferController.updatePUT)


module.exports = transferRoute


