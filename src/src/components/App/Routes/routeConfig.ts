export const ROUTE_TYPE = {
  STANDARD: 'STANDARD',
  ADMIN: 'ADMIN',
} as const

type RouteType = typeof ROUTE_TYPE[keyof typeof ROUTE_TYPE]

type Payload = Record<string, string>

type RouteConfig<T extends Payload> = {
  routeType: RouteType
  path: string
  component: any
  exact: boolean
  formatPath: (payload?: T) => string
}

const formatPath = <T extends Payload>(
  path: string,
  payload: T | undefined
) => {
  let formatPath = path

  if (!payload) return formatPath

  for (const [key, value] of Object.entries(payload)) {
    const regex = new RegExp(`:${key}`, 'g')
    formatPath = formatPath.replace(regex, value)
  }

  return formatPath
}

export const createRouteConfig = <T extends Payload>({
  routeType = ROUTE_TYPE.STANDARD,
  path,
  component,
  exact = true,
}: {
  routeType?: RouteType
  path: string
  component: any
  exact?: boolean
}): RouteConfig<T> => ({
  routeType,
  path,
  component,
  exact,
  formatPath: (payload?: T) => formatPath<T>(path, payload),
})
