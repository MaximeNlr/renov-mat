export default function Logout() {

    const logout = async (e) => {
        e.preventDefault();

        try {
            const options = {
                method: 'GET',
                headers: { 'Content-type': 'application/json' },
                credentials: 'include'
            };
            const response = await fetch('http://localhost:3000/api/auth/logout', options);
            const data = response.json();
            console.log(data);
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