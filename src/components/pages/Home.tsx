import HandshakeIcon from '@mui/icons-material/Handshake';
import { Icon } from '@mui/material';
import './Home.css';
import HeroSection from '../sections/HeroSection/HeroSection';
import AnimalGroupsGridSection from '../sections/AnimalGroupsGridSection/AnimalGroupsGridSection';
import FaqSection from '../sections/FaqSection/FaqSection';

export default function Home() {
    return (
        <div className="home">
            <div className="banner">
                <div className="content-wrapper">
                    <Icon className="banner-icon" component={HandshakeIcon} />
                    <p>Partener în Republica Moldova cu <span className="company-name">SynevoVet România</span>, oferind servicii de laborator de calitate.</p>
                </div>
            </div>
            <HeroSection />
            <AnimalGroupsGridSection />
            <FaqSection />
        </div>
    );
}