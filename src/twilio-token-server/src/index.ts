import { json, urlencoded, Express } from 'express'
import { allowCors } from './cors'
import { roomRouter, tokenRouter, errorRouter } from './routers'
import { EnvException } from './errors'

const dotenv = require('dotenv')
const express = require('express')

dotenv.config()
const app: Express = express()

// .env
const port = process.env.PORT
const host = process.env.HOST
if (!port) throw new EnvException('PORT')
if (!host) throw new EnvException('HOST')

// use setting
app.use(allowCors)
app.use(json())
app.use(urlencoded({ extended: true }))

// set router
app.use('/', roomRouter)
app.use('/', tokenRouter)
app.use('/', errorRouter)

// start listen
app.listen(Number(port), host, () => {
  console.log(`http://${host}:${port}`)
})
