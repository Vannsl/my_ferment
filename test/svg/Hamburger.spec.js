import { shallowMount } from '@vue/test-utils'
import HamburgerSvg from '@/components/svg/Hamburger'

const factory = () => {
  return shallowMount(HamburgerSvg)
}

describe('HamburgerSvg', () => {
  it('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
