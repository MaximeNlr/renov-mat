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
    <section className="min-h-screen px-4 lg:w-[600px]">
      <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">Se connecter</h2>
      <div className="max-w-md flex flex-col justify-center bg-white mt-28">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-row gap-2 items-center text-sm lg:text-base">
            <label className="block mb-1 lg:w-36 font-medium text-gray-700 whitespace-nowrap">Adresse e-mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
            />
          </div>
          <div className="flex flex-row gap-2 items-center text-sm lg:text-base">
            <label className="block mb-1 lg:w-36 font-medium text-gray-700 whitespace-nowrap">Mot de passe</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
            />
          </div>
          {errorMessage &&
            <div>
              <p className="text-red-600 text-center">{errorMessage}</p>
            </div>
          }
          <button
            type="submit"
            className="btn w-full"
          >
            Se connecter
          </button>
        </form>
      </div>
    </section>
  );
}