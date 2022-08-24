const express = require('express') 
const subjectRouter = express.Router()

const subject = [
    {id:1 ,name:'toan hoc'},
    {id:1 ,name:'van hoc'},
    {id:1 ,name:'anh van'},
    {id:1 ,name:'hoa hoc'},
]

subjectRouter.get('/' , (req,res) => {
    res.json(subject)
})

module.exports = subjectRouter