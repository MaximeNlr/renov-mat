import Header from '../../Components/Header/Header';
import MobileHeader from '../../Components/MobileHeader/MobileHeader';
import Promo from '../../Components/Promo/Promo';
import Footer from '../../Components/Footer/Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function SearchedProduct() {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProduct = localStorage.getItem('product');
        if (storedProduct) {
            setProducts(JSON.parse(storedProduct));
        }
    }, [])

    const selectedProduct = (product) => {
        localStorage.setItem('selected product', JSON.stringify(product));
        navigate('/selected-product');
    }

    return (
        <div className="selected-product-container">
            <div>
                <Header />
            </div>
            <div>
                <MobileHeader />
            </div>
            <div className="mb-8">
                <Promo />
            </div>
            <div className="flex flex-row gap-[10%] font-bold text-2xl pl-2">
                <div className="flex flex-row gap-1.5">
                    <img src="../../Assets/settings.svg" alt="" />
                    <h2>FILTRES</h2>
                </div>
                <div>
                    <h1>VOTRE RECHERCHE : “MARBRE NOIR”</h1>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col pl-2.5 lg:w-[200px]">
                    <div className="w-[150px] pl-2">
                        <div>
                            <h3 className=" mt-2.5">PRIX</h3>
                            <div className="flex flex-row gap-3 text-[0.9rem]">
                                <div className="border-2 border-[var(--yellow)] rounded-[10px] pr-2 pl-2 w-1/2">
                                    <input className="w-full outline-0" type="text" placeholder="min" />
                                </div>
                                <div className="border-2 border-[var(--yellow)] rounded-[10px] pr-2 pl-2 w-1/2">
                                    <input className="w-full outline-0" type="text" placeholder="max" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h3 className="">CATÉGORIE</h3>
                            <div className="flex flex-col gap-1 ">
                                <div>
                                    <input className="custom-checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">CARRELAGE</label>
                                </div>
                                <div>
                                    <input className="custom-checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">PAPIER PEINT</label>
                                </div>
                                <div>
                                    <input className="custom-checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">COLLE</label>
                                </div>
                                <div>
                                    <input className="custom-checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">BOIS</label>
                                </div>
                                <div>
                                    <div className="flex flex-row gap-1">
                                        <img src="../../Assets/chevron-bas.svg" alt="icon chevron vers le bas" />
                                        <p className="text-[0.9rem]">VOIR PLUS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h3 className="">QUANTITÉ</h3>
                            <div className="flex flex-col gap-1">
                                <div>
                                    <input className="custom-checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">PETITE</label>
                                </div>
                                <div>
                                    <input className="custom-checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">MOYENNE</label>
                                </div>
                                <div>
                                    <input className="custom-checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">GRANDE</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h3 className="">DISTANCE</h3>
                            <div className="flex flex-col gap-1">
                                <div className="flex flex-row border-2 border-[var(--yellow)] rounded-[10px]">
                                    <div className="pr-2 pl-2 w-1/3">
                                        <input className="text-[0.8rem]" type="text" placeholder="DE ?" />
                                    </div>
                                    <div className=" border-l-2 border-[var(--yellow)] pr-2 pl-1 w-1/2">
                                        <input className="text-[0.8rem]" type="text" placeholder="MA POSITION" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input className="custom-checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">CARRELAGE</label>
                                </div>
                                <div>
                                    <input className="custom-checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">PAPIER PEINT</label>
                                </div>
                                <div>
                                    <input className="custom-checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">COLLE</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h3 className="">ÉTAT</h3>
                            <div className="flex flex-col gap-1">
                                <div>
                                    <input className="custom-checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">CARRELAGE</label>
                                </div>
                                <div>
                                    <input className="custom-checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">PAPIER PEINT</label>
                                </div>
                                <div>
                                    <input className="custom-checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">COLLE</label>
                                </div>
                                <div>
                                    <input className="custom-checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">CARRELAGE</label>
                                </div>
                                <div>
                                    <input className="custom-checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">PAPIER PEINT</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 w-full lg:ml-[100px] mt-10 ">
                    {products.map((product, index) => (
                        <div className="lg:w-[270px] border-1 border-gray-300 flex flex-col justify-center
                            items-center lg:h-[300px] mb-8 cursor-pointer hover:lg:scale-[1.1] duration-100"
                            key={index}
                            onClick={() => selectedProduct(product)}
                        >
                            <div className="flex flex-row w-full justify-center items-center gap-3">
                                <div>
                                    <img src="../../Assets/left-arrow.svg" alt="" />
                                </div>
                                <div>
                                    <img src={product.img} alt="" />
                                </div>
                                <div>
                                    <img src="../../Assets/right-arrow.svg" alt="" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 mt-1">
                                <h3 className="text-2xl font-bold">{product.name}</h3>
                                <div className="flex flex-row gap-1.5 justify-center">
                                    <p>{product.quantity}</p>
                                    <p>-</p>
                                    <p>{product.price}€</p>
                                </div>
                                <p className='text-center'>{product.state}</p>
                                <div className='flex w-1/2 gap-1.5'>
                                    <div>
                                        <p>{product.seller}</p>
                                    </div>
                                    <div className='flex flex-row'>
                                        <img className='w-[20px]' src="../../Assets/Stars/full-star.svg" alt="" />
                                        <img className='w-[20px]' src="../../Assets/Stars/full-star.svg" alt="" />
                                        <img className='w-[20px]' src="../../Assets/Stars/full-star.svg" alt="" />
                                        <img className='w-[20px]' src="../../Assets/Stars/empty-star.svg" alt="" />
                                        <img className='w-[20px]' src="../../Assets/Stars/empty-star.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div >
    )
}