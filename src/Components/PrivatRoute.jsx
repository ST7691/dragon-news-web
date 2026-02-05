import React, { use } from 'react'
import { AuthContext } from '../Provider/Context';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivatRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    const location = useLocation();
    // console.log(location)
    // loading ------------
    if(loading){
        return <Loading></Loading>
    }
    // ------if user ---------
    if(user && user?.email){
         return children;
    }
 return <Navigate state={location.pathname} to= '/auth/login'></Navigate>
//   navigate > login -------------
}

export default PrivatRoute