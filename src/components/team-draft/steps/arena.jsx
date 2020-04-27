import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import ARENAS from '../../../data/arenas/arenas';

const Arena = () => {
    const { updateArena, nextStep } = useContext(GlobalContext);

    const handleSelection = event => {
        updateArena(ARENAS[event.target.value]);
        nextStep();
    }

    return(
        <div className="arena">
            <h1>Pick a stadium</h1>
            {
                ARENAS.map((arena, i) => {
                    return <button onClick={handleSelection} key={arena.name} value={i}>{arena.name}</button>
                })
            }
        </div>
    )
}

export default Arena;