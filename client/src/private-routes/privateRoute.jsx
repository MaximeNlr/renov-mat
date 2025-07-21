import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function PrivateRoutes({ children }) {

    const { isAuth, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth && !loading) {
            navigate('/login')
        }
    }, [loading, isAuth, navigate]);

    if (loading) return (<div>Chargement...</div>)
    if (!isAuth) return null;

    return children;
};