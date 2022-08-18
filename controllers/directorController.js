const director = require('../models/director')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../helpers/auth')

exports.Register = async (req,res,next) => {
    let password = bcrypt.hashSync(req.body.password,auth.rounds)

    //create a director
    director.create({
        email: req.body.email,
        password: password
    }).then(director => {
        let token = jwt.sign({director: director} , auth.secret ,{
            expiresIn: auth.expires
        })
        res.json({director,token})
    }).catch(function(err) {
        const errors = err.errors[0]
        if(errors.message === 'email must be unique') {
            return res.status(500).json({message: 'email already registered'})
        }
        if(errors.type === 'notNull Violation'){
            return res.status(500).json({message: 'email is mandatory'})
        }
        return res.status(500).json(err)
    })
}

exports.login = async (req,res,next) => {
    const { email, password } = req.body

    director.findOne({
        where: {
            email: email
        }
    }).then(director => {
        if(!director) {
            res.status(404).json({message: 'the email in not exist'})
        }else {
            if(bcrypt.compareSync(password,director.password)) {
                let token = jwt.sign({director: director} , auth.secret ,{
                    expiresIn: auth.expires
                    
                })
                res.json({
                    director: director,
                    token: token
                })
            }else {
                res.status(401).json({message: 'incorrect password'})
            }
        }
    })
}