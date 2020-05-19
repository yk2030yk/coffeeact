import { Request, Response } from 'express'
import * as Twilio from 'twilio'

import { twilio } from '../twilio'
import { MyRouter } from './router'

const router: MyRouter = new MyRouter()

router.post('/publish_token', (req: Request, res: Response) => {
  const AccessToken = Twilio.jwt.AccessToken
  const VideoGrant = AccessToken.VideoGrant

  const { room_name: room, identity } = req.body || {}
  const videoGrant = new VideoGrant({ room })

  const token = new AccessToken(twilio.accountSid, twilio.apiKey, twilio.secret)
  token.addGrant(videoGrant)
  // @ts-ignore
  token.identity = identity

  return { token: token.toJwt() }
})

export default router.router
