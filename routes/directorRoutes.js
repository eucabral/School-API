const express = require('express')
const router = express.Router()

const directorController = require('../controllers/directorController')

router.post('/register',directorController.Register)
router.post('/login',directorController.login)

module.exports = router