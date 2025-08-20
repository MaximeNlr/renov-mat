import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { TiShoppingCart } from "react-icons/ti";

export default function CardIcon() {

    const [card, setCard] = useState([]);

    useEffect(() => {
        const storedCard = localStorage.getItem('card');
        if (storedCard) {
            setCard(JSON.parse(storedCard));
        }
    }, []);

    return (
        <div className="cursor-pointer relative">
            <Link to="/card">
                <TiShoppingCart className="text-[var(--green)] text-2xl" />
            </Link>
            {card.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--green)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {card.length}
                </span>
            )}
        </div>
    )
}