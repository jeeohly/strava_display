import * as dotenv from 'dotenv'
import fetch from 'node-fetch'
dotenv.config()

const headers = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
}

const body = JSON.stringify({
    client_id: process.env.STRAVA_CLIENT_ID, 
    client_secret: process.env.STRAVA_SECRET,
    refresh_token: process.env.STRAVA_REFRESH_TOKEN,
    grant_type: 'refresh_token'
})

console.log(body)

const reauthrizeResponse = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    "headers": headers,
    "body": body
})

const reauthJson = await reauthrizeResponse.json()
const authToken = reauthJson.access_token
console.log(authToken)



