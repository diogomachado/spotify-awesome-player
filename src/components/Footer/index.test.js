import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

describe("<Footer />", () => {
    it('should have the element rendered', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('footer')).toHaveLength(1);
    })
});