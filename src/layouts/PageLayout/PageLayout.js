import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <div className='page-layout__viewport'>
      {children}
    </div>
    <Footer />
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout
