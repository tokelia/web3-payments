import fetchMock from 'fetch-mock'
import { config } from 'src'

export const ROUTES_BEST_URL = 'https://routes.test/best'
export const ROUTES_ALL_URL = 'https://routes.test/all'

const configureEndpoints = ()=>{
  config.endpoints.routesBest = ROUTES_BEST_URL
  config.endpoints.routesAll = ROUTES_ALL_URL
}

let mockBestRoute = ({ fromAccounts, accept, allow, deny, delay, route })=>{
  configureEndpoints()
  const body = { accounts: fromAccounts, accept }
  if(allow){ body.allow = allow }
  if(deny){ body.deny = deny }
  fetchMock.post({ url: ROUTES_BEST_URL, body, matchPartialBody: true, overwriteRoutes: true, delay }, route)
}

let mockAllRoutes = ({ fromAccounts, accept, allow, deny, delay, routes })=>{
  configureEndpoints()
  const body = { accounts: fromAccounts, accept }
  if(allow){ body.allow = allow }
  if(deny){ body.deny = deny }
  fetchMock.post({ url: ROUTES_ALL_URL, body, matchPartialBody: true, overwriteRoutes: true, delay }, routes)
}

export {
  mockBestRoute,
  mockAllRoutes,
}
