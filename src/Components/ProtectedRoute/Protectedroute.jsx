import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Protectedroute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()


    if (loading) {
        return <div className='container mx-auto flex justify-center my-8'>
            <span className=' text-center  bg-amber-400 font-semibold'>Loading ......</span>
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate to={'/logReg/login'} state={{ from : location }} replace ></Navigate>
};

export default Protectedroute;