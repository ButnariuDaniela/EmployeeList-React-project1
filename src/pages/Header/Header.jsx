import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/images/logo.png'


function Header(props) {
    return (
        <header className="mb-3 w-100">
            <div className="border-bottom  container-fluid d-flex justify-content-between align-items-center display-1">
                <Link to='/'>
                    <img width='100px' src={Logo} alt='Dynamic'></img>
                </Link>
                <h1 className='display-1 mx-auto'>INCARCARE DINAMICA</h1>
            </div>
        </header>
    );
}


export default Header;