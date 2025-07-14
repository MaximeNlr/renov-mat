import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Promo from "../../Components/Promo/Promo"

export default function Forum() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Promo />
            </div>
            <div className="flex flex-row w-full gap-10 mt-10 pl-5">
                <div className="w-[18%] whitespace-nowrap">
                    <div className="flex flex-col bg-[var(--yellow)] rounded-[10px] mb-5 p-3">
                        <div>
                            <h2 className="text-center font-bold mb-3">Thématique</h2>
                        </div>
                        <div className="flex flex-col gap-3 pl-[15%] text-[1rem]">
                            <div>
                                <input className="mr-3" type="checkbox" />
                                <label>Peinture</label>
                            </div>
                            <div>
                                <input className="mr-3" type="checkbox" />
                                <label>Carrelage</label>
                            </div>
                            <div>
                                <input className="mr-3" type="checkbox" />
                                <label>Parquet</label>
                            </div>
                            <div>
                                <input className="mr-3" type="checkbox" />
                                <label>Joint de salle de bain</label>
                            </div>
                            <div>
                                <input className="mr-3" type="checkbox" />
                                <label>Coup de main local</label>
                            </div>
                            <div>
                                <input className="mr-3" type="checkbox" />
                                <label>Placo</label>
                            </div>
                            <div>
                                <input className="mr-3" type="checkbox" />
                                <label>Plomberie</label>
                            </div>
                            <div>
                                <input className="mr-3" type="checkbox" />
                                <label>Fenêtre</label>
                            </div>
                            <div>
                                <input className="mr-3" type="checkbox" />
                                <label>Toiture</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-[var(--yellow)] rounded-[10px] mb-5 p-3">
                        <div>
                            <h2 className="text-center font-bold mb-3">Trié par</h2>
                        </div>
                        <div className="flex flex-col gap-3 pl-[15%] text-[1rem]">
                            <div>
                                <input className="mr-3" type="checkbox" />
                                <label>Du + au - récent</label>
                            </div>
                            <div>
                                <input className="mr-3" type="checkbox" />
                                <label>Du - au + récent</label>
                            </div>
                            <div>
                                <input className="mr-3" type="checkbox" />
                                <label>Résolu</label>
                            </div>
                            <div>
                                <input className="mr-3" type="checkbox" />
                                <label>Ouvert</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[70%] lg:pr-40">
                    <div className="flex items-center gap-3 p-2 border-2 border-[var(--green)] rounded-[20px] lg:h-10 lg:w-full mb-10">
                        <img src="../../Assets/Search.svg" alt="search" />
                        <input
                            className="outline-0 w-full placeholder:text-[1rem]"
                            type="text"
                            placeholder="Rechercher sur le forum"
                        />
                        <button></button>
                    </div>
                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="font-extrabold">
                                [AIDE] Ma peinture cloque 48h après application, normal ?
                            </h2>
                            <p className="text-[0.9rem]">Eric.P - Résolu</p>
                        </div>
                        <div className="flex flex-row gap-1">
                            <img className="lg:w-[20px]" src="../../Assets/Forum/comment.svg" alt="logo commentaire" />
                            <p className="text-[0.9rem]">8</p>
                        </div>
                        <div className="mt-4 ">
                            <p>
                                Salut, j’ai peint un mur en blanc mat (sous-couche + 2 couches) mais ça commence à cloquer.
                                Le mur était sec à l’œil mais j’ai pas poncé avant. Vous pensez que c’est lié à l’humidité ou à la peinture de mauvaise qualité ? Merci !
                            </p>
                        </div>
                    </div>
                    <div className="bg-[var(--green)] h-0.5 w-1/2 mt-5 mb-5"></div>
                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="font-extrabold">
                                [CONSEIL] Vos marques de peinture préférées pour salle de bain ?
                            </h2>
                            <p className="text-[0.9rem]">Jean.M - Ouvert</p>
                        </div>
                        <div className="flex flex-row gap-1">
                            <img className="lg:w-[20px]" src="../../Assets/Forum/comment.svg" alt="logo commentaire" />
                            <p className="text-[0.9rem]">14</p>
                        </div>
                        <div className="mt-4">
                            <p>
                                Je dois refaire la peinture au-dessus de ma baignoire et je cherche une marque qui tienne bien à l’humidité.
                                Plutôt satinée ou brillante ? Vous utilisez quoi ? Je prends tous les retours !
                            </p>
                        </div>
                    </div>
                    <div className="bg-[var(--green)] h-0.5 w-1/2 mt-5 mb-5"></div>
                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="font-extrabold whitespace-nowrap">
                                [COUP DE MAIN LOCAL] Besoin d’un coup de main pour repeindre un plafond à Nice ce week-end
                            </h2>
                            <p className="text-[0.9rem] whitespace-nowrap">Marc.D - Ouvert</p>
                        </div>
                        <div className="flex flex-row gap-1">
                            <img className="lg:w-[20px]" src="../../Assets/Forum/comment.svg" alt="logo commentaire" />
                            <p className="text-[0.9rem]">4</p>
                        </div>
                        <div className="mt-4">
                            <p>
                                Salut tout le monde ! Je refais mon salon ce samedi et j’ai un plafond à repeindre (env. 15m²).
                                J’ai déjà le matos (peinture, rouleaux, bâche…), mais clairement deux bras de plus ne seraient pas de trop
                                😅 Si quelqu’un est dispo pour filer un coup de main en échange d’un café, d’une bière ou d’un reste de peinture,
                                vous êtes les bienvenus ! Quartier Libération, à Nice. Merci d’avance 🙏
                            </p>
                        </div>
                    </div>
                    <div className="bg-[var(--green)] h-0.5 w-1/2 mt-5 mb-5"></div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}