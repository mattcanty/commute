var AWS = require('aws-sdk')

AWS.config.update({region: process.env.AWS_DEFAULT_REGION})

dynamodb = new AWS.DynamoDB({apiVersion: '2012-10-08'})

var params = {
    TableName: 'USERS',
    Item: {
        'ID' : {N: '001'},
        'STRAVA_ID' : {S: 'Richard Roe'},
    }
}

//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write.html