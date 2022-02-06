import { mount } from '@vue/test-utils'
import Home from "../../../modules/home/Home.vue"

describe('Home', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Home)
  });

  it('should exists', () => {
    expect(wrapper.exists()).toBe(true)
  });
});