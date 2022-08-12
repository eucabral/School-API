const express = require('express')
const router = express.Router()

const studentsController = require('../controllers/studentsController')

router.post('/',studentsController.studentsPost)
router.get('/',studentsController.getAll)
router.get('/:id',studentsController.getById)
router.patch('/:id',studentsController.update)
router.delete('/:id',studentsController.delete)
module.exports = router