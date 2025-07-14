import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { desc } from "framer-motion/client";

export default function CreateAd() {
    const navigate = useNavigate();

    const [images, setImages] = useState([]);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [unit, setUnit] = useState("");
    const [price, setPrice] = useState(0);
    const [state, setState] = useState("");
    const [description, setDescription] = useState("");

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const newImages = [...images];
            newImages[index] = file;
            setImages(newImages);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("type", type);
            formData.append("quantity", quantity);
            formData.append("unit", unit);
            formData.append("price", price);
            formData.append("description", description);
            formData.append("state", state);

            images.forEach((image, index) => {
                if (image) {
                    formData.append("images", image);
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
            <div className="flex items-center gap-10 mb-6 pl-5 pr-10 lg:h-24 w-full border-b-2 border-[var(--yellow)]">
                <div className="flex flex-row items-center gap-3">
                    <img className="lg:w-[80px]" src="../../Assets/logo-renovmat.svg" alt="" />
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
            <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Créer votre annonce</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block font-medium">Titre</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Type de produit</label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full p-2 border rounded-md"
                        >
                            <option value="">Sélectionner</option>
                            {[
                                "Revetement", "Bois", "Isolation", "Peinture", "Plomberie",
                                "Electricité", "Fenetre", "Jardin", "Chauffage", "Outil",
                                "Maconnerie", "Autre"
                            ].map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block font-medium">Quantité</label>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="w-full p-2 border rounded-md"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block font-medium">Unité</label>
                            <select
                                value={unit}
                                onChange={(e) => setUnit(e.target.value)}
                                className="w-full p-2 border rounded-md"
                            >
                                <option value="">Sélectionner</option>
                                {["m2", "ml", "m3", "l", "kg", "u", "sac", "plaque"].map((u) => (
                                    <option key={u} value={u}>{u}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block font-medium">Prix</label>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                className="w-full p-2 border rounded-md"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block font-medium">État</label>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full p-2 border rounded-md"
                            >
                                <option value="">Sélectionner</option>
                                {["mauvais", "moyen", "bon", "très bon", "neuf"].map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium mb-2">Photos du produit (max 5)</label>
                        <div className="grid grid-cols-5 gap-2">
                            {[...Array(5)].map((_, index) => (
                                <label
                                    key={index}
                                    className="w-full aspect-square border border-dashed rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden relative cursor-pointer"
                                >
                                    {images[index] ? (
                                        <img src={images[index]} alt={`img-${index}`} className="object-cover w-full h-full" />
                                    ) : (
                                        <span className="text-gray-400 text-2xl">+</span>
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, index)}
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                    />
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block font-medium">Description</label>
                        <textarea
                            name=""
                            id=""
                            required
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full lg:h-32 p-2 border rounded-md resize-none"

                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[var(--green)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--yellow)] cursor-pointer"
                    >
                        Publier l'annonce
                    </button>
                </form>
            </div>
        </div>
    );
}
