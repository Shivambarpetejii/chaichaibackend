require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/youtube', (req,res) => {
  res.send('hii shivam first funcstion')
})
app.get('/login', (req,res)=>{
  res.send("<h1>hii i am chao</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})