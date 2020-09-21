console.log('Server Loading...')
const IP = process.env.IP || '127.0.0.1'
const PORT = process.env.PORT || 3000

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// retrieve data
app.get('/', (req, res) => {
  res.json('Hello Amazon Clone')
})

// send data from frontend to backend
app.post('/', (req, res) => {
  console.log(req.body.name)
})

app.listen(PORT, IP, err => {
  if (err) {
    console.log(err)
  } else console.log(`Server is listening at http://${IP}:${PORT}/index.html`)
})
