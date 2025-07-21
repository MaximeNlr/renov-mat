import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form)
      };
      const response = await fetch('http://localhost:3000/api/user/login', options);
      const data = await response.json();
      console.log(data);
      if (data.success === true) {
        setErrorMessage("");
        navigate('/');
      } else {
        setErrorMessage(data.message)
      }
    } catch (error) {
      console.error('Erreur lors de la connection de l\'utilisateur', error);
    }
  };

  return (
    <div>
      <div className="hidden md:flex">
        <Header />
      </div>
      <div className="flex pt-14 md:hidden">
        <MobileHeader />
      </div>
      <section className="min-h-screen px-4 py-10 flex mt-20 justify-center items-start">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">Se connecter</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm lg:text-base">
              <label className="md:w-36 font-medium text-gray-700">Adresse e-mail</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm lg:text-base">
              <label className="md:w-36 font-medium text-gray-700">Mot de passe</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
              />
            </div>
            {errorMessage && (
              <p className="text-red-600 text-center">{errorMessage}</p>
            )}
            <button type="submit" className="btn w-full">
              Se connecter
            </button>
          </form>
          <p className="text-sm text-center mt-5">
            Nouveau membre ?{" "}
            <Link to="/register" className="text-[var(--green)] underline">
              Créez un compte
            </Link>
          </p>      </div>
      </section>
    </div>

  );
}