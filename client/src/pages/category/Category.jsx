import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import Footer from "../../Components/Footer/Footer";
import categorydata from "../../Data/Category.json"
import Promo from "../../Components/Promo/Promo";

export default function Category() {

    return (
        <div>
            <Header />
            <MobileHeader />
            <Promo />
            <div className="text-[var(--green)]  pt-5 text-center">
                <h1 className="font-bold text-3xl lg:text-5xl">Catégories</h1>
                <p className="mt-2 text-sm font-semibold md:text-lg opacity-90">Découvrez nos différentes catégories de matériaux</p>
            </div>
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-8 px-6">
                {categorydata.map((category) => (
                    <div
                        key={category.name}
                        className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl"
                    >
                        <div
                            style={{ backgroundImage: `url(${category.image})` }}
                            className="w-full h-60 bg-cover bg-center"
                        ></div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                            <h3 className="text-white font-extrabold text-2xl drop-shadow-md">
                                {category.name}
                            </h3>
                            <p className="mt-2 text-white text-sm opacity-90 max-w-[200px]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>

    )
}