import { shallowMount } from '@vue/test-utils'
import LogoSvg from '@/components/svg/Logo'

const factory = () => {
  return shallowMount(LogoSvg)
}

describe('LogoSvg', () => {
  it('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
