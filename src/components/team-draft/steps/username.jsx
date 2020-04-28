import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

const Username = () => {
    const { nextStep, updateUsername } = useContext(GlobalContext);

    const handleChange = event => {
        const { value } = event.target;
        updateUsername(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        nextStep();
    }

    return(
        <div className="team-name">
            <h1>Fill in your username</h1>
            <form onSubmit={handleSubmit}>
                <input autoFocus type="text" onChange={handleChange} placeholder="Username..." required/>
                <button type="submit">Next step</button>
            </form>
        </div>
    )
}

export default Username;