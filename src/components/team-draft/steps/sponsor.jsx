import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import SPONSORS from '../../../data/sponsors/sponsors';

const Sponsor = () => {
    const { updateSponsor, nextStep } = useContext(GlobalContext);

    const handleSelection = event => {
        updateSponsor(SPONSORS[event.target.value]);
        nextStep();
    }

    return(
        <div className="sponsor">
            <h1>Pick a sponsor</h1>
            {
                SPONSORS.map((sponsor, i) => {
                    return <button onClick={handleSelection} key={sponsor.name} value={i}>{sponsor.name}</button>
                })
            }
        </div>
    )
}

export default Sponsor;