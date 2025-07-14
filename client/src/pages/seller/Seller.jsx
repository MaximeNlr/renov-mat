import Header from "../../Components/Header/Header"
import Promo from "../../Components/Promo/Promo"
import Footer from "../../Components/Footer/Footer"
import { Link } from "react-router-dom"

export default function Seller() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Promo />
            </div>
            <div className="pl-[100px] pr-[100px] mt-10">
                <div className="flex flex-row justify-between pt-[40px]">
                    <div className="flex flex-row">
                        <div className="mr-5">
                            <img src="../../Assets/users_img/user.png" alt="Photo du vendeur" />
                        </div>
                        <div className="flex flex-col gap-3.5">
                            <div className="flex flex-col">
                                <h2 className="text-3xl font-bold">Marc</h2>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="flex flex-row">
                                        <img className="w-[25px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                        <img className="w-[25px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                        <img className="w-[25px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                        <img className="w-[25px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                        <img className="w-[25px]" src="../../Assets/Stars/empty-star.svg" alt="icon note des utilisateurs" />
                                    </div>
                                    <p className="">8 avis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end">
                        <h2>À propos</h2>
                        <div>
                            <div className="flex flex-row gap-1.5">
                                <img src="../../Assets/location.svg" alt="" />
                                <p>Vallauris, Alpes-Maritimes</p>
                            </div>
                            <div className="flex flex-row gap-1.5">
                                <img src="../../Assets/clock.svg" alt="" />
                                <p>En ligne il y’a 45 minutes</p>
                            </div>
                            <div className="flex flex-row gap-1.5">
                                <img src="../../Assets/person.svg" alt="" />
                                <p>Vallauris, Alpes-Maritimes</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end">
                        <h2>Information(s) verifié(s)</h2>
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
                    <div className="flex items-center gap-4">
                        <button className="bg-[var(--yellow)] cursor-pointer text-white font-bold rounded-[10px] w-[180px] p-2 transition-all
                            duration-300 ease-in-out transform hover:bg-[var(--green)] hover:scale-105"
                        >
                            SUIVRE
                        </button>
                        <button className="bg-[var(--yellow)] cursor-pointer text-white font-bold rounded-[10px] w-[180px] p-2 transition-all
                            duration-300 ease-in-out transform hover:bg-[var(--green)] hover:scale-105"
                        >
                            CONTACTER
                        </button>
                    </div>
                </div>
                <div className="pt-[100px]">
                    <div className="flex flex-row items-center ml-10 gap-10 font-extrabold">
                        <Link href="#" className="hover:border-[var(--yellow)] border-t-2 border-l-2 border-r-2 border-transparent rounded-t-lg p-1.5 transition-colors duration-100"
                        >
                            ANNONCE(S)
                        </Link>
                        <Link href="#" className="bg-[var(--yellow)] p-1.5 rounded-t-lg hover:border-[var(--yellow)] border-t-2 border-l-2 border-r-2 border-transparent transition-colors duration-100">EVALUTATIONS</Link>
                    </div>
                    <div className="border-4 rounded-2xl border-[var(--yellow)] p-8 h-[400px]">
                        <div className="flex h-full">
                            <div className="flex flex-col justify-around w-1/2 ml-14">
                                <div className="flex flex-row gap-2">
                                    <div className="flex items-center">
                                        <img src="../../Assets/users_img/user1.png" alt="" />
                                    </div>
                                    <div>
                                        <div className="flex flex-row gap-1 items-center">
                                            <h3 className="font-bold">anna06200</h3>
                                            <p className="text-[0.8rem]">il y a 3 jours</p>
                                        </div>
                                        <div className="flex flex-row mb-2">
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/empty-star.svg" alt="icon note des utilisateurs" />
                                        </div>
                                        <p>Super qualité !</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <div className="flex items-center">
                                        <img src="../../Assets/users_img/user2.png" alt="" />
                                    </div>
                                    <div>
                                        <div className="flex flex-row gap-1 items-center">
                                            <h3 className="font-bold">max.duma</h3>
                                            <p className="text-[0.8rem]">il y a 9 jours</p>
                                        </div>
                                        <div className="flex flex-row mb-2">
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                        </div>
                                        <p>Vendeur au top, je recommande</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <div className="flex items-center">
                                        <img src="../../Assets/users_img/user3.png" alt="" />
                                    </div>
                                    <div>
                                        <div className="flex flex-row gap-1 items-center">
                                            <h3 className="font-bold">thomas342</h3>
                                            <p className="text-[0.8rem]">il y a 15 jours</p>
                                        </div>
                                        <div className="flex flex-row mb-2">
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                        </div>
                                        <p>Le vendeur m’a conseillé pour la pose, allez y les yeux fermés</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-0.5 bg-[var(--yellow)]"></div>
                            <div className="flex flex-col justify-around w-1/2 ml-14">
                                <div className="flex flex-row gap-2">
                                    <div className="flex items-center">
                                        <img src="../../Assets/users_img/user4.png" alt="" />
                                    </div>
                                    <div>
                                        <div className="flex flex-row gap-1 items-center">
                                            <h3 className="font-bold">brad0606</h3>
                                            <p className="text-[0.8rem]">il y a 15 jours</p>
                                        </div>
                                        <div className="flex flex-row mb-2">
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/empty-star.svg" alt="icon note des utilisateurs" />
                                        </div>
                                        <p>Nickel !</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <div className="flex items-center">
                                        <img src="../../Assets/users_img/user5.png" alt="" />
                                    </div>
                                    <div>
                                        <div className="flex flex-row gap-1 items-center">
                                            <h3 className="font-bold">jerem.dct</h3>
                                            <p className="text-[0.8rem]">il y a 1 mois</p>
                                        </div>
                                        <div className="flex flex-row mb-2">
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/empty-star.svg" alt="icon note des utilisateurs" />
                                        </div>
                                        <p>Remise trés rapide</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <div className="flex items-center">
                                        <img src="../../Assets/users_img/user6.png" alt="" />
                                    </div>
                                    <div>
                                        <div className="flex flex-row gap-1 items-center">
                                            <h3 className="font-bold">emma.blt</h3>
                                            <p className="text-[0.8rem]">il y a 2 mois</p>
                                        </div>
                                        <div className="flex flex-row mb-2">
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                            <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                        </div>
                                        <p>J'avais des questions et Marc m'a répondu en 10 min ! Je recommande</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}