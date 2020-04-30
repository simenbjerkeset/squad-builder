import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import COACHES from '../../../data/staff/coaches';

const Coach = () => {
    const { updateCoach, nextStep } = useContext(GlobalContext);

    let coachAlternatives = [];
    let potentialAlternatives = COACHES.slice(0);

    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * potentialAlternatives.length);
        coachAlternatives.push(potentialAlternatives[randomNumber]);
        potentialAlternatives.splice(randomNumber, 1);
    }

    const handleSelection = event => {
        updateCoach(coachAlternatives[event.target.value]);
        nextStep();
    }

    return (
        <div className="coach">
            <h1>Who will coach you team?</h1>
            <div className="alternatives">
            {
                coachAlternatives.map((coach, i) => {
                    return <button onClick={handleSelection} key={coach.id} value={i}>{coach.name}</button>
                })
            }
            </div>
        </div>
    )
}

export default Coach;