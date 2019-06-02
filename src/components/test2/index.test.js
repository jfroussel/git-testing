import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../../Utils' 
import Test2 from './index'

const setUp = (props={}) => {
    const component = shallow(<Test2 {...props} />)
    return component
}



describe('Test2 component', () => {

    let component = setUp()
    beforeEach(() => {
        component = setUp()
    })
    it('Should render component without errors', () => {
        const wrapper = findByTestAttr(component, 'test2Component')
        expect(wrapper.length).toBe(1)
    })
})