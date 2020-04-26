import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

import './team-draft.styles.scss';
import TeamName from './steps/team-name.component';
import InitialStep from './steps/initial-step';
import Formation from './steps/formation';
import Players from './steps/players';
import Coach from './steps/coach';
import Staff from './steps/staff';
import Arena from './steps/arena';
import Sponsor from './steps/sponsor';
import MatchSnack from './steps/match-snack';
import Results from './steps/results';

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

    /*
        SCORING:
        - family-relations
        - if selected person for multiple roles
        - captain: 2x player score
    */

    const { step } = useContext(GlobalContext);

    switch(step) {
        case 0: return <InitialStep />
        case 1: return <TeamName />
        case 2: return <Formation />
        case 3: return <Players />
        case 4: return <Coach />  
        case 5: return <Staff />
        case 6: return <Arena />
        case 7: return <Sponsor />
        case 8: return <MatchSnack />
        default: return <Results />;
    }
};

export default TeamDraft;