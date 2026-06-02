import './AnimalGroupsGridSection.css';
import AnimalGroupCard from "../../AnimalGroupCard/AnimalGroupCard";
import { constants } from '../../../utils/constants';

export default function AnimalGroupsGridSection() {
    return (<section id="investigations" className="animal-groups-grid-section">
        <div className="content-wrapper">
            <h2 className="section-heading">Investigații</h2>
            <div className="cards-wrapper">
                {constants.animalGroupData.map((data, index) => (
                    <AnimalGroupCard
                        key={index}
                        title={data.title}
                        investigationList={data.description}
                        backgroundImg={data.imgUrl}
                        investigationPdf={data.investigationPdf}
                    />
                ))}
            </div>
        </div>
    </section>);
}