import React from 'react'
import Footer from '../../pages/Footer/Footer';
import Header from '../../pages/Header/Header';
import './Layout.css';

function Layout(props) {
  return (
    <div className='layout'>
      <Header/>
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
