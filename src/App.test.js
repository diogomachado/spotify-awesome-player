import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe("test initial page without logged", () => {
    it('should have <a> link to login', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('a')).toHaveLength(1);
    })

    it('should the link <a> to have a description Sign account', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('a').get(0).props.children).toBe("Sign account");
    })
});