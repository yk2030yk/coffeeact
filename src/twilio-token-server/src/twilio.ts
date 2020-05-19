import * as Twilio from 'twilio'
import { EnvException } from './errors'

export class _Twilio {
  public apiKey: string
  public secret: string
  public accountSid: string
  public accountToken: string
  public client: Twilio.Twilio

  constructor({
    apiKey,
    secret,
    accountSid,
    accountToken,
  }: {
    apiKey: string
    secret: string
    accountSid: string
    accountToken: string
  }) {
    this.apiKey = apiKey
    this.secret = secret
    this.accountSid = accountSid
    this.accountToken = accountToken
    this.client = Twilio(apiKey, secret, { accountSid })
  }
}

const createTwilio = () => {
  const dotenv = require('dotenv')
  dotenv.config()

  const apiKey = process.env.API_KEY || ''
  const secret = process.env.API_SECRET || ''
  const accountSid = process.env.ACCOUNT_SID || ''
  const accountToken = process.env.ACCOUNT_TOKEN || ''

  if (!apiKey) throw new EnvException('API_KEY')
  if (!secret) throw new EnvException('API_SECRET')
  if (!accountSid) throw new EnvException('ACCOUNT_SID')
  if (!accountToken) throw new EnvException('ACCOUNT_TOKEN')

  return new _Twilio({ apiKey, secret, accountSid, accountToken })
}

export const twilio = createTwilio()
