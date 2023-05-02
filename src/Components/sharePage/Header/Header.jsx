import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const hanldeLogOut = ()=>{
        logOut()
    }
    return (
        <div className=' bg-transparent bg-gray-400 h-20'>
            <div className='container mx-auto flex justify-between items-center h-full'>
                <h1 className='text-2xl font-semibold'>Foodist</h1>
                <div className=' flex gap-6 text-md font-semibold'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/blog'}>Blog</NavLink>
                    {
                        user ? <button onClick={hanldeLogOut} className='font-semibold p-2 bg-amber-400 text-white rounded'>Logout</button> :
                        <NavLink to={'/logReg/login'}><FaUserCircle style={{fontSize:'2rem'}}/> </NavLink>
                    }
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Header;