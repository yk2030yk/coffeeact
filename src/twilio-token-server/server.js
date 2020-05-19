const uuid = require('uuid');
const twilio = require('twilio')
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const apiKey = require( "./apiKey.json" );
const account = require( "./account.json" );

app.use(bodyParser.json());

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token'
  )

  // intercept OPTIONS method
  if ('OPTIONS' === req.method) {
    res.send(200)
  } else {
    next()
  }
}

app.use(allowCrossDomain)

app.post('/twilio/publish_token', (req, res) => {
  const AccessToken = twilio.jwt.AccessToken;
  const VideoGrant = AccessToken.VideoGrant;

  console.log(req.body)
  const videoGrant = new VideoGrant({
    room: req.body.room_name,
  });

  const token = new AccessToken(account.accountSid, apiKey.sid, apiKey.secret);
  token.addGrant(videoGrant);
  token.identity = req.body.identity;

  res.send({ token: token.toJwt() })
})

app.post('/twilio/complete_room', (req, res) => {
  const client = new twilio(apiKey.sid, apiKey.secret, { accountSid: account.accountSid })
  client.video.rooms(req.body.roomSid).update({ status: 'completed' })
  res.send({ status: 'success' })
})


app.get('*', (req, res) => {
  res.status(404)
  res.send({ error:"404" })
})

app.listen(3003, () => console.log('http://localhost:3003'))

