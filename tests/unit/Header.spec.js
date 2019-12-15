import {mount} from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

describe('Header component', () => {

    const wrapper = mount(Header);
    let today = new Date();

    // 2
    it('displays correct date', () => {
        expect(wrapper.vm.day).toEqual(today.getDate())
    });

    it('displays correct year', () => {
        expect(wrapper.vm.year).toEqual(today.getFullYear())
    });

    it('displays correct month', () => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        expect(wrapper.vm.month).toEqual(months[today.getMonth()])
    });

    it('displays correct weekday', () => {
        let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        expect(wrapper.vm.weekday).toEqual(weekdays[today.getDay()])
    });

});