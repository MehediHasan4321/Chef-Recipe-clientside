import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import ThirdPartyLogin from '../ThirdPartyLogin/ThirdPartyLogin';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location =  useLocation()
    const navigate =  useNavigate()
    const from = location.state?.from?.pathName || '/'
    const handleLogIn = e=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        signIn(email,password)
        .then(()=>{
            form.reset()
            alert('You are Login successfull')
            navigate(from,{replace:true})
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    return (
        <div className='container mx-auto w-full flex flex-col justify-center items-center'>
            <div className='border-2 border-[#ABABAB] rounded w-[570px] h-auto px-[55px] py-[37px] bg-white mt-32'>
                <h3 className='text-3xl font-semibold'>Login Your Account</h3>
                <form className=' space-y-8 my-4' onSubmit={handleLogIn}>
                    <input className=' w-full py-3 placeholder:text-black font-semibold text-md outline-none border-b-[1px] border-[#C5C5C5] ' type="email" name='email' placeholder='Username Or Password' />
                    <input className=' w-full py-3 placeholder:text-black font-semibold text-md outline-none border-b-[1px] border-[#C5C5C5] ' type="password" name='password' placeholder='Passowrd' />
                    <div className='flex justify-between items-center'>
                        <label htmlFor="checkobx" className='font-semibold'>
                            <input type="checkbox" name="checkbod" id="checkbod" className='mr-3' />
                            Remember Me
                        </label>
                        <p className=' cursor-pointer text-amber-400 hover:text-amber-500 text-lg font-semibold underline' >Forget Passowrd</p>
                    </div>
                    <button className='w-full bg-amber-400 py-3 text-lg font-semibold'>Login</button>
                </form>
                <p className='text-center font-semibold '>Don't have an account? <Link to={'/logReg/regeister'} className=' cursor-pointer text-amber-400 hover:text-amber-500  font-semibold underline'>Create an account</Link></p>
            </div>
            <div>
            <ThirdPartyLogin/>
            </div>
        </div>
    );;
};

export default Login;