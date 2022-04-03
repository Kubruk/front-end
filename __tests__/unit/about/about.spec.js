import { mount } from '@vue/test-utils';
import About from '@about/AboutPage.vue';

describe('About', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(About);
  });

  it('should exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
