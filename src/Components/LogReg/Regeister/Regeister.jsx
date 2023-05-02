import React from 'react';
import { Link } from 'react-router-dom';
import ThirdPartyLogin from '../ThirdPartyLogin/ThirdPartyLogin';
const Regeister = () => {
    const handleSignUp = e=>{

    }
    return (
        <div className='container mx-auto w-full h-auto flex flex-col items-center py-8'>
            <form onSubmit={handleSignUp} className='border-2 border-[#ABABAB] rounded space-y-8 w-[570px] h-auto px-[55px] py-[37px] bg-white mt-32'>
                <h3 className='text-3xl font-semibold'>Create an account</h3>
                <input className=' w-full py-3 placeholder:text-black font-semibold text-md outline-none border-b-[1px] border-[#C5C5C5] ' type="text" name='firstName' placeholder='Enter Yor Name' />
                <input className=' w-full py-3 placeholder:text-black font-semibold text-md outline-none border-b-[1px] border-[#C5C5C5] ' type="email" name='email' placeholder='Username Or Email' />
                <input className=' w-full py-3 placeholder:text-black font-semibold text-md outline-none border-b-[1px] border-[#C5C5C5] ' type="password" name='password' placeholder='Passowrd' />
                <input className=' w-full py-3 placeholder:text-black font-semibold text-md outline-none border-b-[1px] border-[#C5C5C5] ' type="password" name='conformPassword' placeholder='Confrim Passowrd' />
                <button className='w-full bg-amber-400 py-3 text-lg font-semibold'>Create an account</button>
                <p className='text-center font-semibold'>Already have an account? <Link to={''} className=' cursor-pointer text-amber-400 hover:text-amber-500 font-semibold underline'>Login</Link></p>
            </form>
            <div>
               <ThirdPartyLogin/>
            </div>
        </div>
    );
};

export default Regeister;