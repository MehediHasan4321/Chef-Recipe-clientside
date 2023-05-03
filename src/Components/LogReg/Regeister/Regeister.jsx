import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import ThirdPartyLogin from '../ThirdPartyLogin/ThirdPartyLogin';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import { getAuth, updateProfile } from 'firebase/auth'
const Regeister = () => {
    const {singUpWithEmail} = useContext(AuthContext)
    const [error,setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const auth = getAuth()
    const from = location.state?.from?.pathname || '/'
    setTimeout(() => {
        setError('')
    }, 8000);
    const handleSignUp = e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        if(email === ''){
            setError('Plz Provide a Email')
            return
        }
        if(password.length < 6){
            setError('Your Password should be more than 6 charecter')
            return
        }
        singUpWithEmail(email,password)
        .then(()=>{
            toast('Your account created successfully')
            updateProfile(auth.currentUser,{
                displayName:name,photoURL:photoUrl
            })
            form.reset()
            navigate(from,{replace:true})
        
        })
        .catch(err=>{
            setError(err.message)
        })
    }
    return (
        <div className='container mx-auto w-full h-auto flex flex-col items-center py-8'>
            <form onSubmit={handleSignUp} className='border-2 border-[#ABABAB] rounded space-y-8 w-96 md:w-[570px] h-auto px-[55px] py-[37px] bg-white mt-32'>
                <h3 className='text-3xl font-semibold'>Create an account</h3>
                <input className=' w-full py-3 placeholder:text-black font-semibold text-md outline-none border-b-[1px] border-[#C5C5C5] ' type="text" name='name' placeholder='Enter Yor Name' />
                <input className=' w-full py-3 placeholder:text-black font-semibold text-md outline-none border-b-[1px] border-[#C5C5C5] ' type="email" name='email' placeholder='Username Or Email' />
                <input className=' w-full py-3 placeholder:text-black font-semibold text-md outline-none border-b-[1px] border-[#C5C5C5] ' type="password" name='password' placeholder='Passowrd' />
                <input className=' w-full py-3 placeholder:text-black font-semibold text-md outline-none border-b-[1px] border-[#C5C5C5] ' type="url" name='photoUrl' placeholder='Upload Your Profile Picture' />
                <button className='w-full bg-amber-400 py-3 text-lg font-semibold'>Create an account</button>
                <p className='text-center font-semibold'>Already have an account? <Link to={'/logReg/login'} className=' cursor-pointer text-amber-400 hover:text-amber-500 font-semibold underline'>Login</Link></p>
                {
                    error && <small className='text-red-500 text-center'>{error}</small>
                }
            </form>
            <Toaster/>
            <div>
               <ThirdPartyLogin/>
            </div>
        </div>
    );
};

export default Regeister;