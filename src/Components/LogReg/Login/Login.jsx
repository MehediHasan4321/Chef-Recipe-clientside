import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThirdPartyLogin from '../ThirdPartyLogin/ThirdPartyLogin';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import { FaEye } from 'react-icons/fa'
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [type,setType] = useState('password')
    setTimeout(() => { setError('') }, 8000)
    const from = location.state?.from?.pathname || '/'
    const handleLogIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        signIn(email, password)
            .then((user) => {
                form.reset()
                toast.success('You are login successfully')
                navigate(from, { replace: true })

            })
            .catch(err => {
                setError(err.message)
            })
    }
    return (
        <div className='container mx-auto w-full flex flex-col justify-center items-center'>
            <div className='border-2 border-[#ABABAB] rounded w-96 md:w-[570px] h-auto px-[55px] py-[37px] bg-white mt-32'>
                <h3 className='text-3xl font-semibold'>Login Your Account</h3>
                <form className=' space-y-8 my-4' onSubmit={handleLogIn}>
                    <input className=' w-full py-3 placeholder:text-black font-semibold text-md outline-none border-b-[1px] border-[#C5C5C5] ' type="email" name='email' placeholder='Username Or Password' />
                    <div className='relative'>
                        <input className=' w-full py-3 placeholder:text-black font-semibold text-md outline-none border-b-[1px] border-[#C5C5C5] ' type={type} name='password' placeholder='Passowrd' />
                        <FaEye onClick={()=>type === 'password' ? setType('text') : setType('password')} className=' absolute cursor-pointer right-0 top-4'/>
                    </div>
                    <div className='flex justify-between items-center'>
                        <label htmlFor="checkobx" className='font-semibold'>
                            <input type="checkbox" name="checkbod" id="checkbod" className='mr-3' />
                            Remember Me
                        </label>
                        <p className=' cursor-pointer text-amber-400 hover:text-amber-500 text-lg font-semibold underline' >Forget Passowrd</p>
                    </div>
                    <button className='w-full bg-amber-400 py-3 text-lg font-semibold'>Login</button>
                    <Toaster position="top-right" />
                </form>



                <p className='text-center font-semibold '>Don't have an account? <Link to={'/logReg/regeister'} className=' cursor-pointer text-amber-400 hover:text-amber-500  font-semibold underline'>Create an account</Link></p>
                {error && <small className='text-red-500 text-center'>{error}</small>}
            </div>
            <div>
                <ThirdPartyLogin />
            </div>
        </div>
    );;
};

export default Login;