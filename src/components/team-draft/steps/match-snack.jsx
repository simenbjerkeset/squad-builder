import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import MATCH_SNACKS from '../../../data/match-snack/match-snack';

const MatchSnack = () => {
    const { updateMatchSnacks, nextStep } = useContext(GlobalContext);

    let snackAlternatives = [];
    let potentialAlternatives = MATCH_SNACKS.slice(0);

    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * potentialAlternatives.length);
        snackAlternatives.push(potentialAlternatives[randomNumber]);
        potentialAlternatives.splice(randomNumber, 1);
    }

    const handleSelection = event => {
        updateMatchSnacks(snackAlternatives[event.target.value]);
        nextStep();
    }

    return(
        <div className="match-snack">
            <h1>Pick a snack for your homegames</h1>
            <div className="alternatives">
            {
                snackAlternatives.map((snack, i) => {
                    return <button onClick={handleSelection} key={snack.name} value={i}>{snack.name}</button>
                })
            }
            </div>
        </div>
    )
}

export default MatchSnack;