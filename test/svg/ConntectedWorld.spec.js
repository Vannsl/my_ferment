import { shallowMount } from '@vue/test-utils'
import ConntectedWorldSvg from '@/components/svg/ConntectedWorld'

const factory = () => {
  return shallowMount(ConntectedWorldSvg)
}

describe('ConntectedWorldSvg', () => {
  it('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
