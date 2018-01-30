'use strict'

require('dotenv').config()

const commute = require('./commute')

exports.exchangeStravaTokenHandler = (event, context, callback) => {

    commute.authenticate(event.queryStringParameters.code, (err, jwt) => {
        if(err) throw err

        callback(null, {
            statusCode: 200,
            body: "Hello, World!"
        })    
    })

    
}