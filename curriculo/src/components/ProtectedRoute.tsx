import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface ProtectedRouteProps {
    redirectPath?: string;
}
interface JwtPayload{
    exp: number;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectPath = '/Login' }) => {
    const token = localStorage.getItem('authToken');

    const isTokenValid = (token: string | null): boolean => {
        if (!token) {
            return false;
        }
        try {

            const decodedToken = jwtDecode<JwtPayload>(token);
            const currentTime = Date.now() / 1000;

            if (decodedToken.exp < currentTime) {
                console.warn('Token expirado');
                localStorage.removeItem('authToken');
                return false;
            }
            return true;
        } catch (error) {
            console.error('Erro ao decodificar ou validar token:', error);
            localStorage.removeItem('authToken');
            return false;
        }
    };
    if (!isTokenValid(token)) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
};

export default ProtectedRoute;