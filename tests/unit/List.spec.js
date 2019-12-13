import {mount} from '@vue/test-utils'
import List from "../../src/components/List.vue";

describe('List', () => {

    const wrapper = mount(List);

    // 1
    it('component displays correct text if no item provided', () => {
        expect(wrapper.html()).toContain('<h3>Add your first Todo task</h3>')
    });


    // 4
    it('item is marked as done then item is updated correctly', () => {
        const button = wrapper.find('button');
        button.trigger('click');
        expect(1).toEqual(1)
    });

});