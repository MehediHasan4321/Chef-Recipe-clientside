import React, { useContext } from 'react';
import googleLogo from '../../../assets/googleLogo.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
const ThirdPartyLogin = () => {
    const { singUpWithGoogle, singUpWithGitHub } = useContext(AuthContext)
   
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const googleLogin = () => {
        singUpWithGoogle()
            .then(() => {
                toast.success("Login successfull")
                navigate(from, {replace:true})
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    const githubLogin = ()=>{
        singUpWithGitHub()
        .then(()=>{
            toast.success('Login With Github Successful')
            navigate(from,{replace:true})
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    return (
        <div className='container mx-auto mb-12 space-y-5 w-96 md:w-full'>
            <div className=' flex items-center gap-3 mt-8'>
                <hr className=' border-[1px] border-[#C5C5C5] w-[200px]' /> <p className='text-lg font-semibold'>Or</p> <hr className=' border-[1px] border-[#C5C5C5] w-[200px]' />
            </div>
            <div onClick={githubLogin} className='flex w-full items-center border-2 rounded-3xl py-2 px-1 cursor-pointer'>
                <img className='mr-32 w-8' src='https://cdn.freebiesupply.com/logos/large/2x/github-icon-logo-png-transparent.png' alt="GitHub Logo" />
                <p className='text-md font-semibold'>Continue with GitHub</p>
            </div>
            <div onClick={googleLogin} className='flex w-full items-center border-2 rounded-3xl py-2 px-1 cursor-pointer'>
                <img className='mr-32' src={googleLogo} alt="google Logo" />
                <p className='text-md font-semibold'>Continue with Google</p>
            </div>
            <Toaster position="top-right"/>
        </div>
    );
};

export default ThirdPartyLogin;