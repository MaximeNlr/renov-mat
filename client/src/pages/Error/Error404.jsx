import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import MobileHeader from "../../Components/MobileHeader/MobileHeader"

export default function Error404() {
    return (
        <div>
            <Header />
            <MobileHeader />
            <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
                <h1 className="text-6xl font-extrabold text-[var(--green)]">404</h1>
                <p className="mt-4 text-xl font-semibold text-gray-700">
                    Oups, cette page n’existe pas.
                </p>
                <p className="mt-2 text-gray-500">
                    Il semble que vous vous soyez perdu...
                </p>
                <Link
                    to="/"
                    className="mt-6 inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-[var(--green)] rounded-lg hover:bg-green-700 transition"
                >
                    Retour à l’accueil
                </Link>
            </div>
        </div>
    )
}