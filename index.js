'use strict';

/*
require('dotenv').config()

let uuidv4 = require('uuid/v4')
let strava = require('strava-v3')
let jwt = require('jsonwebtoken')
let AWS = require('aws-sdk')
let dynamo = new AWS.DynamoDB.DocumentClient({
    region: process.env.AWS_DEFAULT_REGION,
    endpoint: process.env.DYNAMO_DB_ENDPOINT
});

let put = (params) => { return dynamo.put(params).promise() }
*/
exports.exchangeStravaTokenHandler = (event, context, callback) => {
    callback(null, { body: "Hello, world!"})
    /*
    strava.oauth.getToken(event.queryStringParameters.code, (error, getTokenPayload) => {
        if(error) callback(error)

        let userId = uuidv4()

        let params = {
            TableName: process.env.USERS_TABLE_NAME,
            Item: {
                id: userId,
                strava_athlete_id: `${getTokenPayload.athlete.id}`
            }   
        }

        put(params).then((data) => {
            let token = jwt.sign({ userId: userId }, process.env.JWT_SECRET)
        
            callback(null, { body: token })
        }).catch((error) => callback(error))
    })
    */
}