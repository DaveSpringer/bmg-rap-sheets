import React from 'react'
import { Header } from 'components/Header/Header'
import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })

  // it('Renders a welcome message', () => {
  //   const welcome = _wrapper.find('.welcome-message')
  //   expect(welcome).to.exist
  //   expect(welcome.text()).to.match(/Bruce's Utility Belt/)
  // })

})
