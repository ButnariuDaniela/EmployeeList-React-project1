import React from 'react'
import Footer from '../pages/Footer'

function Layout(props) {
  return (
    <div>
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
