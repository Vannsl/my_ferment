import { shallowMount } from '@vue/test-utils'
import HeroWaveSvg from '@/components/svg/HeroWave'

const factory = () => {
  return shallowMount(HeroWaveSvg)
}

describe('HeroWaveSvg', () => {
  it('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
