const students = require('../models/students')

exports.studentsPost = async (req,res,next) => {
    const { firstName , lastName ,shareholder, age , description ,sex } = req.body
    await students.create({firstName,lastName,shareholder,age,description,sex})
    .then(students => {
        return res.status(200).json({message: 'student added successfully'})
    })
    .catch(function(err){
        const errors = err.errors[0]
        if(errors.value === null) {
            return res.status(500).json({message: 'fill in all fields'})
        }
        if(errors.type === 'Validation error') {
            return res.status(500).json({message: 'unexpected error'})
        }
        return res.status(500).json(err)
    })
}

exports.getAll = async (req,res,next) => {
    const student = await students.findAll()
    return res.status(200).json(student)
}

exports.getById = async (req,res,next) => {
    const id = req.params.id
    const student = await students.findOne({ raw: true ,where: {id: id} })
    return res.status(200).json(student)
}

exports.update = async (req,res,next) => {
    const { firstName , lastName ,shareholder, age , description ,sex } = req.body
    const id = req.params.id
    const updateStudents = {
        firstName,
        lastName,
        shareholder,
        age,
        description,
        sex
    }
    await students.update(updateStudents, {where: {id: id}})
    .then(students => {
        return res.status(200).json({message: 'update student'})
    })
    .catch(function(err){
        const errors = err.errors[0]
        if(errors.value === null) {
            return res.status(500).json({message: 'fill in all fields'})
        }
        if(errors.type === 'Validation error') {
            return res.status(500).json({message: 'unexpected error'})
        }
        return res.status(500).json(err)
    })
}

exports.delete = async (req,res,next) => {
    const id = req.params.id
    await students.destroy({where: {id: id}})
    return res.status(200).json({message: 'student successfully removed'})
}