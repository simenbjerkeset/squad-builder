import React, { useContext } from 'react';

import { GlobalContext } from '../../../../context/GlobalState';

const Position = ({position}) => {
    const {
        goalkeepers,
        rightBacks,
        centralDefenders,
        leftBacks,
        centralMidfielders,
        rightWingers,
        leftWingers,
        strikers,
        addPlayer,
        nextPlayer,
        players } = useContext(GlobalContext);

    let playersInPosition = [];

    switch(position) {
        case 'goalkeeper': {
            playersInPosition = goalkeepers;
            break;
        }
        case 'rightBack': {
            playersInPosition = rightBacks;
            break;
        }
        case 'centralDefender': {
            playersInPosition = centralDefenders.filter(cd => !players.includes(cd));
            break;
        }
        case 'leftBack': {
            playersInPosition = leftBacks;
            break;
        }
        case 'centralMidfielder': {
            playersInPosition = centralMidfielders.filter(cm => !players.includes(cm));
            break;
        }
        case 'rightWinger': {
            playersInPosition = rightWingers;
            break;
        }
        case 'leftWinger': {
            playersInPosition = leftWingers;
            break;
        }
        case 'striker': {
            playersInPosition = strikers.filter(s => !players.includes(s));
            break;
        }
        default: break;
    }

    const handleSelection = event=> {
        addPlayer(playersInPosition[event.target.value]);
        nextPlayer();
    }

    return (
        playersInPosition.map((player, i) => {
            return <button onClick={handleSelection} key={player.id} name={player.name} value={i}>{player.name}</button>
        })
    )
}

export default Position;