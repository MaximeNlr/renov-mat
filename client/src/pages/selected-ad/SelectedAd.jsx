import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import Footer from "../../Components/Footer/Footer";
import Promo from "../../Components/Promo/Promo";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function SelectedAd() {


    const { state: data } = useLocation();
    const navigate = useNavigate();
    const [ad, setAd] = useState([]);
    const [seller, setSeller] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [dataImages, setDataImages] = useState([]);

    const [isAdded, setIsAdded] = useState(false);


    useEffect(() => {
        if (data) {
            setAd(data.ad);
            setSeller(data.seller.user_id);
            setDataImages(data.ad.images);
        };
    }, []);

    const adImages = dataImages?.map((i) => i.imageUrl) || [];
    const image = adImages.length > 0 ? adImages[currentImage] : null;

    const addToCard = () => {

    }

    const nextImage = () => {
        if (ad.images.length > 0) {
            setCurrentImage((prev) => (prev + 1) % adImages.length);
        };
    };

    const prevImage = () => {
        if (ad.images.length > 0) {
            setCurrentImage((prev) => (prev - 1 + adImages.length) % adImages.length);
        };
    };

    const fetchSellerProfile = async () => {
        if (seller) {
            navigate('/seller', { state: seller });
        }
        else {
            return
        }
    };
    return (
        <div>
            <div className="hidden md:flex">
                <Header />
            </div>
            <div className="flex pt-14 md:hidden">
                <MobileHeader />
            </div>
            <div>
                <Promo />
            </div>
            <main>
                <div className="">
                    <div className="flex flex-row w-full justify-center gap-[5%] mt-20">
                        <div className="flex flex-row w-[40%] justify-center items-center gap-6">
                            <div>
                                <FaChevronLeft
                                    className="cursor-pointer text-[var(--yellow)] text-3xl hover:text-[var(--green)] transition-colors duration-100"
                                    onClick={prevImage}
                                />
                            </div>
                            <div className="flex flex-col">
                                <img className="w-[250px] h-[150px] lg:w-[450px] lg:h-[350px]" src={image} alt="Image du produit dans le panier" />
                            </div>
                            <div>
                                <FaChevronRight
                                    className="cursor-pointer text-[var(--yellow)] text-3xl hover:text-[var(--green)] transition-colors duration-100"
                                    onClick={nextImage}
                                />
                            </div>
                        </div>
                        <div className="w-[40%]">
                            <h1 className="lg:text-2xl xl:text-3xl font-extrabold">{ad.title}</h1>
                            <h2 className="text-3xl text-[var(--green)] font-bold mb-2">{ad.price} €</h2>
                            <div className="h-0.5 w-full bg-[var(--yellow)] mb-6"></div>
                            <div className="flex flex-row justify-between mr-4">
                                <ul className="space-y-1">
                                    <li className="flex gap-2">
                                        <span className="lg:w-[90px]">Type</span>
                                        <strong>{ad.type}</strong>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="lg:w-[90px]">Quantité</span>
                                        <strong>{ad.quantity} {ad.unit}</strong>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="lg:w-[90px]">État</span>
                                        <strong>{ad.state}</strong>
                                    </li>
                                </ul>
                                <ul className="space-y-1">
                                    <li className="flex gap-2">
                                        <span className="lg:w-[90px]">Matériaux</span>
                                        <strong>{ad.materials}</strong>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="lg:w-[90px]">Remise</span>
                                        <strong>Main propre</strong>
                                    </li>
                                </ul>
                            </div>
                            <div className="h-0.5 w-full bg-[var(--yellow)] mt-6 mb-10"></div>
                            <div className="flex flex-row justify-between">
                                <button
                                    onClick={addToCard}
                                    className={`font-bold rounded-[10px] w-[180px] p-2 transition-all hover:bg-[#4c6648] hover:scale-105 duration-300
                                        ease-in-out transform cursor-pointer ${isAdded
                                            ? 'bg-[#4c6648] text-white'
                                            : 'bg-[var(--green)] text-white'
                                        }`}                            >
                                    ACHETER
                                </button>
                                <button
                                    className="border-2 border-[var(--green)] cursor-pointer text-[var(--green)] font-bold rounded-[10px] w-[180px] p-2 transition-all
                                    duration-300 ease-in-out transform  hover:scale-105"
                                >
                                    AJOUTER AUX FAVORIS
                                </button>
                                <button
                                    className="bg-[var(--yellow)] cursor-pointer text-white font-bold rounded-lg w-[180px] p-2
                                    duration-100 ease-in-out transform hover:bg-[var(--green)] hover:scale-105"
                                >
                                    CONTACTER LE VENDEUR
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between ml-[80px] mt-[80px]">
                        <div className="w-[60%] ">
                            <div className="flex flex-row border-b-2 border-[var(--green)] gap-2 text-[1.1rem] font-bold">
                                <div className="bg-[var(--green)] text-white font-extrabold p-1.5 cursor-pointer rounded-t-[10px]">
                                    <h4>Description supplémentaire </h4>
                                </div>
                                <div className="font-extrabold p-1.5 cursor-pointer">
                                    <h4>Fiche technique</h4>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <p>
                                    {ad.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row bg-[#ffe79e] lg:w-[30%] lg:h-[25vh] items-center justify-center gap-10 p-2.5 rounded-l-[15px]">
                            <div className="">
                                <img
                                    src={`http://localhost:3000${seller.imageUrl}`}
                                    alt="Photo du vendeur"
                                    className="h-36 w-36 bg-amber-50 rounded-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-3">
                                    <div>
                                        <h2 className="text-2xl font-bold">{seller.firstname}</h2>
                                    </div>
                                    <div className="items-center">
                                        <div className="flex flex-row">
                                            <img className="h-5 w-5" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="h-5 w-5" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="h-5 w-5" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="h-5 w-5" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="h-5 w-5" src="../../Assets/Stars/empty-star.svg" alt="icon note des utilisateurs" />
                                            <p className="">8 avis</p>
                                        </div>
                                        <div className="flex flex-row gap-1">
                                            <img src="../../Assets/location.svg" alt="icon de localisation" />
                                            <p>{seller.adress}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="btn w-full"
                                        onClick={() => fetchSellerProfile(seller._id)}
                                    >
                                        VOIR PLUS
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div>
                <Footer />
            </div>
        </div>
    )
}