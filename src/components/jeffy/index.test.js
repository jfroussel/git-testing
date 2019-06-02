import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../../Utils'
import Jeffy from './index'

const setUp = (props={}) => {
    const component = shallow(<Jeffy {...props} />)
    return component
}

describe('Jeffy component', () => {

    let component = setUp()
    
    beforeEach(() => {
        component = setUp()
    })

    it('Should render component without errors', () => {
        const wrapper = findByTestAttr(component, 'jeffyComponent')
        expect(wrapper.length).toBe(1)
        
    })
    it('Should render a title div', () => {
        const wrapper = findByTestAttr(component, 'title')
        expect(wrapper.length).toBe(1)
        
    })
   
})