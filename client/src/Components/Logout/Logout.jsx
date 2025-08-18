export default function Logout() {

    const logout = async (e) => {
        e.preventDefault();
        const API_URL = import.meta.env.VITE_API_URL;
        console.log('api --->', API_URL);
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
        <div>
            <button
                onClick={logout}
                className="btn"
            >
                Déconnexion
            </button>
        </div>
    )
}