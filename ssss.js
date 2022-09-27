
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Worlsd122d fghh')
})
app.post('/', function (req, res){
    res.send('hello world')
})

app.listen(5000)