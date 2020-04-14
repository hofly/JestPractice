import React from 'react';
import { shallow } from 'enzyme'
import TestRenderer from "react-test-renderer";

import Homepage from './../Homepage.component';

describe('Homepage Test', () => {
    it('should render snapshot test for homepage', () => {
        // const wrapper = TestRenderer.create(<Homepage />).toJSON();
        // expect(wrapper).toMatchSnapshot()

        const wrapper = shallow(<Homepage />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should show state as message expect when mount component', () => {
        const wrapper = shallow(<Homepage />)
        console.log(wrapper.state())
        expect(wrapper.state().title).toBe('Welcome to user board')
    })

    it('should navigate to anonymous users', () => {
        let props = {navigation: {navigate: jest.fn()}}

        const wrapper = shallow(<Homepage {...props}/>)

        // const instance = wrapper.instance()

        // const spy=jest.spyOn(instance, 'navigateToAnonymousUser')
        // instance.forceUpdate(); //call forceUpdate to attach the spy function to the instance

        wrapper.find('TouchableOpacity').at(0).simulate('press')

        // expect(spy).toBeCalled()

        expect(props.navigation.navigate).toBeCalledWith('user', { userType: 'anonymous' })
    })

    it('should turn trial version when navigating to anonymous user', () => {
        let props = {navigation: {navigate: jest.fn()}}
        const wrapper = shallow(<Homepage {...props}/>)
        wrapper.find('TouchableOpacity').at(0).simulate('press')
        console.log(wrapper.state())
        expect(wrapper.state().isTrial).toBe(true)
    })

    it('should navigate to professional users', () => {
        let props = {navigation: {navigate: jest.fn()}}
        const wrapper = shallow(<Homepage {...props}/>)
        wrapper.find('TouchableOpacity').at(1).simulate('press')
        expect(props.navigation.navigate).toBeCalledWith('user', { userType: 'professional' })
    })

    it('should navigate to premium users', () => {
        let props = {navigation: {navigate: jest.fn()}}
        const wrapper = shallow(<Homepage {...props}/>)
        wrapper.find('TouchableOpacity').at(2).simulate('press')
        expect(props.navigation.navigate).toBeCalledWith('user', { userType: 'premium' })
    })
})