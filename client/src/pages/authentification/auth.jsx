import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import Login from "../../Components/login/Login";
import Register from "../../Components/register/Register";
import Promo from "../../Components/Promo/Promo";

export default function Auth() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <MobileHeader />
            </div>
            <div>
                <Promo />
            </div>
            <div className="flex flex-row w-full justify-center pt-20">
                <div>
                    <Login />
                </div>
                <div>
                    <Register />
                </div>
            </div>
        </div>
    )
}