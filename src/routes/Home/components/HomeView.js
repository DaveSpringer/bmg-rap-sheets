import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'

export const HomeView = () => (
  <div className='hidden-print'>
    <h4>Welcome!</h4>
    <p>
      Bruce's Utility Belt is a collection of tools for the Batman Miniature
      Game. It is intended to be a resource to help players get into BMG faster,
      and to have a better experience while playing.
    </p>
    <Link to='/builder' activeClassName='route--active'>
      Open the Rap Sheet Builder
    </Link>
    - A clever way to make cheat sheets for your BMG characters.
    <p />
    <Link to='/traits' activeClassName='route--active'>
      Open the Traits Browser
    </Link>
    - Search for traits you care about and print them for reference.
    <p />
    <Link to='/equipment' activeClassName='route--active'>
      Open the Equipment Browser
    </Link>
    - Look through the equipment for all crews in the game.
    <p />
    <Link to='/strategies' activeClassName='route--active'>
      Open the Strategy Browser
    </Link>
    - Browse all strategies and print helpful reference sheets.
  </div>
)

export default HomeView
