import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdDone } from "react-icons/md";
import { motion } from "framer-motion";


export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogged, setIsLogged] = useState(false)

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
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, options);
      const data = await response.json();
      if (data.success === true) {
        setErrorMessage("");
        setIsLogged(data.success)
      } else {
        setErrorMessage(data.message)
      }
    } catch (error) {
      console.error('Erreur lors de la connection de l\'utilisateur', error);
    }
  };

  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    let timer;
    if (isLogged && countdown > 0) {
      timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    }
    if (countdown === 0) {
      window.location.href = "/";
    }
    return () => clearTimeout(timer);
  }, [isLogged, countdown]);

  return (
    <div>
      <Header />
      <MobileHeader />
      <div className="min-h-screen px-4 py-10 flex mt-20 justify-center items-start">
        {!isLogged &&
          <div className="w-full max-w-lg bg-white p-6 rounded-lg">
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
            </p>
          </div>
        }
        {isLogged && (
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 border-4 border-[var(--green)] shadow-lg"
            >
              <MdDone className="text-[var(--green)] text-5xl" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center mt-3 text-lg font-semibold text-gray-700"
            >
              Connexion réussie
              <span className="text-center">Vous allez être redirigé vers la page d’accueil</span>
            </motion.p>
          </div>
        )}
      </div>
    </div>

  );
}