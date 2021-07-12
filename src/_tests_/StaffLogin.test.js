import React from 'react';
import { shallow } from 'enzyme';
import StaffLogin from '../components/StaffLogin';
const setUp = (props = {}) => {
    const component = shallow(<StaffLogin {...props} />);
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

            email: 'shunottara99@gmail.com',

            password: 'Abcd@1234',
            role: 'ADMIN',

        };
        wrapper = setUp(props);
    });


    it('should render input tag', () => {
        const Input = findByTestAttr(wrapper, 'email');
        expect(Input.length).toBe(1);
    })
});

describe('<StaffLogin/>', () => {
    let props, wrapper

    beforeEach(() => {
        props = {
            handleFormSubmit: () => {
            },
        };
        wrapper = shallow(<StaffLogin {...props} />);
    });

    it('should have a `<Form>` element', () => {
        expect(
            wrapper.find('Form').length
        ).toBe(1);
    });

});

describe('Staff Login component tests', () => {
    const wrapper = shallow(<StaffLogin />);

    it('should have a btn btn-login component', () => {

        //There should be only one button
        expect(wrapper.find('Button')).toHaveLength(1);

        //Button should be of type submit
        wrapper.find('Button').simulate('submit');

    });
    it('should have an empty email and password state var', () => {
        //Optionally test to check if password and email are empty strings on 

        expect(wrapper.state('email')).toEqual('');
        expect(wrapper.state('password')).toEqual('');
    });
});