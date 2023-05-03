import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const hanldeLogOut = () => {
        logOut()
    }
    console.log('user', user?.displayName, user?.photoURL)
    return (
        <div className=' bg-transparent bg-gray-400 h-20'>
            <div className='container mx-auto flex justify-between items-center h-full'>
                <h1 className='text-2xl font-semibold'>Foodist</h1>
                <div className=' flex gap-6 items-center text-md font-semibold'>
                    <NavLink to={'/'} className={({isActive})=> isActive? ' text-amber-400':'text-black'}>Home</NavLink>
                    <NavLink to={'/blog'} className={({isActive})=> isActive? ' text-amber-400':'text-black'}>Blog</NavLink>
                    {
                        user ? user?.photoURL ? <img title={user.displayName} className='w-10 h-10 rounded-full cursor-pointer' src={user?.photoURL} alt="User Profile Pic" /> : <div title={user.displayName} className=' cursor-pointer w-10 h-10 text-center rounded-full text-3xl border-2'>{user?.displayName.slice(0, 1)}</div> : <NavLink to={'/logReg/login'}>Login </NavLink>
                    }
                    {/* <button onClick={hanldeLogOut} className='font-semibold p-2 bg-amber-400 text-white rounded'>Logout</button> */}

                </div>
            </div>
        </div>
    );
};

export default Header;