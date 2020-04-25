import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

import './team-draft.styles.scss';
import TeamName from './steps/team-name.component';
import InitialStep from './steps/initial-step';
import Formation from './steps/formation';
import Players from './steps/players';
import Coach from './steps/coach';
import Staff from './steps/staff';

export const TeamDraft = () => {
    // console.log(DATA);
    /* const steps = [
        {id: "name"},
        {id: "formation"},
        {id: "players"},
        {id: "coach"},
        {id: "staff"},
        {id: "arena"},
        {id: "sponsor"},
        {id: "match-snack"},
        {id: "result"}
    ]; */

    const { step, name, formation, players, captain, coach, staff } = useContext(GlobalContext);

    switch(step) {
        case 0: return (
            <InitialStep />
        )
        case 1: return <TeamName />
        case 2: return <Formation />
        case 3: return <Players />
        case 4: return <Coach />  
        case 5: return <Staff />
        default:
            return (
                <div>
                    <p>Step: {step}</p>
                    <p>Name: {name}</p>
                    <p>Formation: {formation}</p>
                    <p>Players:</p>
                    {players.map(player => <p key={player.name}>{player.position}: {player.name}</p>)}
                    <p>Captain: {captain}</p>
                    <p>Coach: {coach}</p>
                    <p>Staff: {staff}</p>
                    <p>Arena:</p>
                    <p>Sponsor:</p>
                    <p>Match-snack:</p>
                </div>
            );
    }
};

export default TeamDraft;