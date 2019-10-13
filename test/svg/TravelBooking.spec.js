import { shallowMount } from '@vue/test-utils'
import TravelBookingSvg from '@/components/svg/TravelBooking'

const factory = () => {
  return shallowMount(TravelBookingSvg)
}

describe('TravelBookingSvg', () => {
  it('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
