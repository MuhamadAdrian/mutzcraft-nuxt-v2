const express = require('express')
const admin = require('firebase-admin')
const serviceAcc = require('C:/Users/Muhamad/Downloads/service-account.json')

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAcc),
  })
}

const app = express()
app.use(express.json())

app.post('/set-custom-claims', (req, res) => {
  let email = req.body.email
  admin
    .auth()
    .getUserByEmail(email)
    .then((user) => {
      if (user.emailVerified) {
        admin
          .auth()
          .setCustomUserClaims(user.uid, {
            admin: true,
          })
          .then(() => {
            admin.auth().updateUser(user.uid, {
              admin: true,
            })
            res.end(JSON.stringify({ status: 'success' }))
          })
          .catch(() => res.end(JSON.stringify({ status: 'failed' })))
      } else {
        res.end(JSON.stringify({ status: 'failed' }))
      }
    })
})

module.exports = app
