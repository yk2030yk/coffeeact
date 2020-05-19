/* eslint-disable @typescript-eslint/camelcase */
import { TwilioApiService } from './TwilioApiService'

export class RoomApiService extends TwilioApiService {
  public async complete(room_name: string): Promise<string> {
    const response = await this.post<{ status: string }>('/complete_room', {
      room_name,
    })
    return response.data.status
  }
}

export const roomApiService = new RoomApiService()
