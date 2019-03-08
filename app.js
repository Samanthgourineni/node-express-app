const express = require('express')
const app = express()
const hostname = '0.0.0.0' // set constants
const port = 3002 

app.get('/', function (req, res) {
  res.send('Welcome home!')
})

app.get('/Samanth', (req, res) => {
  console.log('Samanth')
  res.send('Welcome back Samanth'.fontsize(10))
})

app.get('/Colour', (req, res) => {
  res.send('Changed font colour'.fontcolor('blue').fontsize(20))
})

app.get('/index', (req, res) => {
  res.send('<h2>The Substring is '+'Checking india'.substring(9)+'</h2>')
})

app.get('/greeting/:id',  (req, res) =>{
  res.send('Hello! The id was ' + req.params.id)
})

app.get('/yo/:buddy',  (req, res) =>{
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})




app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

