import { useLocation } from "react-router-dom"
import Header from "../../Components/Header/Header"
import MobileHeader from "../../Components/MobileHeader/MobileHeader"
import Footer from "../../Components/Footer/Footer"
import AdForm from "../../Components/Ad_form/AdForm"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function EditAd() {

    const location = useLocation()
    const navigate = useNavigate()
    const fetchedAd = location.state

    const [ad, setAd] = useState(fetchedAd || {
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
                        if (img) formData.append("images", img);
                    });
                } else {
                    formData.append(key, value);
                }
            });
            const options = {
                method: 'PUT',
                credentials: 'include',
                body: formData
            }
            const response = await fetch(`http://localhost:3000/api/ad/edit-ad/${ad._id}`, options)
            const data = await response.json();
            console.log(data);

            if (data.success === success) {
                navigate('/profile')
            }

        } catch (error) {

        }
    }


    return (
        <div>
            <Header />
            <MobileHeader />
            <AdForm
                ad={ad}
                setAd={setAd}
                handleFormSubmit={handleFormSubmit}
                handleImageChange={handleImageChange}
                mode="edit" />
        </div>
    )
}