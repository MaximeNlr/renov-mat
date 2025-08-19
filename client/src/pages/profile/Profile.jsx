import { NavLink } from "react-router-dom";
import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import Promo from "../../Components/Promo/Promo";
import Footer from "../../Components/Footer/Footer";
import { useState, useEffect } from "react";
import UserInfo from "../../Components/User_info/UserInfo";
import UserAds from "../../Components/User_Ads/UserAds";
import UserEval from "../../Components/User_eval/UserEval";
import UserTransaction from "../../Components/User_transactions/UserTrasactions";
import Subscription from "../../Components/Subscription/Subscription";
import { body } from "framer-motion/client";
import { FaUser, FaBullhorn, FaStar, FaCreditCard } from "react-icons/fa";


export default function Profile() {

    const [state, setState] = useState('profile');

    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: { 'Content-type': 'application/json' },
                    credentials: 'include'
                }
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/info`, options);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, []);

    useEffect(() => {
        const localState = localStorage.getItem('state');
        if (localState) {
            setState(localState);
        }
    }, []);

    const handleFile = async (e) => {
        const file = e.target.files[0]
        if (!file) {
            return;
        };
        console.log(file);

        const formData = new FormData();
        formData.append('images', file);
        try {
            const options = {
                method: 'POST',
                credentials: 'include',
                body: formData
            };
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/upload-avatar`, options);
            const data = await response.json();
        } catch (error) {
            console.error(error);
        }
    };

    const fetchUserProfile = () => {
        setState('profile');
        localStorage.setItem('state', 'profile');
    };
    const fetchUserAds = () => {
        setState('ads');
        localStorage.setItem('state', 'ads');
    };
    const fetchUserEval = () => {
        setState('eval');
        localStorage.setItem('state', 'eval');
    };
    const fetchUserTran = () => {
        setState('tran');
        localStorage.setItem('state', 'tran');
    };
    return (
        <div>
            <Header />
            <MobileHeader />
            <Promo />
            <div className="py-5 px-2 lg:px-20 lg:py-10">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-col lg:flex-row items-center lg:gap-2.5">
                        <label
                            className="h-14 w-14 lg:w-36 lg:h-36 aspect-square border rounded-full flex items-center justify-center overflow-hidden relative cursor-pointer"
                        >
                            <img
                                src={`${import.meta.env.VITE_API_URL}${user.image}`}
                                alt={user.image}
                                className="object-cover w-full h-full z-0"
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
                                <span className="text-white text-4xl">+</span>
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={(e) => handleFile(e)}
                            />
                        </label>
                        <h2 className="text-2xl lg:text-3xl font-bold">Bienvenue {user.firstname}</h2>
                    </div>
                    <div className="mt-8">
                        <Subscription user={user} />
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex lg:ml-10 justify-center lg:justify-normal gap-10 text-base font-extrabold">
                        <button
                            className={`hover:border-[var(--green)] border-t-2 border-l-2 border-r-2 border-transparent rounded-t-lg p-1.5 transition-colors cursor-pointer
                                ${state === 'profile' ? `bg-[var(--green)] text-white` : ''}`}
                            onClick={fetchUserProfile}
                        >
                            <span className="block md:hidden"><FaUser /></span>
                            <span className="hidden md:block">PROFIL</span>
                        </button>
                        <button
                            className={`hover:border-[var(--green)] border-t-2 border-l-2 border-r-2 border-transparent rounded-t-lg p-1.5 cursor-pointer
                                ${state === 'ads' ? `bg-[var(--green)] text-white` : ''}`}
                            onClick={fetchUserAds}
                        >
                            <span className="block md:hidden"><FaBullhorn /></span>
                            <span className="hidden md:block">ANNONCES</span>
                        </button>
                        <button
                            className={`hover:border-[var(--green)] border-t-2 border-l-2 border-r-2 border-transparent rounded-t-lg p-1.5 cursor-pointer
                                ${state === 'eval' ? `bg-[var(--green)] text-white` : ''}`}
                            onClick={fetchUserEval}
                        >
                            <span className="block md:hidden"><FaStar /></span>
                            <span className="hidden md:block">AVIS</span>
                        </button>
                        <button
                            className={`hover:border-[var(--green)] border-t-2 border-l-2 border-r-2 border-transparent rounded-t-lg p-1.5 cursor-pointer
                                ${state === 'tran' ? `bg-[var(--green)] text-white` : ''}`}
                            onClick={fetchUserTran}
                        >
                            <span className="block md:hidden"><FaCreditCard /></span>
                            <span className="hidden md:block">TRANSACTIONS</span></button>
                    </div>
                    <div>
                        <div className="border-4 rounded-lg border-[var(--green)] p-8 lg:h-[450px] overflow-scroll">
                            {state === 'profile' && (
                                <UserInfo user={user} />
                            )}
                            {state === 'ads' && (
                                <UserAds />
                            )}
                            {state === 'eval' && (
                                <UserEval />
                            )}
                            {state === 'tran' && (
                                <UserTransaction />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div >
    )
}