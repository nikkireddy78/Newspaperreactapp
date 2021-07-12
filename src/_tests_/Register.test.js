import React from 'react';
import { shallow } from 'enzyme';
import Register from '../components/Register';

const setUp = (props = {}) => {
    const component = shallow(<Register {...props} />);
    return component;
};

const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

describe('have props', () => {

    let wrapper;
    beforeEach(() => {
        const props = {
            custFirstName: 'Shunottara',
            custLastName: 'Sarade',
            custEmail: 'shunottara99@gmail.com',
            custMobile: '7788552211',
            custPassword: 'Abcd@123'


            //  errors: {'please enter valid email Id'}   
        };
        wrapper = setUp(props);
    });
    it('should render Register component without errors', () => {
        const component = findByTestAttr(wrapper, 'Register');
        expect(component.length).toBe(1);
    });
});

describe('<Register/>', () => {
    let props, wrapper

    beforeEach(() => {
        props = {
            handleFormSubmit: () => {
            },
        };
        wrapper = shallow(<Register {...props} />);
    });

    it('should have a `<Form>` element', () => {
        expect(
            wrapper.find('Form').length
        ).toBe(1);
    });

});

describe('Register component tests', () => {
    const wrapper = shallow(<Register />);

    it('should have a btn btn-register component', () => {

        //There should be only one button
        expect(wrapper.find('Button')).toHaveLength(1);

        //Button should be of type submit
        wrapper.find('Button').simulate('submit');

    });
    it('should have an empty email and password state var', () => {
        //Optionally test to check if password and email are empty strings on 

        expect(wrapper.state('custEmail')).toEqual('');
        expect(wrapper.state('custPassword')).toEqual('');
    });
});