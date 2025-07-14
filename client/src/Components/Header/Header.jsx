import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import CardIcon from "../Card_icon/Card";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import CreateAdBtn from "../../Components/Create_ad_btn/CreateAdBtn";

export default function Header() {

    const location = useLocation();

    return (
        <header className="flex items-center justify-between pl-5 pr-10 text-black bg-white lg:h-24 w-full whitespace-nowrap">
            <div className="flex flex-row items-center gap-3">
                <img className="lg:w-[80px]" src="../../Assets/logo-renovmat.svg" alt="" />
                <div className="renov-title flex flex-row text-3xl">
                    <h1 className="renov-title flex text-2xl">
                        <span className="text-[var(--green)]">RENOV</span>
                        <span className="text-[var(--yellow)]">'MAT</span>
                    </h1>
                </div>
            </div>
            <div className="flex justify-center ml-3.5 lg:w-[25%]">
                <Search />
            </div>
            <div className="flex items-center gap-16">
                <div className="flex items-center gap-6 text-[var(--green)] mac:text-2xl font-bold">
                    <CreateAdBtn />
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
                    <NavLink to="/profile"
                        className={`border-b-2 border-transparent hover:border-b-[var(--green)] transition-colors duration-100 cursor-pointer
                            ${location === '/profile' ? 'border-b-[var(---green)]' : ''}`}
                    >
                        MON COMPTE
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
                    <div>
                        <CardIcon />
                    </div>
                </div>
            </div>
        </header>
    )
}