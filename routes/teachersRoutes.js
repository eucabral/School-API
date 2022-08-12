const express = require('express')
const router = express.Router()

const teachersController = require('../controllers/teachersController')

router.post('/',teachersController.teachersPost)
router.get('/',teachersController.getAll)
router.get('/:id',teachersController.getById)
router.patch('/:id',teachersController.update)
router.delete('/:id',teachersController.delete)
module.exports = router