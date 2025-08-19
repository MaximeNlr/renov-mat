import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function AdPreview() {

    const navigate = useNavigate()

    const [ads, setAds] = useState([]);

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: { 'Content-type': 'application/json' },
                };
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/ad/ads`, options);
                const data = await response.json();
                if (data.success === true) {
                    setAds(data.ads);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchAds();
    }, [])

    const fetchSellerAd = async (id) => {
        try {
            const options = {
                method: 'GET',
                headers: { 'Content-type': 'application/json' },
            }
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/ad/ad/${id}`, options)
            const data = await response.json();
            if (data.success) {
                navigate('/selected-ad', { state: data })
            }
        } catch (error) {

        }
    }

    return (
        <section className="py-10">
            <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {ads.map((ad) => (
                    <article
                        onClick={() => fetchSellerAd(ad.seller_id)}
                        className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
                    >
                        <a href="#">
                            <div className="relative flex justify-center overflow-hidden rounded-xl">
                                <img src={ad.images[0].imageUrl} alt="" />
                            </div>
                            <div className="mt-1 p-2">
                                <h2 className="text-slate-700">{ad.title}</h2>
                                <p className="mt-1 text-sm text-slate-400">{ad.quantity} {ad.unit}</p>

                                <div className="mt-3 flex items-end justify-between">
                                    <p className="text-lg font-bold text-[var(--green)]">{ad.price} €</p>
                                    <div className="flex items-center space-x-1.5 rounded-lg cursor-pointer bg-[var(--green)] px-4 py-1.5 text-white duration-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                        <button className="text-sm">Ajouter au panier</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    )
}