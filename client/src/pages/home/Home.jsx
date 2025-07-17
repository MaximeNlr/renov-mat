import "../../index.css";
import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import Promo from "../../Components/Promo/Promo";
import CarouselHome from "../../Components/CarouselHome/CarouselHome";
import Tendancy from "../../Components/Tendancy/Tendancy";
import AdPreview from "../../Components/Ad_Preview/AdPreview";
import Footer from "../../Components/Footer/Footer";
import CreateAdBtn from "../../Components/Create_ad_btn/CreateAdBtn";


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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 lg:px-20 mt-10 font-bold">
                <div className="">
                    <Tendancy />
                </div>
                <div className="bg-white border-2 border-yellow-400 rounded-xl text-[var(--green)] flex flex-col items-center justify-center p-6 shadow-sm">
                    <div className="flex flex-col items-center gap-3">
                        <CreateAdBtn />
                        <div>
                            <span>Ou</span>
                        </div>
                        <p className="text-center font-extrabold mb-4">Trouvez des annonces près de chez vous !</p>
                    </div>
                    <div className="flex w-full max-w-md border border-[var(--green)] rounded-lg overflow-hidden">
                        <input
                            className="flex-grow px-3 py-2 outline-none"
                            type="text"
                            placeholder="Votre ville, code postal..."
                        />
                        <button className="bg-[var(--yellow)] text-black px-4 cursor-pointer">Go</button>
                    </div>
                </div>
                <div className="bg-yellow-400 text-white rounded-xl p-6 flex flex-col justify-between shadow-md">
                    <div className="text-2xl text-center mb-4">
                        <h2>La communauté</h2>
                        <h2>Renov’mat</h2>
                    </div>
                    <div className="text-sm lg:text-base text-center mb-4">
                        <p>Besoin de conseils, d’inspiration ou juste envie d’aider d’autres Mat ?</p>
                        <p>Rejoins le forum Renov’mat !</p>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-white text-[var(--pink)] font-bold px-4 py-2 rounded-lg">
                            JE FONCE !
                        </button>
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