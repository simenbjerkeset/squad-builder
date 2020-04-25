import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import ARENAS from '../../../data/arenas/arenas';

const Arena = () => {
    const { updateArena, nextStep } = useContext(GlobalContext);

    const handleSelection = event => {
        const { value } = event.target;
        updateArena(value);
        nextStep();
    }

    return(
        <div className="arena">
            <h1>Pick a stadium</h1>
            {
                ARENAS.map(arena => {
                    return <button onClick={handleSelection} key={arena.name} value={arena.name}>{arena.name}</button>
                })
            }
        </div>
    )
}

export default Arena;