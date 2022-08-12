const express = require('express')
const router = express.Router()

const directorController = require('../controllers/directorController')

router.post('/',directorController.Register)
router.post('/',directorController.login)
// router.post('/',directorController.login)

module.exports = router