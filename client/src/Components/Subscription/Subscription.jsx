export default function Subscription({ user }) {
    return (
        <div className="flex flex-col justify-around items-center h-56  px-4 py-4 rounded-lg bg-[var(--yellow)] font-extrabold text-white">
            <div>
                <h2 className="text-2xl lg:text-3xl	">ABONNEMENT</h2>
            </div>
            <div className="flex gap-20 text-base lg:text-lg whitespace-nowrap">
                <p>Abonnement : <span>Premium</span></p>
                <p><span>5.99 €</span> /mois</p>
            </div>
            <div>
                <button
                    className="bg-white text-[var(--green)] cursor-pointer rounded-lg text-base lg:text-lg p-3"
                >
                    GÉRER MON ABONNEMENT
                </button>
            </div>
        </div>
    )
}