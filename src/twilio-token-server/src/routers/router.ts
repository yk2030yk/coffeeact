import { Router, Request, Response } from 'express'

type Callback = (req: Request, res: Response) => Object

export class MyRouter {
  public router: Router

  constructor() {
    this.router = Router()
  }

  public get(path: string, callback: Callback) {
    this.router.get(path, (req: Request, res: Response) => {
      try {
        const result = callback(req, res)
        res.status(200)
        res.send({
          status: 0,
          result,
        })
      } catch (e) {
        res.status(500)
        res.send({
          status: 1,
          error: e.message,
        })
      }
    })
  }

  public post(path: string, callback: Callback) {
    this.router.post(path, (req: Request, res: Response) => {
      try {
        const result = callback(req, res)
        res.status(200)
        res.send({
          status: 0,
          result,
        })
      } catch (e) {
        res.status(500)
        res.send({
          status: 1,
          error: e.message,
        })
      }
    })
  }
}
