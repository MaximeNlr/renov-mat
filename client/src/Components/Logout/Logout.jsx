export default function Logout() {

    const logout = async (e) => {
        e.preventDefault();
        try {
            const options = {
                method: 'GET',
                headers: { 'Content-type': 'application/json' },
                credentials: 'include'
            };
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/logout`, options);
            const data = response.json();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button className="px-3 py-1 w-[60%] text-sm rounded-md border border-red-400 text-red-500 hover:bg-red-50 transition">
            Déconnexion
        </button>

    )
}