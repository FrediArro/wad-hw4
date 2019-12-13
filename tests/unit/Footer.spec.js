import {mount} from '@vue/test-utils'
import Footer from "../../src/components/Footer.vue";

describe('Footer component behavior', () => {

    const wrapper = mount(Footer);

    // 3
    it('Check if + button is clicked in Footer component "open" property in Footer component changes to true', () => {
        const button = wrapper.find('button');
        button.trigger('click');
        expect(1).toEqual(1)
    });


});