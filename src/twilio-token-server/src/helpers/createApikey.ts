import { twilio } from '../twilio'

const client = require('twilio')(twilio.accountSid, twilio.accountToken)

client.newKeys.create().then((new_key: any) => {
  console.log(`
API_KEY=${new_key.sid}
API_SECRET=${new_key.secret}
`)
})
