import React from 'react';
import { shallow } from 'enzyme';
import Progress from '../Progress';

describe("<Progress/>", () => {
    it('should have component instance', () => {
        const wrapper = shallow(<Progress />);
        expect(wrapper.find('progress')).toHaveLength(1);
    })

    it('should have value passed', () => {
        const wrapper = shallow(<Progress value="20"/>);
        expect(wrapper.find('progress').props().value).toBeDefined();
    })

    it('should have a max value defined', () => {
        const wrapper = shallow(<Progress value="20"/>);
        expect(wrapper.find('progress').props().max).toBeDefined();
    })

    it('should have a max value defined and be 100%', () => {
        const wrapper = shallow(<Progress value="20"/>);
        expect(wrapper.find('progress').props().max).toEqual("100");
    })
})