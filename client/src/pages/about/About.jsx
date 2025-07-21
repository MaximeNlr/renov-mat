import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import Promo from "../../Components/Promo/Promo";
import Footer from "../../Components/Footer/Footer";

export default function About() {
    return (
        <div className="sm:pt-14">
            <div className="hidden md:flex">
                <Header />
            </div>
            <div className="flex md:hidden">
                <MobileHeader />
            </div>
            <div>
                <Promo />
            </div>
            <div>
                <h1 className="text-[var(--yellow)] font-extrabold sm:text-2xl md:text-3xl lg:text-4xl text-center mt-10">À PROPOS DE <span className="text-[var(--green)]">NOUS</span></h1>
                <div className="flex flex-row mt-10">
                    <div className="lg:w-1/2">
                        <div className="flex flex-col justify-around md:h-[200px] lg:h-[250px] pr-3">
                            <div className="flex justify-end">
                                <h2 className="font-extrabold text-2xl">Mission – Pourquoi Renov’Mat existe ?</h2>
                            </div>
                            <div className="flex flex-col items-end lg:text-[1.1rem]">
                                <p>📦 Donner une seconde vie aux matériaux</p>
                                <p>🔄 Faciliter les transactions entre acheteurs et vendeurs</p>
                                <p>♻️ Promouvoir l’économie circulaire dans le BTP</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <img className="md:h-[250px] lg:h-[300px]" src="../../Assets/About/about2.png" />
                        </div>
                        <div className="flex flex-col justify-around md:h-[200px] lg:h-[250px] pr-3">
                            <div className="flex justify-end">
                                <h2 className="font-extrabold text-2xl">Valeurs – Ce qui nous guide au quotidien</h2>
                            </div>
                            <div className="flex flex-col items-end lg:text-[1.1rem]">
                                <p>♻️ Économie circulaire & durabilité</p>
                                <p>🌎 Simplicité & transparence</p>
                                <p>👥 Communauté & entraide</p>
                                <p>💡 Innovation & engagement</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div>
                            <img className="md:h-[200px] lg:h-[250px]" src="../../Assets/About/about1.png" />
                        </div>
                        <div className="flex flex-col justify-around md:h-[250px] lg:h-[300px] pl-3">
                            <div>
                                <h2 className="font-extrabold lg:text-2xl">Vision – Où voulons-nous aller ?</h2>
                            </div>
                            <div className="flex flex-col lg:text-[1.1rem]">
                                <p>🚀 Développer la plus grande marketplace spécialisée <spans className="">en matériaux de construction en France</spans></p>
                                <p>🌍 Faire du réemploi une norme dans le BTP</p>
                                <p>🔧 Intégrer des services complémentaires</p>
                                <p>🌎 S’étendre à l’international</p>
                            </div>
                        </div>
                        <div>
                            <img className="md:h-[200px] lg:h-[250px]" src="../../Assets/About/about3.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex h-0.5 w-[70%] bg-[var(--green)] mt-20 mb-20 mr-auto ml-auto"></div>
            <div className="h-[100vh] lg:text-[1.1rem] lg:ml-40 lg:mr-40">
                <div className="lg:w-[60%]">
                    <h2 className="font-bold lg:text-2xl lg:mb-7 whitespace-nowrap">Donner une seconde vie aux matériaux, c’est notre engagement.</h2>
                    <p>
                        Chez Renov’Mat, nous avons une mission simple : réduire le gaspillage dans le secteur du BTP
                        en facilitant l’achat et la vente de matériaux de construction neufs et d’occasion.
                        L’idée est née d’un constat personnel. Ayant grandi avec des parents architectes,
                        j’ai vu trop de matériaux non utilisés s’accumuler après les chantiers, stockés par précaution,
                        mais rarement réutilisés. Trop précieux pour être jetés, trop encombrants pour rester inutilisés.
                        C’est ainsi que Renov’Mat est devenu une évidence : une plateforme où particuliers et professionnels peuvent
                        revendre leurs surplus et acheter à moindre coût, dans une logique économique et écologique.
                    </p>
                </div>
                <div className="flex flex-col justify-end items-end">
                    <h2 className="font-bold lg:text-2xl lg:mb-7">Pourquoi choisir Renov’Mat ?</h2>
                    <p className="lg:w-[60%]">
                        Une alternative au gaspillage → Ce qui ne sert plus à l’un peut être essentiel pour un autre.Des matériaux à prix réduits →
                        Accédez à des matériaux de qualité sans exploser votre budget.Une plateforme simple et sécurisée → Achat et vente en quelques
                        clics, avec messagerie intégrée et paiement sécurisé.Un engagement pour l’avenir → En favorisant le réemploi, nous contribuons
                        à rendre le secteur du BTP plus durable.
                    </p>
                </div>
                <div className="text-center m-auto mt-20 w-[75%] text-[var(--yellow)] lg:text-2xl font-extrabold">
                    <p>
                        Que vous soyez bricoleur du dimanche, artisan ou chef de chantier, Renov’Mat est votre
                    </p>
                    <p>
                        allié pour une rénovation plus responsable et plus accessible !
                    </p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}