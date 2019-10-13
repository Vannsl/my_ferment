import { shallowMount } from '@vue/test-utils'
import CallToActionWaveSvg from '@/components/svg/CallToActionWave'

const factory = () => {
  return shallowMount(CallToActionWaveSvg)
}

describe('CallToActionWaveSvg', () => {
  it('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
