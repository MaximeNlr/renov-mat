export default function Subscription({ user }) {
    return (
        <div className="flex flex-col justify-around items-center w-1/3 h-56 rounded-lg bg-[var(--yellow)] font-extrabold text-white">
            <div>
                <h2 className="text-2xl lg:text-3xl	">ABONNEMENT</h2>
            </div>
            <div className="flex gap-20 text-base lg:text-lg">
                <p>Abonnement {user.sub}</p>
                <p>{user.sub_amount}/mois</p>
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