const director = require('../models/director')

exports.Register = async (req,res,next) => {
    const { email, password } = req.body
    await director.create({
        email,password
    }).then(function(director){
        res.status(200).json({message: 'successful registered director'})
    }).catch(
        function(err) {
            const errors = err.errors[0]
            if(errors.message === 'email must be unique'){
                return res.status(500).send({error: 'Esse e-mail já existe!'})
            }
            if(errors.type === 'notNull Violation'){
                return res.status(500).send({error: `${errors.path} é obrigatorio!`})
            }
            return res.status(500).send({error: 'Ocorreu um erro inesperado!'})
    })
}

exports.login = async (req,res,next) => {

}