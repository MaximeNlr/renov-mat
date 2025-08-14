import Logout from "../Logout/Logout";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import { GiHamburgerMenu } from "react-icons/gi";
import CardIcon from "../Card_icon/Card";

export default function MobileHeader() {

    const auth = useAuth();

    const [isActive, setIsActive] = useState(false);

    const handleMobileMenu = () => {
        if (!isActive) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    return (
        <header className="block md:hidden fixed top-0 left-0 h-14 w-full px-4 py-2 shadow-md bg-white z-50">
            <div className="relative flex items-center justify-between z-40 bg-white">
                <button
                    className="flex items-center p-2 focus:outline-none"
                    onClick={handleMobileMenu}
                >
                    <GiHamburgerMenu className="text-2xl text-[var(--green)]" />
                </button>
                <h1 className="text-xl font-bold flex items-center">
                    <span className="renov-title text-[var(--green)]">RENOV</span>
                    <span className="renov-title text-[var(--yellow)]">'MAT</span>
                </h1>
                <CardIcon />
            </div>
            {isActive && (
                <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -200 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute top-full left-0 w-full bg-white shadow-lg z-10"
                >
                    <nav
                        className="absolute font-bold top-full left-0 w-full flex flex-col gap-4 bg-white text-[var(--green)] text-lg p-5 shadow-lg z-30"
                    >
                        <NavLink to="/" className="hover:underline">Accueil</NavLink>
                        <NavLink to="/category" className="hover:underline">Catégorie</NavLink>
                        <NavLink to="#" className="hover:underline">Contact</NavLink>
                        <NavLink to="/forum" className="text-[var(--pink)] hover:underline">Forum</NavLink>
                        <NavLink to="/blog" className="text-[var(--purple)] hover:underline">Blog</NavLink>
                        <hr className="my-2" />

                        {auth.isAuth &&
                            <div className="flex flex-col gap-2">
                                <NavLink to="/profile">Mon compte</NavLink>
                                <Logout />
                            </div>
                        }
                        {!auth.isAuth &&
                            <NavLink to="/login">
                                Se connecter
                            </NavLink>
                        }
                    </nav>
                </motion.div>
            )}
        </header>
    )
}