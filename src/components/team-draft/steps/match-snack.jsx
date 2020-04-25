import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import MATCH_SNACKS from '../../../data/match-snack/match-snack';

const MatchSnack = () => {
    const { updateMatchSnacks, nextStep } = useContext(GlobalContext);

    const handleSelection = event => {
        const { value } = event.target;
        updateMatchSnacks(value);
        nextStep();
    }

    return(
        <div className="match-snack">
            <h1>Pick a snack for your homegames</h1>
            {
                MATCH_SNACKS.map(snack => {
                    return <button onClick={handleSelection} key={snack.name} value={snack.name}>{snack.name}</button>
                })
            }
        </div>
    )
}

export default MatchSnack;