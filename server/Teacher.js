const express = require('express')
const teacherRouter = express.Router()

const teacher = [
    {id: 1, name: 'hoang thuy linh', age:43},
    {id: 2, name: 'hoang nguyen huy', age:33},
    {id: 2, name: 'trinh thuy van', age:24},
]

teacherRouter.get('/' , (req,res) => {
    res.json(teacher)
})

module.exports = teacherRouter