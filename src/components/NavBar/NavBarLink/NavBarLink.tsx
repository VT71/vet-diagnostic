import { Link } from "react-router";

export default function NavBarLink({isActive, to, label}: {isActive: () => boolean, to: string, label: string}) {
    return (
        <>
            <Link to={to} className={isActive() ? "nav-link active" : "nav-link"}>
                {label}
                {isActive() ? <div className="active-line"></div> : null}
            </Link>
        </>
    );
}