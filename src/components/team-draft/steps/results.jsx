import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

const Results = () => {
    const { name, formation, players, captain, coach, staff, arena, sponsor, matchSnack, score, startOver } = useContext(GlobalContext);


    const RestartGame = () => {
        startOver();
    }

    return(
        <div className="results">
            <p>Your score: {score}</p>
            <p>Name: {name}</p>
            <p>Formation: {formation}</p>
            <p>Players:</p>
            {players.map(player => <p key={player.name}>{player.position}: {player.name}</p>)}
            <p>Captain: {captain.name}</p>
            <p>Coach: {coach.name}</p>
            <p>Staff: {staff.name}</p>
            <p>Arena: {arena.name}</p>
            <p>Sponsor: {sponsor.name}</p>
            <p>Match-snack: {matchSnack.name}</p>
            <button onClick={RestartGame}>Try again</button>
        </div>
    )
}

export default Results;