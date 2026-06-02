import './Footer.css';

export default function Footer() {
    return (<footer className="footer">
        <div id="contact" className="content-wrapper">
            <a href="/#hero" className="logo">
                <img src="images/vet-logo.png" alt="IT Vet Diagnostic Logo" />
            </a>
            <a className="contact-link" href="tel:+37369211976">+373 69 211 976</a>
            <a className="contact-link" href="mailto:vetdiagnosticmd@gmail.com">vetdiagnosticmd@gmail.com</a>
            <p>© 2026 IT VET DIAGNOSTIC S.R.L.</p>
        </div>
    </footer>);
}   