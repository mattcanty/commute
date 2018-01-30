require('dotenv').config()

const express = require('express')
const commute = require('../commute')
const app = express()

const port = process.env.PORT || 3000

express.static('/')

app.use(express.static('public'))

app.get('/token_exchange', (req, res) => {
    console.log('token received')

    commute.authenticate(req.query.code, (err, jwt) => {
        if(err) throw err

        res.send(jwt)
    })
})

app.listen(port, '0.0.0.0', () => console.log(`Server listening on port ${port}!`))