import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../sharePage/Spinner/Spinner';

const Protectedroute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()


    if (loading) {
        return <Spinner/>
    }
    if (user) {
        return children
    }

    return <Navigate to={'/logReg/login'} state={{ from : location }} replace ></Navigate>
};

export default Protectedroute;