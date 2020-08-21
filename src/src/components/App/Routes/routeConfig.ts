export const ROUTE_TYPE = {
  STANDARD: 'STANDARD',
  ADMIN: 'ADMIN',
} as const

type RouteType = typeof ROUTE_TYPE[keyof typeof ROUTE_TYPE]

type Payload = Record<string, string>

type SearchParams = Record<string, string>

export type RouteConfig<
  T extends Payload | undefined = undefined,
  U extends SearchParams | undefined = undefined
> = {
  name: string
  routeType: RouteType
  path: string
  component: any
  exact: boolean
  formatPath: (payload?: T) => string
  searchString: (queryParams: U) => string
}

const formatPath = <T extends Payload | undefined>(
  path: string,
  payload: T | undefined
) => {
  let formatPath = path

  if (!payload) return formatPath

  for (const [key, value] of Object.entries(payload as Exclude<T, undefined>)) {
    const regex = new RegExp(`:${key}`, 'g')
    formatPath = formatPath.replace(regex, value)
  }

  return formatPath
}

export const createRouteConfig = <
  T extends Payload | undefined = undefined,
  U extends SearchParams | undefined = undefined
>({
  name,
  routeType = ROUTE_TYPE.STANDARD,
  path,
  component,
  exact = true,
}: {
  name: string
  routeType?: RouteType
  path: string
  component: any
  exact?: boolean
}): RouteConfig<T, U> => ({
  name,
  routeType,
  path,
  component,
  exact,
  formatPath: (payload?: T) => formatPath<T>(path, payload),
  searchString: (queryParams: U) => createSearchString(queryParams),
})

const createSearchString = (queryParams: SearchParams | undefined) => {
  if (!queryParams) return ''

  return (
    '?' +
    Object.entries(queryParams)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
  )
}
