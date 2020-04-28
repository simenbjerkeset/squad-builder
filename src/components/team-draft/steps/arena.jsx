import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import ARENAS from '../../../data/arenas/arenas';

const Arena = () => {
    const { updateArena, nextStep } = useContext(GlobalContext);

    let arenaAlternatives = [];
    let potentialAlternatives = ARENAS;

    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * potentialAlternatives.length);
        arenaAlternatives.push(potentialAlternatives[randomNumber]);
        potentialAlternatives.splice(randomNumber, 1);
    }

    const handleSelection = event => {
        updateArena(arenaAlternatives[event.target.value]);
        nextStep();
    }

    return(
        <div className="arena">
            <h1>Pick a stadium</h1>
            {
                arenaAlternatives.map((arena, i) => {
                    return <button onClick={handleSelection} key={arena.name} value={i}>{arena.name}</button>
                })
            }
        </div>
    )
}

export default Arena;