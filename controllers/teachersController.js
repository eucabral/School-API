const teachers = require('../models/teachers')

exports.teachersPost = async (req,res,next) => {
    const { firstName , lastName , age , description ,sex } = req.body
    await teachers.create({firstName,lastName,age,description,sex})
    .then(students => {
        return res.status(200).json({message: 'new teacher add'})
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
    const teacher = await teachers.findAll()
    return res.status(200).json(teacher)
}

exports.getById = async (req,res,next) => {
    const id = req.params.id
    const teacher = await teachers.findOne({ raw: true ,where: {id: id} })
    return res.status(200).json(teacher)
}

exports.update = async (req,res,next) => {
    const { firstName , lastName ,shareholder, age , description ,sex } = req.body
    const id = req.params.id
    const updateTeachers = {
        firstName,
        lastName,
        age,
        description,
        sex
    }
    await teachers.update(updateTeachers, {where: {id: id}})
    .then(students => {
        return res.status(200).json({message: 'update teacher'})
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
    await teachers.destroy({where: {id: id}})
    return res.status(200).json({message: 'teacher successfully removed'})
}