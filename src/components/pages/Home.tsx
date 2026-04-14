import HandshakeIcon from '@mui/icons-material/Handshake';
import { Icon } from '@mui/material';
import './Home.css';

export default function Home() {
    return (
        <div>
            <div className="banner">
                <div className="content-wrapper">
                    <Icon className="banner-icon" component={HandshakeIcon} />
                    <p>Partener exclusiv cu <span className="company-name">COMPANIAX</span> în Republica Moldova, oferind servicii de laborator premium.</p>
                </div>
            </div>
        </div>
    );
}