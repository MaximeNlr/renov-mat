import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { useState, useEffect } from "react"

export default function Category() {

    const [paints, setPaints] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await fetch('/data/category.json');
                const data = await response.json();
                setPaints(data);
                console.log(data);
            } catch (error) {
                console.error("erreur lors de la recupération des catégories", error);
            }
        }
        fetchCategory();
    }, [])

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="bg-[var(--yellow)] text-white text-center p-5">
                <h1 className="font-bold text-4xl">PEINTURE</h1>
                <p>
                    Envie de refaire le mur de la cuisine que vous ne supportez plus depuis
                    déjà 5 ans ou besoin de repasser sur le coup de feutre que votre neveu à fait sur le mur du salon ?
                </p>
                <p>
                    On a la peinture qu’il vous faut !  Peinture pour bois, peinture pour métal,
                    peinture pour mur intérieur, peinture pour plafond, peinture pour façade,
                    peinture pour sol, peinture pour carrelage, peinture pour radiateur, peinture pour meuble,
                    peinture pour cuisine et salle de bain, peinture pour extérieur, peinture pour fer, peinture pour plastique, peinture pour parquet, peinture pour toit...
                </p>
            </div>
            <div className="grid grid-cols-4 m-auto gap-[50px] lg:pt-[60px] lg:pr-[80px] lg:pl-[80px]">
                {paints.map((paint, index) => (
                    <div
                        key={index}
                        style={{ backgroundImage: `url(${paint.img})` }}
                        className=" flex items-center justify-center lg:w-[300px] h-[300px] bg-cover rounded-2xl cursor-pointer hover:lg:scale-[1.1] hover:transition-[0.5s] transition-[0.5s]"
                    >
                        <div className="flex items-center text-center justify-center rounded-[50%] h-[150px] w-[150px] opacity-70 bg-white">
                            <h3 className="font-extrabold">{paint.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}