export const tmp = ''
// import { selector } from 'recoil'
// import { _token, _interviewInfo } from './atom'
// import { interviewInfoApiService } from '@/service/api/InterviewInfoApiService'

// type option = {
//   interviewId: string
//   password: string
//   intervieweeType: string
// }

// export const token = selector({
//   key: 'tokenSelector',
//   get: ({ get }: any) => {
//     return get(_token)
//   },
//   set: async ({ get, set }: any) => {
//     const token = get(_token)
//     if (!token) throw Error('')
//     const interviewInfo = await interviewInfoApiService.get(token)
//     set(_interviewInfo, interviewInfo)
//   },
// })

// export const interviewInfo = selector({
//   key: 'interviewInfoSelector',
//   get: ({ get }: any) => {
//     return get(_interviewInfo)
//   },
//   set: async ({ get, set }: any) => {
//     const token = get(_token)
//     if (!token) throw Error('')
//     const interviewInfo = await interviewInfoApiService.get(token)
//     set(_interviewInfo, interviewInfo)
//   },
// })
