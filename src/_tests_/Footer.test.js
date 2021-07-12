import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/Footer';

describe('Footer Component', () => {

    it('Should render without errors', () => {
        const component = shallow(<Footer />);
        const wrapper = component.find('.footer-container');
        expect(wrapper.length).toBe(1);
    });

});