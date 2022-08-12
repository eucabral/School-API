const students = require('../models/students')

exports.studentsPost = async (req,res,next) => {
    const { firstName , lastName ,shareholder, age , description ,sex } = req.body
    await students.create({firstName,lastName,shareholder,age,description,sex})
    return res.status(200).json({message: 'student added successfully'})
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
    return res.status(200).json(updateStudents)
}

exports.delete = async (req,res,next) => {
    const id = req.params.id
    await students.destroy({where: {id: id}})
    return res.status(200).json({message: 'student successfully removed'})
}