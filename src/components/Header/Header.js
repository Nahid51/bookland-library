import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='rounded text-center m-5 py-3 header'>
            <h3 className='fw-bold'>Collection of Books in <span className='budge'>My BookLand</span></h3>
            <p>You can buy books online with a few clicks. <br /> Create your own library and make yourself interested in reading books.</p>
            <h5 className='fw-bold budge'>Budge for Library: &#2547; 3000</h5>
        </div>
    );
};

export default Header;