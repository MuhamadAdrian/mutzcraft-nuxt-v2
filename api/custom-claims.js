const express = require('express')

const app = express()
app.use(express.json())

app.post('/create-custom-claims', (req, res) => {
  console.log(req.body.uid)
})

module.exports = app
