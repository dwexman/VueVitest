import { mount } from '@vue/test-utils';
import ContactView from '../../../src/views/ContactView.vue';

describe('ContactView.vue', () => {
  it('renders the Contact page', () => {
    const wrapper = mount(ContactView);
    expect(wrapper.text()).toContain('Contact Page');
    expect(wrapper.text()).toContain('This is the Contact page!');
  });

  it('matches the snapshot', () => {
    const wrapper = mount(ContactView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
