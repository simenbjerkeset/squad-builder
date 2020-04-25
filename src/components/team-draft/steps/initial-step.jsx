import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

const InitialStep = () => {
    const { step, nextStep } = useContext(GlobalContext);

    return (
        <div className="initial-step">
            <h1>Team draft</h1>
            <p>Step: {step}</p>
            <button onClick={nextStep}>Get started</button>
        </div>
    )
}

export default InitialStep;