import React from 'react'
import './style/Footer.scss'

class Footer extends React.Component {
  render () {
    return (
      <div className='utility-belt-footer footer hidden-print'>
        <p>&copy; TM &copy; DC Comics. WB SHIELD: TM; Warner Bros. Entertainment. Inc. (s17). Copyright © 2017 DC Comics.
      All characters, their distinctive likenesses and related elements featured in this publication are trademarks of DC Comics.
      Their stories, characters and incidents featured in this publication are entirely fictional.</p>
        <p>Batman Miniature Game &copy;2008-2017 KNIGHT MODELS - All Rights Reserved.</p>
        <p>Bruce's Utility Belt &copy;2017 David Springer</p>
      </div>
    )
  }
}

export default Footer
