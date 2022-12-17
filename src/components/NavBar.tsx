
type NavBarProps = {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
}

const NavBar = ({darkMode, setDarkMode, searchTerm, setSearchTerm}: NavBarProps) => {
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <a className="btn btn-ghost bg-base-300 capitalize">Pokedex</a>
            </div>
            <div className="form-control navbar-center pl-3 pr-3">
                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-40"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="navbar-end ml-3">
                <a className="text-xs">Dark Mode</a>
                <input
                    type="checkbox"
                    className="toggle ml-1"
                    checked={darkMode}
                    onClick={() => setDarkMode(!darkMode)}
                />
            </div>
        </div>
    )
}

export default NavBar;