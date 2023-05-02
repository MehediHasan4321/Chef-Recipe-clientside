import React, { useContext } from 'react';
import googleLogo from '../../../assets/googleLogo.png'
import githubLogo from '../../../assets/githubLogo.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
const ThirdPartyLogin = () => {
    const {singUpWithGoogle} = useContext(AuthContext)
    const googleLogin = ()=>{
        singUpWithGoogle()
        .then(()=>{
            alert("Login successfull")
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    return (
        <div className='container mx-auto mb-12 space-y-5'>
             <div className=' flex items-center gap-3 mt-8'>
                <hr className=' border-[1px] border-[#C5C5C5] w-[200px]'/> <p className='text-lg font-semibold'>Or</p> <hr className=' border-[1px] border-[#C5C5C5] w-[200px]' />
            </div>
            <div className='flex w-full items-center border-2 rounded-3xl py-2 px-1'>
                <img  className='mr-32 w-8'  src='https://cdn.freebiesupply.com/logos/large/2x/github-icon-logo-png-transparent.png' alt="GitHub Logo" />
                <p className='text-md font-semibold'>Continue with GitHub</p>
            </div>
            <div onClick={googleLogin} className='flex w-full items-center border-2 rounded-3xl py-2 px-1'>
                <img className='mr-32' src={googleLogo} alt="google Logo" />
                <p className='text-md font-semibold'>Continue with Google</p>
            </div>
        </div>
    );
};

export default ThirdPartyLogin;