import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import logo from '../../../assets/hamkamlogo.svg.png';

const InitialStep = () => {
    const { nextStep } = useContext(GlobalContext);

    return (
        <div className="initial-step">
            <img src={logo} alt="logo"/>
            <h1>HAM-KAM TEAM DRAFT</h1>
            <button onClick={nextStep}>Get started</button>
        </div>
    )
}

export default InitialStep;