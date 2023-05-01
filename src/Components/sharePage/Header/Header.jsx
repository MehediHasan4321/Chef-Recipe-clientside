import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'
const Header = () => {
    return (
        <div className=' bg-transparent bg-gray-400 h-20'>
            <div className='container mx-auto flex justify-between items-center h-full'>
                <h1 className='text-2xl font-semibold'>Foodist</h1>
                <div className=' flex gap-6 text-md font-semibold'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/blog'}>Blog</NavLink>
                    <NavLink><FaUserCircle style={{fontSize:'2rem'}}/> </NavLink>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;