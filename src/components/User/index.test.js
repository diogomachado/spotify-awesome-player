import React from 'react';
import { shallow } from 'enzyme';
import User from './index';

describe("<User/>", () => {
    it("should have img tag defined", () => {
        const wrapper = shallow(<User />);
        expect(wrapper.find('img')).toHaveLength(1);
    })

    it("should have <img/> has a src defined", () => {
        const wrapper = shallow(<User />);
        expect(wrapper.find('img').first().getElement().props.src).toBeDefined();
    })

    it("should have <img/> has the class .user-wrapper", () => {
        const wrapper = shallow(<User />);
        expect(wrapper.find('.user-wrapper')).toHaveLength(1);
    })

    describe('Events tests', () => {
        it("should to show menu contextual when hover the mouse", () => {
            const wrapper = shallow(<User />);
            wrapper.simulate('mouseEnter');
            expect(wrapper.find('._opened')).toHaveLength(1);
        })

        it("should not show menu contextual when leave mouse", () => {
            const wrapper = shallow(<User />);
            wrapper.simulate('mouseLeave');
            expect(wrapper.find('._opened')).toHaveLength(0);
        })
    })
})