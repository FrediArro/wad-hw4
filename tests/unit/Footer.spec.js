import {mount} from '@vue/test-utils'
import Footer from "../../src/components/Footer.vue";

describe('Footer component', () => {

    const wrapper = mount(Footer);

    // 3
    it('"open" property changes to true if "+" button is clicked', () => {

        // Check that componenet is in correct state
        expect(wrapper.vm.open).toBe(false);

        // Should add an id or class for the task adding span if in the future there are more than one <span>-s in Footer
        const button = wrapper.find('span');
        button.trigger('click');
        expect(wrapper.vm.open).toBe(true);
    });


});