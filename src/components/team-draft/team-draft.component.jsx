import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

import './team-draft.styles.scss';
import Username from './steps/username';
import TeamName from './steps/team-name.component';
import InitialStep from './steps/initial-step';
import Formation from './steps/formation';
import Players from './steps/players/players';
import Coach from './steps/coach';
import Staff from './steps/staff';
import Arena from './steps/arena';
import Sponsor from './steps/sponsor';
import MatchSnack from './steps/match-snack';
import Results from './steps/results';

export const TeamDraft = () => {
    const { step } = useContext(GlobalContext);

    switch(step) {
        case 0: return <InitialStep />
        case 1: return <Username />
        case 2: return <TeamName />
        case 3: return <Formation />
        case 4: return <Players />
        case 5: return <Coach />  
        case 6: return <Staff />
        case 7: return <Arena />
        case 8: return <Sponsor />
        case 9: return <MatchSnack />
        default: return <Results />;
    }
};

export default TeamDraft;