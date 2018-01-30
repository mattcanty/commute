const shortid = require('shortid')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const database = low(adapter)

//database.defaults({ 
//    users: []
//}).write()

module.exports.getUserByStravaId = (stravaAthleteId) => {
    return database
        .get('users')
        .find({ stravaAthleteId: stravaAthleteId })
        .value()
}

module.exports.createUserWithStravaId = (stravaAthleteId) => {
    return database
        .get('users')
        .push({
            id: shortid.generate(),
            stravaAthleteId: stravaAthleteId
        })
        .write()
        .id
}