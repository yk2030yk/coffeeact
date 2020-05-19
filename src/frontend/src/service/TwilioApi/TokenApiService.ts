/* eslint-disable @typescript-eslint/camelcase */
import { TwilioApiService } from './TwilioApiService'

export class TokenApiService extends TwilioApiService {
  public async getToken(room_name: string, identity: string): Promise<string> {
    const response = await this.post<{ token: string }>('/publish_token', {
      room_name,
      identity,
    })
    return response.data.token
  }
}

export const tokenApiService = new TokenApiService()
