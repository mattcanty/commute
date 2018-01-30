const strava = require('strava-v3')
const jwt = require('jsonwebtoken')
const database = require('./database')

module.exports.authenticate = (code, callback) => {
    console.log('Exchanging code with Strava')

    strava.oauth.getToken(code, (err, getTokenPayload) => {
        if(err) throw err
        
        var existingUser = database.getUserByStravaId(getTokenPayload.athlete.id)

        var userId = existingUser
            ? existingUser.id
            : database.createUserWithStravaId(getTokenPayload.athlete.id)

        var token = jwt.sign({ userId: userId }, process.env.JWT_SECRET)

        callback(null, token)
    })
}