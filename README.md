# Strava Display

**API link**: https://developers.strava.com/docs/reference/<br>

**Cadence over time**: 
![image](https://user-images.githubusercontent.com/29128251/196976383-9c6e8561-7f57-4bc6-a4cb-80dd0124fe51.png)

**To use yourself:**
1. `git clone git@github.com:jeeohly/strava_display.git`
2. `npm install`
3. create .env file in root with contents:<br>
```
STRAVA_CLIENT_ID="from here: https://www.strava.com/settings/api"<br>
STRAVA_SECRET="from here: https://www.strava.com/settings/api"<br>
STRAVA_REFRESH_TOKEN="from here: https://www.strava.com/settings/api"<br>
CODE={from step 6.}
```
5. open following url with your client_id and click authorize:<br>
https://www.strava.com/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=http://localhost&response_type=code&scope=activity:read_all
6. get code argument from url and assign it to CODE variable in .env file 



