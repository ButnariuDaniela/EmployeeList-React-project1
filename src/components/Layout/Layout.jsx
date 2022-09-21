import React from 'react'
import Footer from '../../pages/Footer/Footer'
import './Layout.css';

function Layout(props) {
  return (
    <div className='layout'>
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
