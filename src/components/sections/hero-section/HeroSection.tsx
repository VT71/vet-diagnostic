import Icon from '@mui/material/Icon';
import './HeroSection.css';
import PhoneIcon from '@mui/icons-material/Phone';

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="img-background"></div>
            <div className="content-wrapper">
                <h1>Partenerul tău de <br />încredere în <br />excelența <br /> <span className="text-secondary">diagnosticului <br /> veterinar.</span></h1>
                <p>Oferim rezultate de laborator precise care permit medicilor <br /> veterinari și managerilor de ferme să ia decizii critice cu <br /> deplină încredere.</p>
                <div className="cta-group">
                    <a href="tel:+37369211976" className="cta-btn lg icon-btn">
                        <Icon component={PhoneIcon} />
                        Comandă Teste
                    </a>
                    <a className="cta-btn lg secondary">
                        Vezi Lista de Prețuri
                    </a>
                </div>
            </div>
        </section>
    );
}