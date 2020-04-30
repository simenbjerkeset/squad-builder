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
    let potentialPlayers = [];

    switch(position) {
        case 'goalkeeper': {
            potentialPlayers = goalkeepers.slice(0);

            for (let i = 0; i < 5; i++) {
                let randomNumber = Math.floor(Math.random() * potentialPlayers.length);
                playersInPosition.push(potentialPlayers[randomNumber]);
                potentialPlayers.splice(randomNumber, 1);
            }
            break;
        }
        case 'rightBack': {
            potentialPlayers = rightBacks.slice(0);

            for (let i = 0; i < 5; i++) {
                let randomNumber = Math.floor(Math.random() * potentialPlayers.length);
                playersInPosition.push(potentialPlayers[randomNumber]);
                potentialPlayers.splice(randomNumber, 1);
            }
            break;
        }
        case 'centralDefender': {
            potentialPlayers = centralDefenders.filter(cd => !players.includes(cd)).slice(0);
            for (let i = 0; i < 5; i++) {
                let randomNumber = Math.floor(Math.random() * potentialPlayers.length);
                playersInPosition.push(potentialPlayers[randomNumber]);
                potentialPlayers.splice(randomNumber, 1);
            }
            break;
        }
        case 'leftBack': {
            potentialPlayers = leftBacks.slice(0);

            for (let i = 0; i < 5; i++) {
                let randomNumber = Math.floor(Math.random() * potentialPlayers.length);
                playersInPosition.push(potentialPlayers[randomNumber]);
                potentialPlayers.splice(randomNumber, 1);
            }
            break;
        }
        case 'centralMidfielder': {
            potentialPlayers = centralMidfielders.filter(cm => !players.includes(cm)).slice(0);

            for (let i = 0; i < 5; i++) {
                let randomNumber = Math.floor(Math.random() * potentialPlayers.length);
                playersInPosition.push(potentialPlayers[randomNumber]);
                potentialPlayers.splice(randomNumber, 1);
            }
            break;
        }
        case 'rightWinger': {
            potentialPlayers = rightWingers.slice(0);

            for (let i = 0; i < 5; i++) {
                let randomNumber = Math.floor(Math.random() * potentialPlayers.length);
                playersInPosition.push(potentialPlayers[randomNumber]);
                potentialPlayers.splice(randomNumber, 1);
            }
            break;
        }
        case 'leftWinger': {
            potentialPlayers = leftWingers.slice(0);

            for (let i = 0; i < 5; i++) {
                let randomNumber = Math.floor(Math.random() * potentialPlayers.length);
                playersInPosition.push(potentialPlayers[randomNumber]);
                potentialPlayers.splice(randomNumber, 1);
            }
            break;
        }
        case 'striker': {
            potentialPlayers = strikers.filter(s => !players.includes(s)).slice(0);

            for (let i = 0; i < 5; i++) {
                let randomNumber = Math.floor(Math.random() * potentialPlayers.length);
                playersInPosition.push(potentialPlayers[randomNumber]);
                potentialPlayers.splice(randomNumber, 1);
            }
            break;
        }
        default: break;
    }

    const handleSelection = event=> {
        addPlayer(playersInPosition[event.target.value]);
        nextPlayer();
    }

    return (
        <div>
            <h1>Pick a player as {playersInPosition[0].position}</h1>
            <div className="alternatives">
            {
                playersInPosition.map((player, i) => {
                    return <button onClick={handleSelection} key={player.id} name={player.name} value={i}>{player.name}</button>
                })
            }
            </div>
        </div>
    )
}

export default Position;