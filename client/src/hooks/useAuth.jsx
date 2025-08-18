import { useState, useEffect } from "react"

export default function useAuth() {

    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchAuth = async () => {
            try {
                const options = {
                    headers: { 'Content-type': 'application/json' },
                    credentials: 'include'
                };
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/check-auth`, options);
                const data = await response.json();
                if (data.success === true) {
                    setIsAuth(true);
                } else {
                    setIsAuth(false);
                }
            } catch (error) {
                console.log(error);
                setIsAuth(false)
            } finally {
                setLoading(false);
            }
        };
        fetchAuth()
    }, []);

    return { isAuth, loading };
};