import { Request, Response } from 'express'

import { MyRouter } from './router'

const router: MyRouter = new MyRouter()

router.get('*', (_req: Request, res: Response) => {
  res.status(404)
  return {
    error: 'this url is not found',
  }
})

export default router.router
