import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

const Formation = () => {
    const { nextStep, updateFormation } = useContext(GlobalContext);

    const handleFormationPick = event => {
        const { value } = event.target;
        updateFormation(value);
        nextStep();
    }

    return(
        <div className="team-name">
            <h1>Pick a formation</h1>
            <div className="alternatives">
                <button onClick={handleFormationPick} value="4-4-2">4-4-2</button>
                <button onClick={handleFormationPick} value="4-3-3">4-3-3</button>
                <button onClick={handleFormationPick} value="4-2-3-1">4-2-3-1</button>
            </div>
        </div>
    )
}

export default Formation;