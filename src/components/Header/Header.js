import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

/* This will eventually be a hamburgered, dynamic header for various
  utilities for the Batman Miniature Game. */
export const Header = () => (
  <div className='hidden-print app-header container'>
    <div className='welcome-message'>Batman Miniature Game Rap Sheet Builder</div>
  </div>
)

export default Header
