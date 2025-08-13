import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa"
import Search from "../Search/Search";
import CardIcon from "../Card_icon/Card";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import CreateAdBtn from "../../Components/Create_ad_btn/CreateAdBtn";
import Logout from "../Logout/Logout";
import useAuth from "../../hooks/useAuth";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {

    const location = useLocation();
    const auth = useAuth();

    const [user, setUser] = useState({});
    const [isHover, setIsHover] = useState(false);
    const [ddIsActive, setDdisActive] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: { 'Content-type': 'application/json' },
                    credentials: 'include'
                }
                const response = await fetch('http://localhost:3000/api/user/info', options);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, []);

    const mouseOnProfile = () => {
        setIsHover(true)
    };
    const mouseNotOnProfile = () => {
        setIsHover(false);
    };

    const dropDownMenu = () => {
        if (!ddIsActive) {
            setDdisActive(true);
        } else {
            setDdisActive(false);
        }
    };

    return (
        <header className="hidden md:flex flex-row justify-between items-center px-10 text-black bg-white lg:h-24 w-full">
            <div className="flex items-center gap-8">
                <div className="renov-title flex flex-row text-3xl">
                    <h1 className="renov-title flex text-2xl">
                        <span className="text-[var(--green)]">RENOV</span>
                        <span className="text-[var(--yellow)]">'MAT</span>
                    </h1>
                </div>
            </div>
            <nav className="flex justify-center gap-6 text-[var(--green)] mac:text-2xl font-bold">
                <NavLink to="/"
                    className={`border-b-2 border-transparent hover:border-b-[var(--green)] transition-colors duration-100 cursor-pointer
                            ${location === '/' ? 'border-b-[var(--green)]' : ''}`}
                >
                    ACCUEIL
                </NavLink>
                <NavLink to="/category" className={`border-b-2 border-transparent hover:border-b-[var(--green)] transition-colors duration-300 cursor-pointer
                        ${location === '/category' ? 'border-b-[var(--green)]' : ''}`}>
                    CATÉGORIE
                </NavLink>
                <NavLink to="#"
                    className={`border-b-2 border-transparent hover:border-b-[var(--green)] transition-colors duration-100 cursor-pointer
                            ${location === '#' ? 'border-b-[var(--green)]' : ''}`}
                >
                    CONTACT
                </NavLink>
                <NavLink to="/forum"
                    className={`border-b-2 border-transparent hover:border-b-[var(--pink)] transition-colors duration-100 text-[var(--pink)] cursor-pointer
                            ${location === '/forum' ? 'border-b-[var(--pink)]' : ''}`}
                >
                    FORUM
                </NavLink>
                <NavLink to="/blog"
                    className={`border-b-2 border-transparent hover:border-b-[var(--purple)] transition-colors duration-100 text-[var(--purple)] cursor-pointer
                            ${location === '/blog' ? 'border-b-[var(--purple)]' : ''}`}
                >
                    BLOG
                </NavLink>
            </nav>
            <div className="relative flex justify-end items-center gap-8">
                <div
                    onMouseEnter={mouseOnProfile}
                    onMouseLeave={mouseNotOnProfile}
                    onClick={dropDownMenu}
                    className=""
                >
                    <div className="">
                        {auth.isAuth &&
                            <div className="flex items-center rounded-full !cursor-pointer">
                                <div className="w-6 flex flex-col items-end">
                                    <FaChevronDown

                                    />
                                </div>
                                <img
                                    src={`http://localhost:3000${user.image}`} alt={user.image}
                                    className="rounded-full object-cover h-12 w-12"
                                />
                            </div>
                        }
                        {!auth.isAuth &&
                            <Link to="/login">
                                <button className="btn">se connecter</button>
                            </Link>
                        }
                    </div>
                    <div>
                        {ddIsActive === true &&
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0, y: -200 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -200 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="absolute top-16 right-10 bg-white z-10 rounded-lg px-2 py-4 shadow-[0px_3px_7px_2px_rgba(149,_157,_165,_0.2)]"
                                >
                                    <nav className="w-full flex flex-col gap-3">
                                        <NavLink to="/profile"
                                            className='transition-colors duration-100 cursor-pointer hover:bg-gray-300 w-full rounded-lg px-1 py-1'

                                        >
                                            Mon compte
                                        </NavLink>
                                        {auth.isAuth &&
                                            <Logout />
                                        }
                                        {!auth.isAuth &&
                                            <NavLink to="/login">
                                                Se connecter
                                            </NavLink>
                                        }
                                    </nav>
                                </motion.div>
                            </AnimatePresence>
                        }
                    </div>
                </div>
                <div>
                    <CardIcon />
                </div>
            </div>
        </header >
    )
}