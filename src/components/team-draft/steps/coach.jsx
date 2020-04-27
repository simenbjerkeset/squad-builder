import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import COACHES from '../../../data/staff/coaches';

const Coach = () => {
    const { updateCoach, nextStep } = useContext(GlobalContext);

    const handleSelection = event => {
        updateCoach(COACHES[event.target.value]);
        nextStep();
    }

    return (
        <div className="coach">
            <h1>Who will coach you team?</h1>
            {
                COACHES.map((coach, i) => {
                    return <button onClick={handleSelection} key={coach.id} value={i}>{coach.name}</button>
                })
            }
        </div>
    )
}

export default Coach;