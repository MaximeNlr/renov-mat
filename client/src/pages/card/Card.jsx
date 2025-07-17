import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import Promo from "../../Components/Promo/Promo";
import Footer from "../../Components/Footer/Footer";
import { useState, useEffect } from "react";

export default function Card() {

    const [card, setCard] = useState([]);

    useEffect(() => {
        const cardProducts = localStorage.getItem('card');
        if (cardProducts) {
            setCard(JSON.parse(cardProducts));
        }
    }, []);

    const total = card.reduce((acc, item) => {
        return acc + item.price;
    }, 0)

    const com = (7 * total) / 100;
    const roundedCom = com.toFixed(2)
    const amount = total + com;
    const roundedAmount = amount.toFixed(2)


    return (
        <div>
            <div className="hidden md:flex">
                <Header />
            </div>
            <div className="flex md:hidden">
                <MobileHeader />
            </div>
            <div>
                <Promo />
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-8 py-12">
                <div className="w-full lg:w-2/3 space-y-6">
                    {card.map((product) => (
                        <div className="flex flex-row justify-between p-4 border border-gray-200 rounded-xl shadow-sm">
                            <div key={product.id} className="flex flex-row items-center gap-6">
                                <img
                                    src={product.img}
                                    alt={`Image de ${product.name}`}
                                    className="w-24 h-24 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold">{product.name} - <span>{product.quantity}</span></h2>
                                    <p className="text-[var(--yellow)] font-bold text-md">{parseFloat(product.price).toFixed(2)}€</p>
                                </div>
                            </div>
                            <div>
                                <button className="cursor-pointer"><img src="../../Assets/Card/delete.svg" alt="" /></button>
                            </div>
                        </div>
                    ))}
                    <div className="lg:w-[70%] bg-[var(--green)] rounded-[10px] m-auto">
                        <h2 className="text-center text-white font-bold text-[1.2rem]">Ça pourrait vous intéresser</h2>
                        <div className="flex flex-row justify-around p-5 font-bold">
                            <div>
                                <div className="bg-white lg:h-[120px] flex items-center justify-center rounded-[10px]">
                                    <img src="../../Assets/Card/card1.png" alt="" />
                                </div>
                                <div className="flex flex-col items-center mt-2">
                                    <h2 className="flex flex-col text-white">Colle pour marbre <span className="text-center">neuf - 10€</span></h2>
                                    <button className="bg-white cursor-pointer text-[var(--yellow)] font-bold rounded-[10px] p-2 transition-all
                                duration-100 ease-in-out transform hover:bg-[var(--yellow)] hover:text-white hover:scale-105 mt-2">AJOUTER</button>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white lg:h-[120px] flex items-center justify-center rounded-[10px]">
                                    <img src="../../Assets/Card/card2.png" alt="" />
                                </div>
                                <div className="flex flex-col items-center mt-2">
                                    <h2 className="flex flex-col justify-center text-white">Colle pour marbre <span className="text-center">neuf - 10€</span></h2>
                                    <button className="bg-white cursor-pointer text-[var(--yellow)] font-bold rounded-[10px] p-2 transition-all
                                duration-100 ease-in-out transform hover:bg-[var(--yellow)] hover:text-white hover:scale-105 mt-2">AJOUTER</button>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white lg:h-[120px] flex items-center justify-center rounded-[10px]">
                                    <img src="../../Assets/Card/card3.png" alt="" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <h2 className="flex flex-col justify-center text-white mt-2">Colle pour marbre <span className="text-center">neuf - 10€</span></h2>
                                    <button className="bg-white cursor-pointer text-[var(--yellow)] font-bold rounded-[10px] p-2 transition-all
                                duration-100 ease-in-out transform hover:bg-[var(--yellow)] hover:text-white hover:scale-105 mt-2"
                                    >AJOUTER</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-md space-y-4">
                    <div className="flex items-center border border-[var(--yellow)] rounded-lg overflow-hidden">
                        <input
                            type="text"
                            placeholder="CODE PROMO"
                            className="w-full px-4 py-2 focus:outline-none"
                        />
                        <button className="px-4 py-2 text-[var(--yellow)] font-semibold hover:underline cursor-pointer">OK</button>
                    </div>
                    <dl className="text-sm space-y-2">
                        <div className="flex justify-between">
                            <dt className="font-medium">Sous-total</dt>
                            <dd>{total.toFixed(2)}€</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="font-medium">Commission (5%)</dt>
                            <dd>{roundedCom}€</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="font-medium">Frais de livraison</dt>
                            <dd>0€</dd>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-bold text-md">
                            <dt>TOTAL - {card.length} ARTICLES</dt>
                            <dd>{roundedAmount}€</dd>
                        </div>
                    </dl>
                    <div className="text-center">
                        <button
                            className="bg-[var(--yellow)] cursor-pointer text-white font-bold rounded-[10px] p-2 transition-all
                                duration-300 ease-in-out transform hover:bg-[var(--green)] hover:scale-105"
                        >
                            VALIDER MON PANIER
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}