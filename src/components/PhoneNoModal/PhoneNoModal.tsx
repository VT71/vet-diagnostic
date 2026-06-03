import './PhoneNoModal.css';
import { IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function PhoneNoModal({ open, onClose } : { open: boolean, onClose: () => void }) {
    return (<Modal
        open={open}
        onClose={onClose}
    >
        <div className="phone-no-wrapper">
            <div className="button-wrapper">
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </div>
            <h2 className="phone-no-desktop-heading">Pentru a comanda teste sau a primi detalii suplimentare, vă rugăm să ne contactați telefonic:</h2>
            <p className="phone-no-desktop">069211976</p>
        </div>
    </Modal>);
}