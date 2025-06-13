import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import api from "../services/api";
import { jwtDecode } from "jwt-decode";

interface ProtectedRouteProps{
    redirectPath?: string;
}

interface jwtPayload {
    exp: number;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({redirectPath = '/login'}) =>{
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        const verifyToken = async () =>{
            const token = localStorage.getItem('authToken');

            if(!token){
                setAuthenticated(false);
                setloading(false);
                return;
            }

            try {

                const decodedToken = jwtDecode<jwtPayload>(token);
                const currentTime = Date.now() / 1000;
                
                if(decodedToken.exp <= currentTime){
                    console.warn('Token expirado localmente. Redirecioando para Login')
                    localStorage.removeItem('authToken');
                    setAuthenticated(false);
                    setloading(false);
                    return;
                }
            } catch (decodeerro) {
                console.error('Erro ao decodificar o token (local). Redirecioando para Login');
                localStorage.removeItem('authToken');
                setAuthenticated(false);
                setloading(false);
                return;
            }

            try {
                await api.get('/auth/verify');
                setAuthenticated(true);
            } catch (apiErro: any) {
                console.error('Token invalodo no backend', apiErro);
                localStorage.removeItem('authToken');
                setAuthenticated(false)
            } finally{
                setloading(false);
            }
            
            };
            verifyToken();
        },[]);

    if(loading){
        return <>Verificando Token . . .</>;
    }
    if(!isAuthenticated){
        return <Navigate to={redirectPath} replace/>;
    }
    return <Outlet/>;
}

export default ProtectedRoute;