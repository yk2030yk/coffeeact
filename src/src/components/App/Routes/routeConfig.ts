export const ROUTE_TYPE = {
  STANDARD: 'STANDARD',
  ADMIN: 'ADMIN',
} as const

type RouteType = typeof ROUTE_TYPE[keyof typeof ROUTE_TYPE]

type RouteConfig = {
  routeType: RouteType
  path: string
  component: any
  exact: boolean
}

export const createRouteConfig = (
  routeType: RouteType,
  path: string,
  component: any,
  exact: boolean
): RouteConfig => ({
  routeType,
  path,
  component,
  exact,
})

export const formatPathByRouteConfig = (
  routeConfig: RouteConfig,
  payload: Record<string, string> = {}
) => {
  let formatPath = routeConfig.path
  for (const [key, value] of Object.entries(payload)) {
    const regex = new RegExp(`:${key}`, 'g')
    formatPath = formatPath.replace(regex, value)
  }
  return formatPath
}
