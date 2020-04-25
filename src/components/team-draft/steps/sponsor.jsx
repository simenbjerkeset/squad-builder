import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import SPONSORS from '../../../data/sponsors/sponsors';

const Sponsor = () => {
    const { updateSponsor, nextStep } = useContext(GlobalContext);

    const handleSelection = event => {
        const { value } = event.target;
        updateSponsor(value);
        nextStep();
    }

    return(
        <div className="sponsor">
            <h1>Pick a sponsor</h1>
            {
                SPONSORS.map(sponsor => {
                    return <button onClick={handleSelection} key={sponsor.name} value={sponsor.name}>{sponsor.name}</button>
                })
            }
        </div>
    )
}

export default Sponsor;