import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'

export const HomeView = () => (
  <div className='hidden-print'>
    <h4>Welcome!</h4>
    <p>
      The Rap Sheet Builder is a utility for the Batman Miniature game that
      allows players to create useful reference sheets for characters in their
      crew.
    </p>
    <Link to='/builder' activeClassName='route--active'>
      Open the Rap Sheet Builder
    </Link>
    <p />
    <Link to='/traits' activeClassName='route--active'>
      Open the Traits Browser
    </Link>
    <p />
    <Link to='/equipment' activeClassName='route--active'>
      Open the Equipment Browser
    </Link>
    <p />
    <Link to='/strategies' activeClassName='route--active'>
      Open the Strategy Browser
    </Link>
  </div>
)

export default HomeView
