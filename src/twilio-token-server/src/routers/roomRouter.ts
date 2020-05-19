import { Request, Response } from 'express'

import { twilio } from '../twilio'
import { MyRouter } from './router'

const router: MyRouter = new MyRouter()

router.post('/complete_room', async (req: Request, _res: Response) => {
  const { room_name } = req.body || {}
  await twilio.client.video.rooms(room_name).update({ status: 'completed' })
  return { status: 'success' }
})

export default router.router
