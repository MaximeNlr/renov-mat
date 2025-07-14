import "../../index.css";
import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import Promo from "../../Components/Promo/Promo";
import CarouselHome from "../../Components/CarouselHome/CarouselHome";
import Tendancy from "../../Components/Tendancy/Tendancy";
import AdPreview from "../../Components/Ad_Preview/AdPreview";
import Footer from "../../Components/Footer/Footer";


export default function Home() {
    return (
        <div>
            <div className="hidden md:flex">
                <Header />
            </div>
            <div className="flex md:hidden">
                <MobileHeader />
            </div>
            <div className="home-promo-container">
                <Promo />
            </div>
            <div className="home-carousel-container">
                <CarouselHome />
            </div>
            <div className="flex flex-wrap mt-10 font-bold justify-between ml-[80px] mr-[80px]">
                <div className="w-[20%]">
                    <Tendancy />
                </div>
                <div className="flex flex-col items-center w-[40%] border-3 rounded-xl border-[#FFC518] text-[var(--green)]">
                    <div className="flex flex-col justify-around items-center w-[100%] h-full">
                        <img src="../../Assets/map-pin.svg" alt="" />
                        <p className="font-extrabold">Trouvez des annonces près de chez vous !</p>
                        <div className="flex flex-row justify-between h-9 w-[65%] border-2 border-[var(--green)] rounded-l-lg">
                            <input
                                className="w-[80%] outline-0 pl-3"
                                type="text" />
                            <div className="flex flex-row gap-2 w-[30%]">
                                <img src="../../Assets/localisation.svg" alt="" />
                                <button className="bg-[var(--yellow)] cursor-pointer w-[100%]">Go</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[20%] flex flex-col text-center rounded-lg justify-around text-white font-extrabold bg-[#FFC518]">
                    <div className="text-xl lg:text-2xl">
                        <h2>La communauté</h2>
                        <h2>Renov’mat</h2>
                    </div>
                    <div className="text-base lg:text-lg p-3">
                        <p>Besoin de conseils, d’inspriration ou juste envie d’aider d’autre Mat ?</p>
                        <p>Rejoins le forum Renov’mat !</p>
                    </div>
                    <div className="flex justify-center text-base lg:text-lg">
                        <button className="bg-white cursor-pointer w-1/2 rounded-lg text-[#698B65]">JE FONCE !</button>
                    </div>
                </div>
            </div>
            <div>
                <AdPreview />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}