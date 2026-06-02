export interface AnimalGroupCardData {
    imgUrl: string;
    title: string;
    description: string[];
    // investigationPdfs: string[];
    investigationPdf: string;
}

export interface FaqItemData {
    question: string;
    answer: string;
}

export interface Constants {
    animalGroupData: AnimalGroupCardData[];
    faqData: FaqItemData[];
}

export const constants: Constants = {
    animalGroupData: [
        {
            imgUrl: 'images/pets.jpeg',
            title: "Animale de companie",
            description: ["Alergologie", "Anatomie Patologica", "Biochimie", "Biologie Moleculara", "Genetica", "Hematologie si Coagulare", "Imunologie", "Microbiologie", "Parazitologie", "Profile", "Serologie", "Toxicologie", "Vitamine"],
            // investigationPdfs: ["investigation-lists/cabinete1.jpg", "investigation-lists/cabinete2.png", "investigation-lists/cabinete3.png", "investigation-lists/cabinete4.png", "investigation-lists/cabinete5.png", "investigation-lists/cabinete6.png", "investigation-lists/cabinete7.png", "investigation-lists/cabinete8.png", "investigation-lists/cabinete9.png", "investigation-lists/cabinete10.png", "investigation-lists/cabinete11.png", "investigation-lists/cabinete12.png", "investigation-lists/cabinete13.png"]
            investigationPdf: "investigation-lists/cabinete.pdf"
        },
        {
            imgUrl: 'images/bovines.jpeg',
            title: "Bovine",
            description: ["Bacteriologie", "Hematologie", "Screening", "Biochimie", "Vitamine", "Toxicologie", "Anatomie Patologica", "Serologie", "Biologie Moleculara"],
            // investigationPdfs: ["investigation-lists/rumegatoare1.png", "investigation-lists/rumegatoare2.png", "investigation-lists/rumegatoare3.png", "investigation-lists/rumegatoare4.png", "investigation-lists/rumegatoare5.png", "investigation-lists/rumegatoare6.png", "investigation-lists/rumegatoare7.png", "investigation-lists/rumegatoare8.png"]
            investigationPdf: "investigation-lists/rumegatoare.pdf"
        },
        {
            imgUrl: 'images/pigs.jpeg',
            title: "Porcine",
            description: ["Bacteriologie", "Hematologie", "Biochimie", "Screening", "Vitamine", "Anatomie Patologica", "Serologie", "Biologie Moleculara"],
            // investigationPdfs: ["investigation-lists/suine1.png", "investigation-lists/suine2.png", "investigation-lists/suine3.png", "investigation-lists/suine4.png"]
            investigationPdf: "investigation-lists/suine.pdf"
        },
        {
            imgUrl: 'images/poultry.jpeg',
            title: "Păsări",
            description: ["Bacteriologie", "Hematologie", "Biochimie", "Vitamine", "Anatomie Patologica", "Serologie", "Biologie Moleculara"],
            // investigationPdfs: ["investigation-lists/pasari1.png", "investigation-lists/pasari2.png", "investigation-lists/pasari3.png"]
            investigationPdf: "investigation-lists/pasari.pdf"
        },
        {
            imgUrl: 'images/horses.jpeg',
            title: "Ecvine",
            description: ["Bacteriologie", "Hematologie", "Screening", "Biochimie", "Vitamine", "Toxicologie", "Anatomie Patologica", "Teste Avansate"],
            // investigationPdfs: ["investigation-lists/ecvine1.png", "investigation-lists/ecvine2.png", "investigation-lists/ecvine3.png", "investigation-lists/ecvine4.png"]
            investigationPdf: "investigation-lists/ecvine.pdf"
        }
    ],
    faqData: [
        {
            question: "Pot fi făcute analize de laborator în cadrul laboratorului SynevoVet și la alte animale/păsări decât cele menționate pe website ?",
            answer: "La necesitate în colaborare cu laboratorul se pot discuta separat și alte specii de animale/păsări (ex. animale/păsări exotice) pentru petrecerea analizelor de laborator atât în cadrul laboratorului  SynevoVet cît și în alte laboratoare din Uniunea Europeană la fel acreditate de instituțiile  Europene cu care există o colaborare îndelungată."
        },
        {
            question: "Animalul meu are nevoie de analize chiar dacă este sănătos?",
            answer: "Chiar dacă animalul nu prezintă semne de boală laboratorul, recomandăm investigații de laborator cu privire la starea de sănătate a animalelor de companie ce va permite monitorizarea stării de sănătate și  profilaxia unor afecțiuni grave de sănătate. Pentru animalele tinere: câini,pisici (până la 6-8 ani) se recomandă o dată pe an, pentru animale bătrâne de două ori pe an. Există o listă de investigații recomandabile ,,Control de sănătate,, afișat pe website. În cazul animalelor/păsărilor de fermă aceste investigații vor avea un support economic important, lista acestor investigații este stabilită de către medicul veterinar al gospodăriei."
        },
        {
            question: "Cum pot beneficia de serviciile de laborator SynevoVet ?",
            answer: "Medicul veterinar din cadrul cabinetului veterinar prelevă de la animal proba de laborator, o pregătește și păstrează în cadrul cabinetului veterinar, întocmește cererea de modelul stabilit de laborator unde menționează tipul de analize ce urmează a fi efectuate. Reprezentantul companiei SRL,,IT Vet Diagnostic,, la timpul stabilit preia proba de la cabinetul veterinar și o expediază către laboratorul SynevoVet România. Rezultatele investigațiilor de laborator sunt expediate cabinetului veterinar care le pune la dispoziție deținătorului de animal. Pentru animalele de fermă procedura este asemănătoare."
        },
        {
            question: "Dacă sunt proprietarul unui animal, as putea singur să prelevez și să predau proba pentru investigații de laborator?",
            answer: "Numai un medic veterinar din cadrul unui cabinet veterinar sau unei gospodării zootehnice poate preleva, pregăti și transmite proba pentru analize de laborator. Prelevarea și pregătirea corectă a probei va asigura acceptarea de către laborator al probei și respectiv un rezultat obiectiv."
        }
    ]
}