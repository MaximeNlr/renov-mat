import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [image, setImage] = useState(null);
  const [passError, setPassError] = useState('');

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    birthday: "",
    email: "",
    adress: "",
    gender: "",
    password: "",
    image: null
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
    setForm({ ...form, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstname', form.firstname);
    formData.append('lastname', form.lastname);
    formData.append('birthday', form.birthday);
    formData.append('email', form.email);
    formData.append('adress', form.adress);
    formData.append('gender', form.gender);
    formData.append('password', form.password);
    formData.append('image', form.image);

    try {
      const options = {
        method: 'POST',
        credentials: 'include',
        body: formData
      }
      const response = await fetch('http://localhost:3000/api/auth/signup', options);
      const data = await response.json();
      console.log(data);
      if (data.passwordErr) {
        setPassError(data.passwordErr);
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription', error);
    }
  }

  return (
    <div>
      <div className="hidden md:flex">
        <Header />
      </div>
      <div className="flex pt-14 md:hidden">
        <MobileHeader />
      </div>
      <section className="min-h-screen px-4 py-10 flex justify-center items-start">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">Créer un compte</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col lg:flex-row gap-4 text-sm lg:text-base">
              <div className="w-full">
                <label className="block mb-1 font-medium text-gray-700">Prénom</label>
                <input
                  type="text"
                  name="firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
                />
              </div>
              <div className="w-full">
                <label className="block mb-1 font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
                />
              </div>
            </div>
            <div className="text-sm lg:text-base">
              <label className="block mb-1 font-medium text-gray-700">Adresse</label>
              <input
                type="text"
                name="adress"
                value={form.adress}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 text-sm lg:text-base">
              <div className="w-full">
                <label className="block mb-1 font-medium text-gray-700">Genre</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
                >
                  <option value="">Sélectionnez le genre</option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block mb-1 font-medium text-gray-700">Date de naissance</label>
                <input
                  type="date"
                  name="birthday"
                  value={form.birthday}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
                />
              </div>
            </div>
            <div className="text-sm lg:text-base">
              <label className="block mb-1 font-medium text-gray-700">Adresse email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
              />
            </div>
            <div className="text-sm lg:text-base">
              <label className="block mb-1 font-medium text-gray-700">Mot de passe</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
              />
            </div>
            {passError && (
              <p className="text-red-600 text-center">{passError}</p>
            )}

            <button
              type="submit"
              className="btn w-full"
            >
              S’inscrire
            </button>
          </form>
        </div>
      </section>

    </div>

  );
}
