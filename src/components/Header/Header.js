import React from 'react'
import './style/Header.scss'
import { slide as Menu } from 'react-burger-menu'

/* This will eventually be a hamburgered, dynamic header for various
utilities for the Batman Miniature Game. */
class Header extends React.Component {
  render () {
    return (
      <div className='hidden-print app-header container'>
        <Menu>
          <a id='home' className='menu-item' href='/'>Home</a>
          <a id='builder' className='menu-item' href='/builder'>Rap Sheet Builder</a>
          <a id='strategies' className='menu-item' href='/strategies'>Strategies Browser</a>
        </Menu>
        <div className='welcome-message'>Bruce's Utility Belt</div>
      </div>
    )
  }
}

export default Header
