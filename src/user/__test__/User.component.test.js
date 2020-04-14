import React from 'react';
import { shallow } from 'enzyme'

import User from './../User.component';


describe('Homepage Test', () => {
    it('should render snapshot test for user', () => {
    	let props = {navigation: {state: {params: { userType: 'anonymous' }}}}
    	const wrapper = shallow(<User {...props}/>)
        expect(wrapper).toMatchSnapshot()
    })

    it('should simulate & render avatar if avatar is exist ', () => {
    	let props = {navigation: {state: {params: { userType: 'professional' }}}}
    	const wrapper = shallow(<User {...props}/>)
        expect(wrapper.find('Image').exists()).toBe(true)
    })

    it('should render empty when avatar is empty ', () => {
    	let props = {navigation: {state: {params: { userType: 'anonymous' }}}}
    	const wrapper = shallow(<User {...props}/>)
        expect(wrapper.find('Image').exists()).toBe(false)
    })

})