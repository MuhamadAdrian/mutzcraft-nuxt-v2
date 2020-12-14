const express = require('express')
const admin = require('firebase-admin')

!admin.apps.length ? admin.initializeApp() : ''

const app = express()
app.use(express.json())

app.post('/create-custom-claims', (req, res) => {
  admin
    .auth()
    .getUserByEmail(req.body.email)
    .then((user) => {
      console.log(user)
    })
})

app.post('/getUsers', (req, res) => {
  admin
    .auth()
    .getUserByEmail('proge@googleappmail.com')
    .then((result) => {
      res.send(result)
    })
})

module.exports = app
