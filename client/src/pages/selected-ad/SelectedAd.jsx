import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import Footer from "../../Components/Footer/Footer";
import Promo from "../../Components/Promo/Promo";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { FaHeart } from "react-icons/fa";

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
            <Header />
            <MobileHeader />
            <Promo />
            <main className="max-w-[1180px] mx-auto px-6 lg:px-10 py-10">
                <div className="flex flex-col items-center md:items-start md:flex-row justify-center gap-10">
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-[45%] justify-center">
                        <button
                            onClick={prevImage}
                            className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-black/5 hover:bg-black/10 transition"
                        >
                            <FaChevronLeft className="text-[var(--yellow)] text-3xl hover:text-[var(--green)] transition-colors" />
                        </button>
                        <img
                            className="w-full max-w-[450px] h-[250px] md:h-[350px] object-cover rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
                            src={image}
                            alt="Image du produit dans le panier"
                        />
                        <button
                            onClick={nextImage}
                            className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-black/5 hover:bg-black/10 transition"
                        >
                            <FaChevronRight className="text-[var(--yellow)] text-3xl hover:text-[var(--green)] transition-colors" />
                        </button>
                    </div>
                    <div className="w-full md:w-[45%]">
                        <h1 className="lg:text-2xl xl:text-3xl font-extrabold">{ad.title}</h1>
                        <h2 className="text-3xl text-[var(--green)] font-bold mb-2">{ad.price} €</h2>

                        <div className="h-1 w-full bg-[var(--yellow)] mb-6 rounded"></div>

                        <div className="flex flex-wrap gap-6">
                            <ul className="space-y-1">
                                <li className="flex gap-2">
                                    <span className="w-[90px] text-gray-500">Type :</span>
                                    <strong>{ad.type}</strong>
                                </li>
                                <li className="flex gap-2">
                                    <span className="w-[90px] text-gray-500">Quantité :</span>
                                    <strong>{ad.quantity} {ad.unit}</strong>
                                </li>
                                <li className="flex gap-2">
                                    <span className="w-[90px] text-gray-500">État :</span>
                                    <strong>{ad.state}</strong>
                                </li>
                            </ul>
                            <ul className="space-y-1">
                                <li className="flex gap-2">
                                    <span className="w-[90px] text-gray-500">Matériaux :</span>
                                    <strong>{ad.materials}</strong>
                                </li>
                                <li className="flex gap-2">
                                    <span className="w-[90px] text-gray-500">Remise :</span>
                                    <strong>Main propre</strong>
                                </li>
                            </ul>
                        </div>
                        <div className="h-1 w-full bg-[var(--yellow)] mt-6 mb-10 rounded"></div>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={addToCard}
                                className={`font-bold rounded-[10px] w-full md:w-[180px] py-2 shadow-md transition-all transform hover:scale-105
                          ${isAdded
                                        ? 'bg-[#4c6648] text-white'
                                        : 'bg-[var(--green)] text-white hover:bg-[#4c6648]'
                                    }`}
                            >
                                ACHETER
                            </button>
                            <button
                                className="border-2 border-[var(--green)] text-[var(--green)] font-bold rounded-[10px] w-full md:w-[180px] py-2 shadow-sm hover:scale-105 transition-transform"
                            >
                                AJOUTER AUX FAVORIS
                            </button>
                            <button
                                className="bg-[var(--yellow)] text-white font-bold rounded-[10px] w-full md:w-[180px] py-2 shadow-md hover:bg-[var(--green)] hover:scale-105 transition-all"
                            >
                                CONTACTER LE VENDEUR
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between mt-20 gap-10">
                    <div className="w-full lg:w-[60%]">
                        <div className="flex gap-2 text-lg font-bold border-b-2 border-[var(--green)]">
                            <div className="bg-[var(--green)] text-white p-2 rounded-t-lg cursor-pointer">
                                Description
                            </div>
                            <div className="p-2 cursor-pointer">
                                Fiche technique
                            </div>
                        </div>
                        <p className="mt-5 leading-relaxed text-gray-800">
                            {ad.description}
                        </p>
                    </div>
                    <div className="flex items-center bg-[#ffe79e] lg:w-[30%] p-4 rounded-[15px] shadow-md gap-6">
                        <img
                            src={`http://localhost:3000${seller.imageUrl}`}
                            alt="Photo du vendeur"
                            className="h-36 w-36 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <div className="flex flex-col justify-between h-full gap-4">
                            <div>
                                <h2 className="text-2xl font-bold">{seller.firstname}</h2>
                                <div className="flex items-center gap-2 mt-1">
                                    {[...Array(4)].map((_, i) => (
                                        <img key={i} className="h-3 w-3 md:h-5 md:w-5" src="../../Assets/Stars/full-star.svg" alt="star" />
                                    ))}
                                    <img className="h-3 w-3 md:h-5 md:w-5" src="../../Assets/Stars/empty-star.svg" alt="star" />
                                    <p className="text-gray-600 text-sm">8 avis</p>
                                </div>
                                <div className="flex items-center gap-1 mt-2 text-gray-600 text-sm">
                                    <img src="../../Assets/location.svg" alt="location" />
                                    <p>{seller.adress}</p>
                                </div>
                            </div>
                            <button
                                className="bg-[var(--green)] text-white font-bold py-2 rounded-md shadow-sm hover:scale-105 transition-transform"
                                onClick={() => fetchSellerProfile(seller._id)}
                            >
                                VOIR PLUS
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}