import Icon from '@mui/material/Icon';
import './HeroSection.css';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneNoModal from '../../PhoneNoModal/PhoneNoModal';
import { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

export default function HeroSection() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <section id="hero" className="hero-section">
            <div className="img-background"></div>
            <div className="content-wrapper">
                <h1>Partenerul tău de <br />încredere în <br />excelența <br /> <span className="text-secondary">diagnosticului <br /> veterinar.</span></h1>
                <p>Oferim rezultate de laborator precise care permit medicilor <br /> veterinari și managerilor de ferme să ia decizii critice cu <br /> deplină încredere.</p>
                <div className="cta-group">
                    <a href={isMobile ? "tel:+37369211976" : undefined} onClick={!isMobile ? handleOpen : undefined} className="cta-btn lg icon-btn">
                        <Icon component={PhoneIcon} />
                        Comandă Teste
                    </a>
                    <a href="/#investigations" className="cta-btn lg secondary">
                        Vezi Listele Complete
                    </a>
                </div>
            </div>
            <PhoneNoModal open={open} onClose={handleClose} />
        </section>
    );
}