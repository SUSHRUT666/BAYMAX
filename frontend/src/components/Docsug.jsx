import { useState } from 'react';

const doctorData = {
    myopia: { name: "Alex Cors", phone: "555-1234" },
    pox: { name: "Jamie Oliver", phone: "555-5678" },
    malaria: { name: "Harry Kane", phone: "555-2468" },
    "skin infection": { name: "Pablo Neruda", phone: "555-7890" },
    dengue: { name: "John Doe", phone: "555-1357" },
    tuberculosis: { name: "Remi Saanders", phone: "555-2468" },
    diabetes: { name: "Emma Watson", phone: "555-4567" },
    hypertension: { name: "Tom Hanks", phone: "555-6789" },
    arthritis: { name: "Oprah Winfrey", phone: "555-2345" },
    asthma: { name: "Will Smith", phone: "555-9876" },
    depression: { name: "Dwayne Johnson", phone: "555-5432" },
    anxiety: { name: "Scarlett Johansson", phone: "555-8765" },
    polio: { name: "Natalie Portman", phone: "555-1111" },
    tetanus: { name: "Chris Hemsworth", phone: "555-2222" },
    flu: { name: "Jennifer Lawrence", phone: "555-3333" },
    hepatitis_b: { name: "Robert Downey Jr.", phone: "555-4444" },
    hepatitis_a: { name: "Gal Gadot", phone: "555-5555" },
    rubella: { name: "Tom Cruise", phone: "555-6666" },
    whooping_cough: { name: "Meryl Streep", phone: "555-7777" },
    mumps: { name: "Leonardo DiCaprio", phone: "555-8888" },
    chickenpox: { name: "Anne Hathaway", phone: "555-9999" },
    diphtheria: { name: "Ben Affleck", phone: "555-0000" },
    copd: { name: "Hugh Jackman", phone: "555-1212" },
    epilepsy: { name: "Emma Stone", phone: "555-1313" },
    fibromyalgia: { name: "Ryan Reynolds", phone: "555-1414" },
    endometriosis: { name: "Jessica Alba", phone: "555-1515" },
    sickle_cell_anemia: { name: "Michael B. Jordan", phone: "555-1616" },
    sleep_apnea: { name: "Katy Perry", phone: "555-1717" },
    obesity: { name: "Adele", phone: "555-1818" },
    eczema: { name: "Megan Fox", phone: "555-1919" },
    psoriasis: { name: "Zayn Malik", phone: "555-2020" },
    gout: { name: "Chris Evans", phone: "555-2121" },
    shingles: { name: "Emma Roberts", phone: "555-2222" },
    osteoarthritis: { name: "Robert Pattinson", phone: "555-2323" },
    celiac_disease: { name: "Taylor Swift", phone: "555-2424" },
    lactose_intolerance: { name: "Kendall Jenner", phone: "555-2525" },
    irritable_bowel_syndrome: { name: "Gigi Hadid", phone: "555-2626" },
    heart_disease: { name: "Brad Pitt", phone: "555-2727" },
    stroke: { name: "Angelina Jolie", phone: "555-2828" },
    kidney_stones: { name: "Matthew McConaughey", phone: "555-2929" },
    liver_disease: { name: "Jessica Chastain", phone: "555-3030" },
    pancreatitis: { name: "Ben Stiller", phone: "555-3131" },
    thyroid_disorder: { name: "Mila Kunis", phone: "555-3232" },
    appendicitis: { name: "Vince Vaughn", phone: "555-3333" },
    diverticulitis: { name: "Sofia Vergara", phone: "555-3434" },
    chronic_fatigue_syndrome: { name: "Rihanna", phone: "555-3535" },
    multiple_sclerosis: { name: "Halle Berry", phone: "555-3636" },
    parkinsons_disease: { name: "Johnny Depp", phone: "555-3737" },
    alzheimers_disease: { name: "Anne Hathaway", phone: "555-3838" },
    autism_spectrum_disorder: { name: "Selena Gomez", phone: "555-3939" },
    bipolar_disorder: { name: "Kanye West", phone: "555-4040" },
    schizophrenia: { name: "Lady Gaga", phone: "555-4141" },
    post_traumatic_stress_disorder: { name: "Chris Rock", phone: "555-4242" },
    obsessive_compulsive_disorder: { name: "Will Ferrell", phone: "555-4343" },
    social_anxiety_disorder: { name: "Emma Stone", phone: "555-4444" },
    seasonal_affective_disorder: { name: "Demi Lovato", phone: "555-4545" },
    attention_deficit_hyperactivity_disorder: { name: "Kevin Hart", phone: "555-4646" },
    dyslexia: { name: "Jessica Biel", phone: "555-4747" },
    migraine: { name: "Chris Pratt", phone: "555-4848" },
    tinnitus: { name: "Gwyneth Paltrow", phone: "555-4949" },
    vertigo: { name: "Jason Momoa", phone: "555-5050" },
    chronic_pain: { name: "Kate Winslet", phone: "555-5151" },
    carpal_tunnel_syndrome: { name: "Robert De Niro", phone: "555-5252" },
    plantar_fasciitis: { name: "Julia Roberts", phone: "555-5353" },
    hernia: { name: "Matthew Broderick", phone: "555-5454" },
    sciatica: { name: "Ryan Gosling", phone: "555-5555" },
    varicose_veins: { name: "Drew Barrymore", phone: "555-5656" },
    cold_sores: { name: "Cameron Diaz", phone: "555-5757" },
    sinusitis: { name: "Ben Affleck", phone: "555-5858" },
    tonsillitis: { name: "Katherine Heigl", phone: "555-5959" },
    urinary_tract_infection: { name: "Mandy Moore", phone: "555-6060" }
};

function DocSug() {
    const [disease, setDisease] = useState('');
    const [doctor, setDoctor] = useState(null);

    const handleInputChange = (event) => {
        setDisease(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const recommendedDoctor = doctorData[disease.toLowerCase()];
        setDoctor(recommendedDoctor ? recommendedDoctor : { name: "Doctor not found", phone: "" });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Doctor Recommendation System</h1>
            <form onSubmit={handleSubmit} className='py-4'>
                <input
                    type="text"
                    value={disease}
                    onChange={handleInputChange}
                    placeholder="Enter disease"
                    required
                    className='border border-black'
                />
                <button type="submit" className='rounded bg-blue-900 p-2 m-2 text-white'>Get Doctor</button>
            </form>
            {doctor && (
                <div>
                    <h2>Recommended Doctor: {doctor.name}</h2>
                    <p>Phone: {doctor.phone}</p>
                </div>
            )}
        </div>
    );
}

export default DocSug;
