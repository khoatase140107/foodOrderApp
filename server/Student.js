const express = require('express')
const studentRouter = express.Router()

const student = [
    {id: 1, name: 'doan tam anh', age:43},
    {id: 2, name: 'doan minh chanh', age:43},
    {id: 3, name: 'trinh minh bao nguyet', age:43},
    {id: 4, name: 'ho ngoc ha', age:43},
    {id: 5, name: 'son tung om ti vi', age:43},
    {id: 6, name: 'rac 5 trieu', age:43},
]

studentRouter.get('/' , (req,res) => {
    res.json(student)
})

module.exports = studentRouter