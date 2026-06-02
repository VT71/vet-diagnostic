import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FaqSection.css';
import { constants } from '../../../utils/constants';

export default function FaqSection() {
    return (<section id="faq" className="faq-section">
        <div className="content-wrapper">
            <h2 className="section-heading">Întrebări frecvente</h2>
            <ul className="faq-list">
                {constants.faqData.map((item, key) => (
                    <Accordion key={key}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id={`panel-header`}
                        >
                            <h4>{item.question}</h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>{item.answer}</p>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </ul>
        </div>
    </section>);
}