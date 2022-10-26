import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <footer className='footer bg-light fs-3'>
      <Link to="/about">Despre proiect ...</Link>
    </footer>
  )
}

export default Footer
