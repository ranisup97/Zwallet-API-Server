const uploadRoute = require('express').Router()
const uploadController = require('../Controllers/Upload')
const verifyToken = require('../Helpers/Middleware/verifyToken')

// uploadRoute.get('/', verifyToken, uploadController.upload)
uploadRoute.post('/', verifyToken, uploadController.uploadImage)


module.exports = uploadRoute