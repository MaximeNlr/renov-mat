import { useState, useEffect } from "react"

export default function AdForm({ ad, setAd, handleImageChange, handleFormSubmit, mode }) {


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { ...ad };
        handleFormSubmit(data);
    };

    return (
        <div className="max-w-4xl pt-14 md:pt-0 mx-auto mt-10 p-6 md:bg-white md:rounded-xl md:shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{mode === "create" ? "Créer votre annonce" : "Modifier votre annonce"}</h2>
            <form onSubmit={handleSubmit} className="space-y-6 text-base">
                <div>
                    <label className="block font-medium">Titre</label>
                    <input
                        type="text"
                        required
                        value={ad.title}
                        onChange={(e) => setAd(prev => ({ ...prev, title: e.target.value }))}
                        className="w-full h-11 p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-medium">Type de produit</label>
                    <select
                        value={ad.type}
                        required
                        onChange={(e) => setAd(prev => ({ ...prev, type: e.target.value }))}
                        className="h-11 min-w-[250px] md:w-full p-2 border rounded-md"
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
                            value={ad.quantity}
                            required
                            onChange={(e) => setAd(prev => ({ ...prev, quantity: e.target.value }))}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block font-medium">Unité</label>
                        <select
                            value={ad.unit}
                            required
                            onChange={(e) => setAd(prev => ({ ...prev, unit: e.target.value }))}
                            className="h-11 min-w-[250px] md:w-full p-2 border rounded-md"
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
                            value={ad.price}
                            required
                            onChange={(e) => setAd(prev => ({ ...prev, price: e.target.value }))}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block font-medium">État</label>
                        <select
                            value={ad.state}
                            required
                            onChange={(e) => setAd(prev => ({ ...prev, state: e.target.value }))}
                            className="h-11 min-w-[250px] md:w-full p-2 border rounded-md"
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
                                {ad.images[index] ? (
                                    <img src={ad.images[index]} alt={`img-${index}`} className="object-cover w-full h-full" />
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
                        value={ad.description}
                        onChange={(e) => setAd(prev => ({ ...prev, description: e.target.value }))}
                        className="w-full h-32 p-2 border rounded-md resize-none"

                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[var(--green)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--yellow)] cursor-pointer"
                >
                    {mode === "create" ? "Publier l'annonce" : "Mettre a jour"}
                </button>
            </form >
        </div >
    )
}