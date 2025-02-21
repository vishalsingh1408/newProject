import React from 'react'
import { getCookie } from '../utils/Utils'
import { Navigate, Outlet } from 'react-router-dom';
function ProtectedRoutes() {
 const isAuthenticated =getCookie('isAuthenticated');
 if(!isAuthenticated){
    return <Navigate to = '/'/>    
 }

 return(
    <Outlet/>
 )
}

export default ProtectedRoutes