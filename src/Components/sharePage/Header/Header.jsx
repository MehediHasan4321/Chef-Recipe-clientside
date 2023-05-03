import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const hanldeLogOut = () => {
        logOut()
    }
   setTimeout(()=>{setShow(false)},8000)
    return (
        <div className=' bg-transparent bg-gray-400 h-20'>
            <div className='container mx-auto flex justify-between items-center h-full relative'>
                <h1 className='text-2xl font-semibold'>Foodist</h1>
                <div className=' flex gap-6 items-center text-md font-semibold'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? ' text-amber-400' : 'text-black'}>Home</NavLink>
                    <NavLink to={'/blog'} className={({ isActive }) => isActive ? ' text-amber-400' : 'text-black'}>Blog</NavLink>
                    {
                        user ? user?.photoURL ? <img onClick={() => setShow(!show)} title={user?.displayName} className='w-10 h-10 border-[1px] rounded-full cursor-pointer' src={user?.photoURL} alt="Pic" /> : <div onClick={()=>setShow(!show)} title={user?.displayName} className=' cursor-pointer w-10 h-10 text-center rounded-full text-3xl border-2'>{user?.displayName?.slice(0, 1)}</div> : <NavLink to={'/logReg/login'}>Login </NavLink>
                    }


                </div>
                {
                    show && <div className='absolute w-80 h-80 bg-gray-200 top-[80px] right-0'>
                        <div className='px-4 mt-2 space-y-2'>
                            <img className='w-32 h-32 rounded-full mx-auto' src={user?.photoURL} alt=" User Images Not Found" />
                            <h1 className='text-xl text-center'>{user?.displayName}</h1>
                            {user?.email&&<h1 className='text-center font-semibold'>{user?.email}</h1>}
                        </div>
                        <button onClick={hanldeLogOut} className='absolute bottom-0 font-semibold p-2 bg-amber-400 text-white rounded w-full'>Logout</button>
                    </div>
                }
            </div>

        </div>
    );
};

export default Header;