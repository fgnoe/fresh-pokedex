
type NavBarProps = {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

const NavBar = ({darkMode, setDarkMode}: NavBarProps) => {
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <a className="btn">Pokedex</a>
            </div>
            <div className="navbar-end">
                <a className="text-xs">Dark Mode</a>
                <input type="checkbox" className="toggle ml-2" checked={darkMode} onClick={() => setDarkMode(!darkMode)} />
            </div>
        </div>
    )
}

export default NavBar;