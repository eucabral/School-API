const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const conn = require('./db')


const studentsRoutes = require('./routes/studentsRoutes')
const teachersRoutes = require('./routes/teachersRoutes')
const directorRoutes = require('./routes/directorRoutes')

app.use(bodyParser.urlencoded({extended: false}))//apenas dados simples
app.use(bodyParser.json()) //apenas json


app.use((req,res,next) => {
    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Header,Origin,X-Request-With,Content-Type,Accept,Autorization')
    if(req.method === 'OPTIONS') {
        res.header('Acess-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET')
    }
    next()
})

app.use('/students',studentsRoutes)
app.use('/teachers',teachersRoutes)
app.use('/director',directorRoutes)


//quando nao encontra rota
app.use((req,res,next) => {
    const erro = new Error('Not found')
    erro.status = 404
    next(erro)
})

app.use((error,req,res,next) => {
    res.status(error.status || 500)
    return res.send({erro:{message: error.massage}})
})

conn.sync().then(() => {
    app.listen(3000)
})
.catch((err) => console.log(err))

module.exports = app