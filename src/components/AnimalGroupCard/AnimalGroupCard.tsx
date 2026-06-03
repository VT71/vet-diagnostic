import './AnimalGroupCard.css';
import { Chip, Icon, IconButton, Modal } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery, useTheme } from '@mui/material';

export default function AnimalGroupCard({ title, investigationList, backgroundImg, investigationPdf }: { title: string, investigationList: string[], backgroundImg: string, investigationPdf: string }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

    return (<div className="animal-group-card">
        <div className="card-img" style={{ background: `url(${backgroundImg})`, backgroundSize: 'cover' }}>
        </div>
        <div className="main-content">
            <h3>{title}</h3>
            <ul className='temp-list'>
                {investigationList.map((investigation, index) => (
                    <li key={index}>
                        <Chip label={investigation} />
                    </li>
                ))}
            </ul>
            {/* <ul>
                {investigationList.map((investigation, index) => (
                    <li key={index}>
                        <Icon component={CheckCircleOutlineOutlinedIcon} />
                        {investigation}
                    </li>
                ))}
            </ul> */}
            <a className="card-action" target="_blank" href={isMobileOrTablet ? investigationPdf : undefined} onClick={!isMobileOrTablet ? handleOpen : undefined }>
                <Icon component={VisibilityIcon} />
                Vizualizează Lista Completă
            </a>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
        >
            <div className="pdf-list-wrapper">
                <div className="button-wrapper">
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                {/* {investigationPdfs.map((pdf, index) => ( */}
                {/* <div className="pdf-img-wrapper" key={index}><img src={pdf} /></div> */}
                <iframe
                    src={investigationPdf}
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                />
                {/* ))} */}
            </div>
        </Modal>
    </div>);
}