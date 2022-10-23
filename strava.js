import * as dotenv from 'dotenv'
import fetch from 'node-fetch'
import fs from 'fs'
dotenv.config()

var headers = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
}

async function getAccessToken(){
    const body = JSON.stringify({
        client_id: process.env.STRAVA_CLIENT_ID, 
        client_secret: process.env.STRAVA_SECRET,
        refresh_token: process.env.STRAVA_REFRESH_TOKEN,
        grant_type: 'refresh_token'
    })
    const reauthrizeResponse = await fetch('https://www.strava.com/oauth/token', {
        method: 'POST',
        "headers": headers,
        "body": body
    })
    const reauthJson = await reauthrizeResponse.json()
    console.log(reauthJson.access_token)
    return reauthJson.access_token
}   

//use the refresh token from here
//code is retrieved from: https://www.strava.com/oauth/authorize?client_id=<your_client_id>&redirect_uri=http://localhost&response_type=code&scope=activity:read_all
async function getAccessToken2(){
    const body = JSON.stringify({
        client_id: process.env.STRAVA_CLIENT_ID, 
        client_secret: process.env.STRAVA_SECRET,
        code: process.env.CODE,
        grant_type: 'authorization_code'
    })
    const reauthrizeResponse = await fetch('https://www.strava.com/oauth/token', {
        method: 'POST',
        "headers": headers,
        "body": body
    })
    const reauthJson = await reauthrizeResponse.json()
    return reauthJson.refresh_token
}

async function getStats(){
    const access_token = await getAccessToken()
    const athleteReponse = await fetch('https://www.strava.com/api/v3/athlete?access_token=' + access_token)
    const athleteJson = await athleteReponse.json()
    const athlete_id = athleteJson.id
    const statsReponse = await fetch('https://www.strava.com/api/v3/athletes/' + athlete_id + '/stats?access_token=' + access_token)
    const statsJson = await statsReponse.json()
    console.log(statsJson.all_run_totals)
}

async function getRuns(){
    let page = 1 
    let activities = []
    while (true){
        const access_token = await getAccessToken()
        const activitiesResponse = await fetch('https://www.strava.com/api/v3/athlete/activities?page=' + page + '&per_page=200&access_token=' + access_token)
        const activitiesJson = await activitiesResponse.json()
        if(activitiesJson.length == 0){
            break
        }
        activities = activities.concat(activitiesJson)
        page++
    }
    activities = JSON.stringify(activities);
    fs.writeFileSync("activities.json", activities, "utf-8");
}







