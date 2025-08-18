import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import Promo from "../../Components/Promo/Promo";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SellerEval from "../../Components/Seller_eval/SellerEval";
import SellerAds from "../../Components/Seller_Ads/SellerAds";
import { FaBullhorn, FaStar } from "react-icons/fa"

export default function Seller() {

    const { state: seller } = useLocation();
    const [state, setState] = useState('sellerEval');

    useEffect(() => {
        const localState = localStorage.getItem('seller-state');
        if (localState) {
            setState(localState);
        }
        else {
            return;
        };
    }, []);

    const fetchSellerAds = () => {
        setState('sellerAds');
        localStorage.setItem('state', 'sellerAds');
    };
    const fetchSellerEval = () => {
        setState('sellerEval');
        localStorage.setItem('state', 'sellerEval');
    };

    return (
        <div>
            <Header />
            <MobileHeader />
            <Promo />
            <div className="px-6 md:pl-[100px] md:pr-[100px] md:mt-10">
                <div className="flex flex-col md:flex-row justify-between pt-[40px]">
                    <div className="flex flex-row gap-4 items-center">
                        <div className="w-20 h-20 lg:w-36 lg:h-36 aspect-square border rounded-full flex items-center justify-center overflow-hidden relative cursor-pointer">
                            <img
                                src={`http://localhost:3000${seller.imageUrl}`} alt={seller.imageUrl}
                                className="object-cover w-full h-full z-0"
                            />
                        </div>
                        <div className="flex flex-col gap-3.5">
                            <div className="flex flex-col">
                                <h2 className="text-3xl font-bold">{seller.firstname}</h2>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="flex flex-row">
                                        <img className="w-[15px] md:w-[25px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                        <img className="w-[15px] md:w-[25px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                        <img className="w-[15px] md:w-[25px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                        <img className="w-[15px] md:w-[25px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                        <img className="w-[15px] md:w-[25px]" src="../../Assets/Stars/empty-star.svg" alt="icon note des utilisateurs" />
                                    </div>
                                    <p className="">8 avis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:justify-end pt-5">
                        <h2 className="font-semibold text-lg">À propos</h2>
                        <div>
                            <div className="flex flex-row gap-1.5">
                                <img src="../../Assets/location.svg" alt="" />
                                <p>{seller.adress}</p>
                            </div>
                            <div className="flex flex-row gap-1.5">
                                <img src="../../Assets/clock.svg" alt="" />
                                <p>En ligne il y’a 45 minutes</p>
                            </div>
                            <div className="flex flex-row gap-1.5">
                                <img src="../../Assets/person.svg" alt="" />
                                <p>23 abonnés, 15 abonnements</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:justify-end pt-5 ">
                        <h2 className="font-semibold text-lg">Information(s) verifié(s)</h2>
                        <div>
                            <div className="flex flex-row gap-1.5">
                                <img src="../../Assets/at.svg" alt="" />
                                <p>Adresse mail</p>
                            </div>
                            <div className="flex flex-row gap-1.5">
                                <img src="../../Assets/phone.svg" alt="" />
                                <p>Numéro de téléphone</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 pt-5">
                        <button className="bg-[var(--green)] cursor-pointer text-white font-bold rounded-[10px] w-[180px] p-2 transition-all
                            duration-300 ease-in-out transform hover:bg-[var(--green)] hover:scale-105"
                        >
                            SUIVRE
                        </button>
                        <button className="bg-[var(--green)] cursor-pointer text-white font-bold rounded-[10px] w-[180px] p-2 transition-all
                            duration-300 ease-in-out transform hover:bg-[var(--green)] hover:scale-105"
                        >
                            CONTACTER
                        </button>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex flex-row items-center ml-10 gap-10 font-extrabold">
                        <button
                            className={`hover:border-[var(--green)] border-t-2 border-l-2 border-r-2 border-transparent rounded-t-lg p-1.5 transition-colors cursor-pointer
                                ${state === 'sellerAds' ? `bg-[var(--green)] text-white` : ''}`}
                            onClick={fetchSellerAds}
                        >
                            <span className="block md:hidden"><FaBullhorn /></span>
                            <span className="hidden md:block">ANNONCES</span>
                        </button>
                        <button
                            className={`hover:border-[var(--green)] border-t-2 border-l-2 border-r-2 border-transparent rounded-t-lg p-1.5 transition-colors cursor-pointer
                            ${state === 'sellerEval' ? `bg-[var(--green)] text-white` : ''}`}
                            onClick={fetchSellerEval}
                        >
                            <span className="block md:hidden"><FaStar /></span>
                            <span className="hidden md:block">AVIS</span>
                        </button>
                    </div>
                    <div className="border-4 rounded-lg border-[var(--green)] p-8 lg:h-[400px] overflow-scroll">
                        {state === 'sellerEval' &&
                            <SellerEval />
                        }
                        {state === 'sellerAds' &&
                            <SellerAds sellerId={seller._id} />
                        }
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}