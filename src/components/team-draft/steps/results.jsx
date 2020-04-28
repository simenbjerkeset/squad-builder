import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

const Results = () => {
    const { username, name, formation, players, captain, coach, staff, arena, sponsor, matchSnack, score, startOver } = useContext(GlobalContext);


    const RestartGame = () => {
        startOver();
    }

    return(
        <div className="results">
            <h1>Your score: {score}</h1>
            <div className="split-screen">
                <div className="left-column">
                    <p>Username: {username}</p>
                    <p>Name: {name}</p>
                    <p>Formation: {formation}</p>
                    <p>Captain: {captain.name}</p>
                    <p>Coach: {coach.name}</p>
                    <p>Staff: {staff.name}</p>
                    <p>Arena: {arena.name}</p>
                    <p>Sponsor: {sponsor.name}</p>
                    <p>Match-snack: {matchSnack.name}</p>
                </div>
                <div className="right-column">
                    {players.map(player => <p key={player.name}>{player.position}: {player.name}</p>)}
                </div>
            </div>
            <button onClick={RestartGame}>Try again</button>
        </div>
    )
}

export default Results;