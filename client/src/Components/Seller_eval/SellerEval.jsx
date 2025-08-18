

export default function SellerEval() {

    const userEval = [
        {
            name: "anna06200",
            when: "il y a 3 jours",
            text: "super qualité !",
            image: '../../Assets/users_img/user1.png'
        },
        {
            name: "max.duma",
            when: "il y a 9 jours",
            text: "Vendeur au top, je recommande",
            image: "../../Assets/users_img/user2.png"
        },
        {
            name: "thomas342",
            when: "il y a 15 jours",
            text: "Le vendeur m'a conseillé pour la pose, allez y les yeux fermés",
            image: "../../Assets/users_img/user3.png"
        },
        {
            name: "brad0606",
            timstamp: "il y a 15 jours",
            text: "Nickel !",
            image: "../../Assets/users_img/user4.png"
        },
        {
            name: "jeremy.dct",
            when: "il y a 1 mois",
            text: "Remise trés rapide",
            image: "../../Assets/users_img/user5.png"
        },
        {
            name: "emma.blt",
            when: "il y a 2 mois",
            text: "J'avais des questions a propos de l'article et il m'a répondu en moins de 10 minutes. Je recommande",
            image: "../../Assets/users_img/user6.png"
        }
    ]

    return (
        <div className="flex flex-col md:flex-row h-fit">
            <div className="flex flex-col justify-around gap-5 md:w-1/2 md:ml-14">
                {userEval.map((index) => (
                    <div className="flex flex-row gap-2">
                        <img
                            src={index.image}
                            alt=""
                            className="h-8 w-8"
                        />
                        <div>
                            <div className="flex flex-row gap-1 items-center">
                                <h3 className="font-bold">{index.name}</h3>
                                <p className="text-[0.8rem]">{index.when}</p>
                            </div>
                            <div className="flex flex-row mb-2">
                                <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                <img className="w-[15px]" src="../../Assets/Stars/full-star.svg" alt="icon note des utilisateurs" />
                                <img className="w-[15px]" src="../../Assets/Stars/empty-star.svg" alt="icon note des utilisateurs" />
                            </div>
                            <p>{index.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}