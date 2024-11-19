import { mount } from '@vue/test-utils';
import AboutView from '../../../src/views/AboutView.vue';

describe('AboutView.vue', () => {
  it('renders the About page', () => {
    const wrapper = mount(AboutView);
    expect(wrapper.text()).toContain('About Page');
    expect(wrapper.text()).toContain('This is the About page!');
  });

  it('matches the snapshot', () => {
    const wrapper = mount(AboutView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
