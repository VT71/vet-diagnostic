import HandshakeIcon from '@mui/icons-material/Handshake';
import { Icon } from '@mui/material';
import './Home.css';

export default function Home() {
    return (
        <div>
            <div className="banner">
                <div>
                    <Icon className="banner-icon" component={HandshakeIcon} />
                    
                </div>
            </div>
        </div>
    );
}