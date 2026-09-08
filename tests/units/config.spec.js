import { config, route } from 'src'

describe('config.endpoints', () => {

  afterEach(() => {
    config.endpoints.routesBest = undefined
    config.endpoints.routesAll = undefined
  })

  it('has no default routes endpoints', () => {
    expect(config.endpoints.routesBest).toEqual(undefined)
    expect(config.endpoints.routesAll).toEqual(undefined)
  })

  it('route rejects when endpoints are not configured', async () => {
    await expect(route({ accept: [], from: {} })).rejects.toThrow('No routes endpoint configured')
  })

  it('route rejects when only one endpoint is configured', async () => {
    config.endpoints.routesBest = 'https://api.test/routes/best'
    await expect(route({ accept: [], from: {} })).rejects.toThrow('No routes endpoint configured')
  })
})
