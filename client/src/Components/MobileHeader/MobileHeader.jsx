import Logout from "../Logout/Logout";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import { GiHamburgerMenu } from "react-icons/gi";
import CardIcon from "../Card_icon/Card";
import { RxCross2 } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineForum } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";

export default function MobileHeader() {

    const auth = useAuth();

    const [isActive, setIsActive] = useState(false);

    return (
        <header className="block md:hidden fixed top-0 left-0 h-14 w-full px-4 shadow-md bg-white z-50">
            <div className="relative flex justify-between h-full items-center z-40 bg-white">
                {!isActive &&
                    <GiHamburgerMenu
                        onClick={() => setIsActive(true)}
                        className="text-2xl text-[var(--green)]" />
                }
                {isActive &&
                    <RxCross2
                        onClick={() => setIsActive(false)}
                        className="text-2xl" />
                }
                <h1 className="text-xl font-bold flex items-center">
                    <span className="renov-title text-[var(--green)]">RENOV</span>
                    <span className="renov-title text-[var(--yellow)]">'MAT</span>
                </h1>
                <CardIcon />
            </div>
            <AnimatePresence mode="wait">
                {isActive && (
                    <motion.div
                        initial={{ x: -800 }}
                        animate={{ x: 0 }}
                        exit={{ x: -800 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="fixed top-14 left-0 w-full h-[calc(100vh-56px)] bg-white shadow-lg z-40 overflow-y-auto"
                    >
                        <nav className="font-bold text-lg border-t-2 border-[var(--green)] w-full flex flex-col gap-8 text-[var(--green)] py-8 px-4">
                            <div className="flex gap-3 items-center">
                                <FaHome className="text-2xl" />
                                <NavLink to="/" className="hover:underline focus:underline">Accueil</NavLink>
                            </div>
                            <div className="flex gap-3 items-center">
                                <TbCategory className="text-2xl" />
                                <NavLink to="/category" className="hover:underline focus:underline">Catégorie</NavLink>
                            </div>
                            <div className="flex gap-3 items-center">
                                <RiContactsLine className="text-2xl" />
                                <NavLink to="#" className="hover:underline focus:underline">Contact</NavLink>
                            </div>
                            <div className="flex gap-3 items-center text-[var(--pink)]">
                                <MdOutlineForum className="text-2xl" />
                                <NavLink to="/forum" className="hover:underline focus:underline">Forum</NavLink>
                            </div>
                            <div className="flex gap-3 items-center text-[var(--purple)]">
                                <RiArticleLine className="text-2xl" />
                                <NavLink to="/blog" className="hover:underline focus:underline">Blog</NavLink>
                            </div>
                            <div className="flex gap-3">
                                <FaRegUserCircle className="text-2xl" />
                                <NavLink to="/profile" className="hover:underline focus:underline">Mon compte</NavLink>
                            </div>

                            <hr className="my-4 border-[var(--green)]/30" />
                            {auth.isAuth &&
                                <div className="text-center">
                                    <Logout />
                                </div>
                            }
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}