import { image } from "framer-motion/client";
import { useState, useEffect } from "react"
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import CreateAdBtn from "../Create_ad_btn/CreateAdBtn";
import { Link } from "react-router-dom";

export default function UserAds() {

    const navigate = useNavigate();
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserAd = async () => {
            try {
                const fallbackToken = localStorage.getItem('token');
                const options = {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        ...(fallbackToken && { "Authorization": `Bearer ${fallbackToken}` }),
                    },
                    credentials: 'include'
                };
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/ad/user_ad`, options);
                const data = await response.json();
                setAds(data.ads);
                if (data.success === false) {
                    setAds([]);
                }
                setTimeout(() => {
                    setLoading(false);
                }, 500)
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserAd();
    }, []);

    const handleClick = async (ad) => {
        try {
            const options = {
                method: 'GET',
                header: { 'Content-type': 'application/json' },
            };
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/ad/ad/${ad.seller_id}`, options);
            const data = await response.json();
            if (data.success === true) {
                navigate('/selected-ad', { state: data })
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async () => {
        try {
            const options = {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' },
                credentials: 'include'
            };
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/ad/delete_ad`, options);
            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    };

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

    if (ads.length === 0) {
        return (
            <div className="flex flex-row gap-2 items-center justify-center lg:h-full">
                <p>...Aucune annonce en ligne !</p>
                <CreateAdBtn />
            </div>
        )
    } else {
        return (
            <div className="">
                {loading &&
                    <div role="status" className="flex justify-center items-center mt-[10%]">
                        <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-[var(--green)]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                }
                {!loading && ads.map((ad) => (
                    <div
                        key={ad._id}
                        className="h-fit"
                    >
                        <div className="m-4 mx-auto max-w-screen-lg rounded-md text-gray-600">
                            <div className="relative flex h-full flex-col text-gray-600 md:flex-row gap-24">
                                <div className="flex flex-col gap-2 md:w-4/6">
                                    <div>
                                        <img
                                            className="lg:w-[380px] rounded-lg"
                                            src={ad.images[0].imageUrl}
                                            alt={ad.images[0].imageUrl}
                                        />
                                        {console.log(ad.images)}
                                    </div>
                                    <div className="flex flex-col md:flex-row">
                                        <h2 className="mb-2 text-2xl font-black">{ad.title}</h2>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-4xl font-black">
                                            {ad.price}
                                            <sup className="align-super text-sm">€</sup>
                                        </p>
                                        <span className="text-sm uppercase text-gray-600">
                                            ({ad.quantity} {ad.unit})
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Catégorie :</p>
                                        <p>{ad.type}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">État :</p>
                                        <p>{ad.state}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Localisation :</p>
                                        <p>{ad.location || "Non renseignée"}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-1">Description :</p>
                                        <p className="text-gray-700">{ad.description}</p>
                                    </div>
                                    <div className="mt-8 flex flex-col sm:flex-row">
                                        <button
                                            className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-[var(--green)] py-2 px-8 text-center text-white transition duration-150  hover:bg-emerald-500"
                                            onClick={() => handleClick(ad)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            Voir mon annonce
                                        </button>
                                        <Link
                                            to={`/edit-ad/${ad._id}`}
                                            state={ad}
                                            className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-[var(--green)] py-2 px-8 text-center text-white transition duration-150  hover:bg-emerald-500"
                                        >
                                            Modifier
                                        </Link>
                                        <button
                                            onClick={handleDelete}
                                            className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-red-600 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-red-800"
                                        >
                                            <RiDeleteBinLine />
                                            <span className="ml-1.5">Supprimer mon annonce</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div >
        )
    }
}