const topupRoute = require('express').Router()
const topupController = require('../Controllers/Topup')
const verifyToken = require('../Helpers/Middleware/verifyToken')

topupRoute.get('/', verifyToken, topupController.getPagination)
topupRoute.get('/', verifyToken, topupController.getAllTopup)
topupRoute.get('/:id', verifyToken, topupController.getTopup)
topupRoute.post('/', verifyToken, topupController.createTopup)
topupRoute.delete('/:id', verifyToken, topupController.deleteTopup)
topupRoute.put('/:id', verifyToken, topupController.updatePUT)

module.exports = topupRoute


