import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import PLAYERS from '../../../data/players/root-players';

import Captain from './captain';

const Players = () => {
    const { playerStep, addPlayer, nextPlayer } = useContext(GlobalContext);

    const handleSelection = event=> {
        const { name, value } = event.target;
        addPlayer({position: value, name});
        nextPlayer();
    }

    /*
    1. Select goalkeeper
    2. Select right-back
    3. Select central defender
    4. Select unique central defender
    5. Select left back
    6. - IF (4-3-3) select DM
    7. - IF (4-4-2) select RM
    8. - Select 2x unique SM
    9. - IF (4-4-2) select LM
    10.- IF (4-2-3-1 || 4-3-3) select RW
    11.- IF (4-2-3-1) select unique OM
    12.- IF (4-2-3-1 || 4-3-3) select LW
    13. Select striker
    14.- IF (4-4-2) select unique striker
    */

    switch(playerStep) {
        case 1:
            return (
                PLAYERS.GOALKEEPERS.map(player => {
                    return <button onClick={handleSelection} key={player.id} name={player.name} value={player.position}>{player.name}</button>
                })
            )
        case 2: 
            return (
                PLAYERS.RIGHT_BACKS.map(player => {
                    return <button onClick={handleSelection} key={player.id} name={player.name} value={player.position}>{player.name}</button>
                })
            )
        case 3: 
            return (
                PLAYERS.CENTRAL_DEFENDERS.map(player => {
                    return <button onClick={handleSelection} key={player.id} name={player.name} value={player.position}>{player.name}</button>
                })
            )
        case 4: 
            return (
                PLAYERS.CENTRAL_DEFENDERS.map(player => {
                    return <button onClick={handleSelection} key={player.id} name={player.name} value={player.position}>{player.name}</button>
                })
            )
        case 5: 
            return (
                PLAYERS.LEFT_BACKS.map(player => {
                    return <button onClick={handleSelection} key={player.id} name={player.name} value={player.position}>{player.name}</button>
                })
            )
        case 6: 
            return (
                PLAYERS.CENTRAL_MIDFIELDERS.map(player => {
                    return <button onClick={handleSelection} key={player.id} name={player.name} value={player.position}>{player.name}</button>
                })
            )
        case 7: 
            return (
                PLAYERS.RIGHT_WINGERS.map(player => {
                    return <button onClick={handleSelection} key={player.id} name={player.name} value={player.position}>{player.name}</button>
                })
            )
        case 8: 
            return (
                PLAYERS.CENTRAL_MIDFIELDERS.map(player => {
                    return <button onClick={handleSelection} key={player.id} name={player.name} value={player.position}>{player.name}</button>
                })
            )
        case 9: 
            return (
                PLAYERS.CENTRAL_MIDFIELDERS.map(player => {
                    return <button onClick={handleSelection} key={player.id} name={player.name} value={player.position}>{player.name}</button>
                })
            )
        case 10: 
            return (
                PLAYERS.LEFT_WINGERS.map(player => {
                    return <button onClick={handleSelection} key={player.id} name={player.name} value={player.position}>{player.name}</button>
                })
            )
        case 11: 
            return (
                PLAYERS.RIGHT_WINGERS.map(player => {
                    return <button onClick={handleSelection} key={player.id} name={player.name} value={player.position}>{player.name}</button>
                })
            )
        case 12: 
            return (
                PLAYERS.CENTRAL_MIDFIELDERS.map(player => {
                    return <button onClick={handleSelection} key={player.id} name={player.name} value={player.position}>{player.name}</button>
                })
            )
        case 13: 
            return (
                PLAYERS.LEFT_WINGERS.map(player => {
                    return <button onClick={handleSelection} key={player.id} name={player.name} value={player.position}>{player.name}</button>
                })
            )
        case 14: 
            return (
                PLAYERS.STRIKERS.map(player => {
                    return <button onClick={handleSelection} key={player.id} name={player.name} value={player.position}>{player.name}</button>
                })
            )
        case 15: 
            return (
                PLAYERS.STRIKERS.map(player => {
                    return <button onClick={handleSelection} key={player.id} name={player.name} value={player.position}>{player.name}</button>
                })
            )
        default:
            return (
                <Captain />
            )
    }
}

export default Players;