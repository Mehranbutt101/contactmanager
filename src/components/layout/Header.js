import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    return(
        <nav className='navbar navbar-expand-sm
        navbar-dark bg-danger mb-3 py-0'>
            <div className='container'>
                <Link to='/' className='navbar-brand'>
                    Contact Manager
                </Link>
                <div>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>
                                <i className='fas fa-home' /> Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact/add' className='nav-link'>
                                <i className='fas fa-plus' /> Add</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-link'>
                                <i className='fas fa-info-circle' /> About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        
    );

}

export default Header