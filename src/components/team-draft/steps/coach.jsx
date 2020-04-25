import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import COACHES from '../../../data/staff/coaches';

const Coach = () => {
    const { updateCoach, nextStep } = useContext(GlobalContext);

    const handleSelection = event => {
        const { value } = event.target;
        updateCoach(value);
        nextStep();
    }

    return (
        <div className="coach">
            <h1>Who will coach you team?</h1>
            {
                COACHES.map(coach => {
                    return <button onClick={handleSelection} key={coach.id} value={coach.name}>{coach.name}</button>
                })
            }
        </div>
    )
}

export default Coach;