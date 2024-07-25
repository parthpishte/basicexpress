require('dotenv').config()
const express = require('express')
const app = express()
//const port = 3000

//       route callback->home
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//       route callback->parth
app.get('/parth', (req, res) => {
    res.send('Hello parth!')
  })

  //       route callback->/hey
  app.get('/hey', (req, res) => {
    res.send('Hello!')
  })
  
  //       route callback->/hi
  app.get('/hi', (req, res) => {
    res.send('<h1>hi!</h1>')
  })


//listeining to port 3000 constantly
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})