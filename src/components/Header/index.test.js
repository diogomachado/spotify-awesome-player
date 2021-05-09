import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe("<Header/>", () => {

    it('should have input element to search', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('input[name="search"]')).toHaveLength(1);
    })

    it('should have input element to search with a icon', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('.header-search i.header-search-icon')).toHaveLength(1);
    })
});