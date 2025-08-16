import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { desc } from "framer-motion/client";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import Footer from "../../Components/Footer/Footer";
import AdForm from "../../Components/Ad_form/AdForm";

export default function CreateAd() {
    const navigate = useNavigate();

    const [ad, setAd] = useState({
        images: [],
        title: "",
        type: "",
        quantity: 0,
        unit: "",
        price: 0,
        state: "",
        description: ""
    })

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const newImages = [...(ad.images || [])];
            newImages[index] = file;
            setAd(prev => ({ ...prev, images: newImages }));
        }
    };

    const handleFormSubmit = async () => {
        try {
            const formData = new FormData();

            Object.entries(ad).forEach(([key, value]) => {
                if (key === "images" && Array.isArray(value)) {
                    value.forEach((img) => {
                        if (img) {
                            formData.append("images", img);
                        }
                    });
                } else {
                    formData.append(key, value);
                }
            });

            const options = {
                method: "POST",
                credentials: "include",
                body: formData
            };

            const response = await fetch("http://localhost:3000/api/ad/create_ad", options);
            const data = await response.json();
            if (data.success === true) {
                navigate('/profile')
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div className="hidden md:flex items-center gap-10 mb-6 pl-5 pr-10 lg:h-24 w-full border-b-2 border-[var(--yellow)]">
                <div className="flex flex-row items-center gap-3">
                    <div className="renov-title flex flex-row text-3xl">
                        <h1 className="renov-title flex text-2xl">
                            <span className="text-[var(--green)]">RENOV</span>
                            <span className="text-[var(--yellow)]">'MAT</span>
                        </h1>
                    </div>
                </div>
                <button
                    onClick={() => navigate("/")}
                    className="btn"
                >
                    Quitter
                </button>
            </div>
            <MobileHeader />
            <AdForm
                ad={ad}
                setAd={setAd}
                handleFormSubmit={handleFormSubmit}
                handleImageChange={handleImageChange}
                mode="create"
            />
            <Footer />
        </div>
    );
}
