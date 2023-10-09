import { Navigate, useLocation } from "react-router-dom"
import Loader from "../pages/Shared/Loader"
import React from 'react';
import { useInstructor } from "../Hooks/useInstructor";
import { useAuth } from "../Hooks/useAuth";

const InstructorRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation()

    if(loading || isInstructorLoading){
        return <Loader/>
    }

    if(user && isInstructor){
        return children
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
}

export default InstructorRoute;
