import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {

    it('Should render without errors', () => {
        const component = shallow(<Navbar />);
        const wrapper = component.find('.navbar');
        expect(wrapper.length).toBe(1);
    });

});