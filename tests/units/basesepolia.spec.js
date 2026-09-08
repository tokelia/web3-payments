import { routers } from 'src'
import { supported } from 'src/blockchains'

describe('basesepolia', () => {

  it('is supported and has our router', () => {
    expect(supported).toContain('basesepolia')
    expect(supported.evm).toContain('basesepolia')
    expect(routers.basesepolia.address).toEqual('0x529f64d80b8AfA7E6bb522ecC8978Ff9220d4248')
    expect(routers.basesepolia.api).toEqual(routers.base.api)
  })
})
