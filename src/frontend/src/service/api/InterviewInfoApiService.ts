export class InterviewInfoApiService {
  public async get(token: string) {
    console.log(token)
    return token
  }
}

export const interviewInfoApiService = new InterviewInfoApiService()
