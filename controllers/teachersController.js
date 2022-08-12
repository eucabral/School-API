const teachers = require('../models/teachers')

exports.teachersPost = async (req,res,next) => {
    const { firstName , lastName , age , description ,sex } = req.body
    await teachers.create({firstName,lastName,age,description,sex})
    return res.status(200).json({message: 'teacher added successfully'})
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
    return res.status(200).json(updateTeachers)
}

exports.delete = async (req,res,next) => {
    const id = req.params.id
    await teachers.destroy({where: {id: id}})
    return res.status(200).json({message: 'teacher successfully removed'})
}