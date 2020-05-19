/// <reference types="react-scripts" />

// Type definitions for recoil 0.0
// Project: https://github.com/facebookexperimental/recoil#readme
// Definitions by: Christian Santos <https://github.com/csantos42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

/// <reference types="react" />

declare module 'recoil' {
  export const atom: any
  export const selector: any
  export const useRecoilValue: any
  export const useRecoilValueLoadable: any
  export const useRecoilState: any
  export const useRecoilStateLoadable: any
  export const useSetRecoilState: any
  export const useResetRecoilState: any
  export const useRecoilCallback: any
  export const isRecoilValue: any
  export const RecoilRoot: any
}
