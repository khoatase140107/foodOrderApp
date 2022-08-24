 const express = require('express')
 const app = express()
 const PORT = 3001

 const teacherRouter = require('./Teacher')
 const studentRouter = require('./Student')
 const subjectRouter = require('./Subject')

 app.use('/teacher', 
        (req,res,next) => {
            if(['alice'&& 'alice@123'].includes(req.query.username && req.query.apiKey )) {
                return next()
            }
        res.status(403).json({message:'LỖI RỒI BẠN À'})
  },
  teacherRouter)


 app.use('/student', 
 (req,res,next) => {
      if(['bob' && 'bob@123'].includes(req.query.username && req.query.apiKey)) {
        return next()
      }
      res.status(403).json({message: 'LỖI RỒI BẠN À'})
 },
  studentRouter)


 app.use('/subject' ,
 (req,res,next) => {
     if(['charlie' && 'charlie@123'].includes(req.query.username && req.query.apiKey)) {
      return next()
     }
     res.status(403).json({message: 'LỖI RỒI BẠN À'})
 },
 subjectRouter)



 app.listen(PORT , () => {
  console.log(`http:/localhost:${PORT}`)
 })

