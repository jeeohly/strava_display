require('dotenv').config();

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

/*
const reauthrizeResponse = fetch('https://www.strava.com/api/v3/oauth/token', {
    method: 'POST',
    "headers": headers,
    "body": body
})

const reauthJson = reauthrizeResponse.json()
const accessToken = reauthJson.access_token
console.log(accessToken)
*/

