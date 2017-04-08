import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import { IndexLink, Link } from 'react-router'
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
  </div>
)

export default HomeView
