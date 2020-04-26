import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

const Results = () => {
    const { name, formation, players, captain, coach, staff, arena, sponsor, matchSnack, startOver } = useContext(GlobalContext);


    const RestartGame = () => {
        startOver();
    }

    return(
        <div className="results">
            <p>Your score: ...</p>
            <p>Name: {name}</p>
            <p>Formation: {formation}</p>
            <p>Players:</p>
            {players.map(player => <p key={player.name}>{player.position}: {player.name}</p>)}
            <p>Captain: {captain}</p>
            <p>Coach: {coach}</p>
            <p>Staff: {staff}</p>
            <p>Arena: {arena}</p>
            <p>Sponsor: {sponsor}</p>
            <p>Match-snack: {matchSnack}</p>
            <button onClick={RestartGame}>Try again</button>
        </div>
    )
}

export default Results;