import React from 'react';
import { shallow } from 'enzyme';
import Controls from './index';

describe("<Controls />", () => {
    it('should have the element rendered', () => {
        const wrapper = shallow(<Controls />);
        expect(wrapper.find('.controls-wrapper')).toHaveLength(1);
    })
});