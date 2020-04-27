import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import MATCH_SNACKS from '../../../data/match-snack/match-snack';

const MatchSnack = () => {
    const { updateMatchSnacks, nextStep } = useContext(GlobalContext);

    const handleSelection = event => {
        updateMatchSnacks(MATCH_SNACKS[event.target.value]);
        nextStep();
    }

    return(
        <div className="match-snack">
            <h1>Pick a snack for your homegames</h1>
            {
                MATCH_SNACKS.map((snack, i) => {
                    return <button onClick={handleSelection} key={snack.name} value={i}>{snack.name}</button>
                })
            }
        </div>
    )
}

export default MatchSnack;