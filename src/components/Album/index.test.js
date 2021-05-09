import React from 'react';
import { shallow } from 'enzyme';
import Album from './index';

describe("<Album/>", () => {

    // Mock
    const item = {
        id: 123,
        images: [
            {
                url: "https://picsum.photos/536/354"
            }
        ],
        tracks: {
            total: 10
        }
    }

    it('should have component instance', () => {
        const wrapper = shallow(<Album album={item}/>);
        expect(wrapper.find('button')).toHaveLength(1);
    })

    it('should have p with class .btn-album-info-title', () => {
        const wrapper = shallow(<Album album={item}/>);
        expect(wrapper.find('p.btn-album-info-title')).toHaveLength(1);
    })

    it('should have p with class .btn-album-info-track-number', () => {
        const wrapper = shallow(<Album album={item}/>);
        expect(wrapper.find('p.btn-album-info-track-number')).toHaveLength(1);
    })
});