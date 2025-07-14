import Search from "../Search/Search"

export default function MobileHeader () {
    return (
        <header className="w-full pl-1.5 pr-1.5">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <img src="../../Assets/Header/header-menu.svg" alt="logo du menu pour le header"/>
                </div>
                <div className="flex items-center gap-2">
                    <img src="../../Assets/logo-renovmat.svg" alt="logo renov'mat"/>
                    <h1>RENOV'MAT</h1>
                </div>
                <div className="flex items-center">
                    <img src="../../Assets/ShoppingCart.svg" alt="panier dans le header" />
                </div>
            </div>
            <div>
                <Search />
            </div>
        </header>
    )
}