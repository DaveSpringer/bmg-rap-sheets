import React from 'react'
import './style/Header.scss'
import { Link } from 'react-router'
import { slide as Menu } from 'react-burger-menu'

/* This will eventually be a hamburgered, dynamic header for various
utilities for the Batman Miniature Game. */
class Header extends React.Component {
  render () {
    return (
      <div className='hidden-print app-header container'>
        <Menu>
          <Link id='home' className='menu-item' to='/'>Home</Link>
          <Link id='builder' className='menu-item' to='/builder'>Rap Sheet Builder</Link>
          <Link id='strategies' className='menu-item' to='/strategies'>Strategies Browser</Link>
        </Menu>
        <div className='welcome-message'>Bruce's Utility Belt</div>
      </div>
    )
  }
}

export default Header
