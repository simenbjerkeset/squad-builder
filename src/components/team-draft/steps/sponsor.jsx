import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import SPONSORS from '../../../data/sponsors/sponsors';

const Sponsor = () => {
    const { updateSponsor, nextStep } = useContext(GlobalContext);

    let sponsorAlternatives = [];
    let potentialAlternatives = SPONSORS.slice(0);

    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * potentialAlternatives.length);
        sponsorAlternatives.push(potentialAlternatives[randomNumber]);
        potentialAlternatives.splice(randomNumber, 1);
    }

    const handleSelection = event => {
        updateSponsor(sponsorAlternatives[event.target.value]);
        nextStep();
    }

    return(
        <div className="sponsor">
            <h1>Pick a sponsor</h1>
            <div className="alternatives">
            {
                sponsorAlternatives.map((sponsor, i) => {
                    return <button onClick={handleSelection} key={sponsor.name} value={i}>{sponsor.name}</button>
                })
            }
            </div>
        </div>
    )
}

export default Sponsor;