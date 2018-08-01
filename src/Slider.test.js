import React from 'react'
import Slider from 'Slider'
import {shallow, mount} from 'enzyme'

describe('Slider', () => {
  it('should render without throwing', () => {
    expect(shallow(<Slider />).not.to.throw();
  })
})
