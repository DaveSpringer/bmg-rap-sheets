import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'

export const HomeView = () => (
  <div className='hidden-print'>
    <h4>Welcome!</h4>
    <p>
      Bruce\'s Utility Belt is a collection of tools for the Batman Miniature
      Game. It is intended to be a resource to help players get into BMG faster,
      and to have a better experience while playing.
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
