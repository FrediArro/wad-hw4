import {mount} from '@vue/test-utils'
import List from "../../src/components/List.vue";


describe('List', () => {

    const wrapper = mount(List);

    // 1
    it('component displays correct text if no item provided', () => {
        if(wrapper.vm.sortedList.length === 0) {
            expect(wrapper.html()).toContain('<h3>Add your first Todo task</h3>');
        }
    });


    // 4
    it('item is marked as done then item is updated correctly', () => {
        const sortedList = wrapper.vm.sortedList;
        if (sortedList.length > 0) {
        const task = sortedList[0];
        const status = task.done;
        const button = wrapper.find("span:first-of-type");
        button.trigger("click");
        expect(task.done).toBe(!status);
        }
    });

});