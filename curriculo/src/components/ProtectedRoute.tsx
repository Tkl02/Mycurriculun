import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
    redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({redirectPath = '/Login'}) =>{
    const isAuthenticated = localStorage.getItem('authToken');

    if(!isAuthenticated){
        return<Navigate to={redirectPath} replace/>;
    }
    return <Outlet/>;
};

export default ProtectedRoute;