/* eslint-disable @typescript-eslint/camelcase */
import Axios, { AxiosInstance } from 'axios'
import { EnvNotFoundException } from '@/errors'

const API_HOST = process.env.REACT_APP_TWILIO_API_HOST

if (!API_HOST) {
  throw new EnvNotFoundException('API_HOST')
}

export class TwilioApiService {
  public client: AxiosInstance

  constructor() {
    this.client = Axios.create({
      baseURL: `${API_HOST}/twilio`,
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      responseType: 'json',
      timeout: 5000,
    })
  }

  public async get<T>(path: string, params: any) {
    const response = await this.client.get<T>(path, {
      params,
    })
    return response
  }

  public async post<T>(path: string, params: any) {
    const response = await this.client.post<T>(path, params)
    return response
  }
}
