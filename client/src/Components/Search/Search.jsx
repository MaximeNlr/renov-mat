import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Search() {

    const navigate = useNavigate();

    const [searchedValue, setSearchedValue] = useState([]);
    const searchButton = async (e) => {
        e.preventDefault()
        try {
            const options = {
                method: 'GET',
                headers: { 'Content-type': 'application/json' },
            }
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/ad/ads`, options);
            const data = await response.json();
            console.log(data);
            if (success === true) {

            }
        } catch (error) {
            console.error('Erreur lors de la recherche', error);
        }
    }

    return (
        <div className="w-full">
            <form action="">
                <div className="flex items-center gap-3 p-2 border-2 border-[var(--green)] rounded-lg w-full text-sm lg:text-base	">
                    <img className="lg:w-[18px]" src="../../Assets/Search.svg" alt="search" />
                    <input
                        className="outline-0 w-full h-full"
                        type="text"
                        placeholder="Besoin de quelque chose ?"
                        onChange={(e) => setSearchedValue(e.target.value)}
                    />
                    <button onClick={searchButton}></button>
                </div>
            </form>
        </div>
    )
}