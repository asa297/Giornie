const express = require('express')
const app = express()
const server = require('http').createServer(app)
const cors = require('cors')
const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/api/test', (req, res) => {
  res.send('test')
})

server.listen(PORT, err => {
  if (err) throw err
  console.log('> Ready on http://localhost:5000')
})
