import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom";

export default function reateAdBtn() {

    const isAuth = useAuth();
    const navigate = useNavigate();

    const moveToCreateAd = (e) => {
        e.preventDefault();

        if (isAuth) {
            navigate('/create_ad')
        } else {
            navigate('/login')
        }
    }

    return (
        <div>
            <button
                className="btn"
                onClick={moveToCreateAd}
            >
                + Créer une annonce
            </button>
        </div>
    )
}