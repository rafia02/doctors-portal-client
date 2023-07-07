import React, { useContext} from 'react';
import { AuthContex } from '../../Context/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom'

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContex)
    const location = useLocation()
    
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }

    return children 
};

export default PrivetRoute;