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
    const [selectedState, setSelectedState] = useState('description')

    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        if (data) {
            setAd(data.ad);
            setSeller(data.seller.user_id);
            setDataImages(data.ad.images);
        };
    }, []);

    const adImages = dataImages?.map((i) => i.imageUrl) || [];

    let image = adImages.length > 0 ? adImages[currentImage] : null;

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

    const showSelectedImg = (index) => {
        setCurrentImage(index)
    }

    return (
        <div>
            <Header />
            <MobileHeader />
            <Promo />
            <div className="max-w-[1180px] mx-auto px-6 lg:px-10 py-10">
                <div className="flex flex-col items-center md:items-start md:flex-row justify-center gap-2 md:gap-10">
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-[45%] justify-center">
                        <button
                            onClick={prevImage}
                            className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-black/5 hover:bg-black/10 transition"
                        >
                            <FaChevronLeft className="text-[var(--yellow)] text-3xl hover:text-[var(--green)] transition-colors" />
                        </button>
                        <div className="relative w-full">
                            <img
                                className="w-full object-cover max-w-[450px] h-[250px] md:h-[350px] rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
                                src={image}
                                alt="Image du produit dans le panier"
                            />
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-4">
                                {adImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => showSelectedImg(index)}
                                        className={`h-2 w-2 rounded-full transition-all ${currentImage === index
                                            ? "bg-[var(--yellow)] scale-125"
                                            : "bg-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={nextImage}
                            className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-black/5 hover:bg-black/10 transition"
                        >
                            <FaChevronRight className="text-[var(--yellow)] text-3xl hover:text-[var(--green)] transition-colors" />
                        </button>
                    </div>
                    <div className="w-full md:w-[45%]">
                        <h1 className="text-xl lg:text-3xl font-semibold text-gray-800 leading-snug">
                            {ad.title}
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">
                            {ad.type} · {ad.state}
                        </p>
                        <div className="mt-3 mb-6">
                            <span className="text-4xl lg:text-5xl font-extrabold text-[var(--green)]">
                                {ad.price} €
                            </span>
                            <span className="text-sm text-gray-500 ml-2">TTC</span>
                        </div>
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
                <div className="flex flex-col lg:flex-row justify-between mt-12 md:mt-0 gap-10">
                    <div className="w-full lg:w-[60%]">
                        <div className="flex gap-2 text-lg font-semibold border-b border-[var(--green)]">
                            <button
                                onClick={() => setSelectedState('description')}
                                className={`px-4 py-2 rounded-t-lg transition-all duration-300 ${selectedState === 'description'
                                    ? 'bg-[var(--green)] text-white shadow-md'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                Description
                            </button>
                            <button
                                onClick={() => setSelectedState('tech')}
                                className={`px-4 py-2 rounded-t-lg transition-all duration-300 ${selectedState === 'tech'
                                    ? 'bg-[var(--green)] text-white shadow-md'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                Fiche technique
                            </button>
                        </div>
                        {selectedState === 'description' && (
                            <div className="mt-5 text-gray-800 leading-relaxed">
                                <p className="whitespace-pre-line">{ad.description}</p>
                            </div>
                        )}
                        {selectedState === 'tech' && (
                            <div className="mt-5 pb-5 text-gray-800">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <ul className="space-y-2">
                                        <li className="flex justify-between border-b pb-1">
                                            <span className="text-gray-500">Type :</span>
                                            <strong>{ad.type}</strong>
                                        </li>
                                        <li className="flex justify-between border-b pb-1">
                                            <span className="text-gray-500">Quantité :</span>
                                            <strong>{ad.quantity} {ad.unit}</strong>
                                        </li>
                                        <li className="flex justify-between border-b pb-1">
                                            <span className="text-gray-500">État :</span>
                                            <strong>{ad.state}</strong>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2">
                                        <li className="flex justify-between border-b pb-1">
                                            <span className="text-gray-500">Matériaux :</span>
                                            <strong>{ad.materials || '-'}</strong>
                                        </li>
                                        <li className="flex justify-between border-b pb-1">
                                            <span className="text-gray-500">Remise :</span>
                                            <strong>Main propre</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className=" bg-[#ffe79e] lg:w-[30%] p-4 rounded-[15px] shadow-md">
                        <div className="flex items-center gap-6">
                            <img
                                src={`${seller.imageUrl}`}
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
                            </div>
                        </div>
                        <button
                            className="bg-[var(--green)] w-full mt-4 text-white font-bold py-2 rounded-md shadow-sm hover:scale-105 transition-transform"
                            onClick={() => fetchSellerProfile(seller._id)}
                        >
                            VOIR PLUS
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}