const express = require('express')
const request = require('request')
const app = express()

const SERVICE_HOSTNAME = process.env.SERVICE_HOSTNAME;
const STRAVA_CLIENT_ID = process.env.STRAVA_CLIENT_ID;
const STRAVA_CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;
const STRAVA_SCOPE = process.env.STRAVA_SCOPE || 'view_private';

app.get('/', (req, res) => {
    const url = `https://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${SERVICE_HOSTNAME}/oauth/strava&scope=${STRAVA_SCOPE}`
    res.send(`<a href="${url}">Authorize Strava</a>`)
});

app.get('/oauth/strava', (req, res) => {
    const code = req.query.code
    
    if (!code) {
        res.send('No code supplied in query params')
        return
    }
    
    const formData = {
        client_id: STRAVA_CLIENT_ID,
        client_secret: STRAVA_CLIENT_SECRET,
        code: code
    }

    request.post({ url: 'https://www.strava.com/oauth/token', formData: formData}, (err, httpResponse, body) => {
        if (err) {
            res.end(error)
            return console.error('POST failed:', err);
        }
        console.log('POST successful! Server responded with:', body);
        res.end(body)
    })
    
})

app.listen(80, () => console.log('App listening on port 80'))