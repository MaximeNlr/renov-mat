import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Logout() {

    const [isLogout, setIsLogout] = useState(false)
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        let timer;
        if (isLogout && countdown > 0) {
            timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
        }
        if (countdown === 0) {
            window.location.href = "/";
        }
        return () => clearTimeout(timer);
    }, [isLogout, countdown]);

    const logout = async (e) => {
        e.preventDefault();
        try {
            const options = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                credentials: 'include'
            };
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/logout`, options);
            const data = await response.json();
            setIsLogout(data.success)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="text-center">
            {!isLogout &&
                <button
                    onClick={logout}
                    className="px-3 py-1 w-[60%] text-sm rounded-md border border-red-400 text-red-500 hover:bg-red-50 transition">
                    Déconnexion
                </button>
            }
            {isLogout &&
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <p>Vous avez été déconnecté</p>
                    <p>Vous allez être redirigé vers la page d’accueil</p>
                </motion.div>
            }
        </div>

    )
}