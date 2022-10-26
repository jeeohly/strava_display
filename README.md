# Strava Display
A tool to get all your Strava runs on a json file.<br>
**API link**: https://developers.strava.com/docs/reference/

**Cadence over time**
![image](./charts/cadence_over_time.png)

**Average pace over time**
![image](./charts/avg_pace_over_time.png)

**Setup:**
1. `git clone git@github.com:jeeohly/strava_display.git`
2. `npm install`
3. create .env file in root with values from: https://www.strava.com/settings/api<br>
```
STRAVA_CLIENT_ID=YOUR_CLIENT_ID
STRAVA_SECRET=YOUR_STRAVA_SECRET
```
5. open following url with your YOUR_CLIENT_ID and then click authorize:
https://www.strava.com/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=http://localhost&response_type=code&scope=activity:read_all
6. get YOUR_CODE from new url and assign it to CODE variable in .env file:
http://localhost/?state=&code=YOUR_CODEscope=read,activity:read_all
7. Add line to .env file:
```
CODE=YOUR_CODE
```
9. Get refresh token from console:
`node strava.js refresh`
10. Add line to .env file: 
```
STRAVA_REFRESH_TOKEN=YOUR_REFRESH_TOKEN
```

**Commands:**
- Get your stats:
`node strava.js stats`
- Get all activities json:
`node strava.js runs`




