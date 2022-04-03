import { mount } from '@vue/test-utils';
import Home from '@home/HomePage.vue';

describe('Home', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Home);
  });

  it('should exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
