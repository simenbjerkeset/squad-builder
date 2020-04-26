import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

const TeamName = () => {
    const { name, nextStep, updateTeamName } = useContext(GlobalContext);

    const handleChange = event => {
        const { value } = event.target;
        updateTeamName(value);
    }

    return(
        <div className="team-name">
            <h1>Choose a team name</h1>
            <form onSubmit={nextStep}>
                <input type="text" defaultValue={name} onChange={handleChange} required/>
                <button type="submit">Next step</button>
            </form>
        </div>
    )
}

export default TeamName;