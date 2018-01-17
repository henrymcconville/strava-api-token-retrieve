# Strava API Token Retrieve
 
A basic Dockerised node app to generate bearer tokens to use with the Strava API

## Environment Variables

* `SERVICE_HOSTNAME` - Base URL to which the user will be redirected with the authorization code (must be to the callback domain associated with the application, or its sub-domain, localhost and 127.0.0.1 are white-listed)
* `STRAVA_CLIENT_ID` - Application’s ID, obtained during registration
* `STRAVA_CLIENT_SECRET` - Application’s secret, obtained during registration
* `STRAVA_SCOPE` - comma delimited string of ‘view_private’ and/or ‘write’, leave blank for read-only permissions.

## Usage

### Docker Compose

Example docker-compose.yml
```
version: '2'
services:
  strava-api-token-retrieve:
    image: henrymcconville/strava-api-token-retrieve:0.1.0
    ports:
      - "80:80"
    environment:
      - SERVICE_HOSTNAME=http://www.test.com
      - STRAVA_CLIENT_ID=<insert_client_id_here>
      - STRAVA_SCOPE=view_private
      - STRAVA_CLIENT_SECRET=<insert_client_secret_here>
```
