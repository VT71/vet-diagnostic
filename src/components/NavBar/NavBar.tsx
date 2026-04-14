import { Link, NavLink, useLocation } from 'react-router';
import './NavBar.css';
import NavBarLink from './NavBarLink/NavBarLink';

export default function NavBar() {
    const location = useLocation();
    const isActiveLink = (path: string, hash: string = "") => {
        const currentPath = location.pathname;
        const currentHash = location.hash;

        return currentPath === path && currentHash === hash;
    }

    return (
        <nav>
            <div className="content-wrapper">
                <Link to="/" className="logo">IT Vet Diagnostic</Link>
                <ul>
                    <li>
                        <NavBarLink isActive={() => isActiveLink("/")} to="/" label="Diagnostic" />
                    </li>
                    <li>
                        <NavBarLink isActive={() => isActiveLink("/ferme")} to="/ferme" label="Ferme" />
                    </li>
                    <li>
                        <NavBarLink isActive={() => isActiveLink("/cabinete-veterinare")} to="/cabinete-veterinare" label="Cabinete Veterinare" />
                    </li>
                    <li>
                        <NavBarLink isActive={() => isActiveLink("/", "#intrebari-frecvente")} to="/#intrebari-frecvente" label="Întrebări frecvente" />
                    </li>
                </ul>
                <a href="tel:+37369211976" className="cta-btn">Comandă Teste</a>
            </div>
        </nav>);
}