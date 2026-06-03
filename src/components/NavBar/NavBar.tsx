import { useLocation } from 'react-router';
import './NavBar.css';
import NavBarLink from './NavBarLink/NavBarLink';
import MobileMenu from './MobileMenu/MobileMenu';
import { IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const navLinkData = [
        { to: "/#investigations", label: "Investigații" },
        { to: "/#faq", label: "Întrebări frecvente" },
        { to: "/#contact", label: "Contacte" }
    ];

    const location = useLocation();
    const isActiveLink = (path: string, hash: string = "") => {
        console.log("Checking against:", path, hash);
        const currentPath = location.pathname;
        const currentHash = location.hash;

        return currentPath === path && currentHash === hash;
    }

    return (
        <nav>
            <div className="content-wrapper">
                <div className="side-container">
                    <a href="/#hero" className="logo">
                        <img src="images/vet-logo.png" alt="IT Vet Diagnostic Logo" />
                    </a>
                </div>
                <ul>
                    {navLinkData.map((link, index) => (
                        <li key={index}>
                            <NavBarLink isActive={() => isActiveLink("/", `#${link.to.split("#")[1]}`)} to={link.to} label={link.label} />
                        </li>
                    ))}
                </ul>
                <div className="side-container">
                    <MobileMenu>
                        {navLinkData.map((link, index) => (
                            <NavBarLink key={index} isActive={() => isActiveLink("/", `#${link.to.split("#")[1]}`)} to={link.to} label={link.label} type="mobile" />
                        ))}
                    </MobileMenu>
                    <a href={isMobile ? "tel:+37369211976" : undefined} onClick={!isMobile ? handleOpen : undefined} className="cta-btn">Comandă Teste</a>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="phone-no-wrapper">
                    <div className="button-wrapper">
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <h2 className="phone-no-desktop-heading">Pentru a comanda teste sau a primi detalii suplimentare, vă rugăm să ne contactați telefonic:</h2>
                    <p className="phone-no-desktop">069211976</p>
                </div>
            </Modal>
        </nav >);
}