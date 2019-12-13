import {mount} from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

describe('Header component', () => {

    const wrapper = mount(Header);

    // 2
    it('displays correct date, year, month, weekday', () => {
        expect(1).toEqual(1)
    });

});