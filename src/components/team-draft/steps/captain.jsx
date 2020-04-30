import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

const Captain = () => {
    const { players, updateCaptain, nextStep } = useContext(GlobalContext);

    const handleSelection = event => {
        updateCaptain(players[event.target.value-1]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        nextStep();
    }

    return (
        <div className="captain">
            <h1>Who will be your captain?</h1>
            <form onSubmit={handleSubmit}>
                <div className="select-captain">
                    <select defaultValue={0} onChange={handleSelection} required>
                        <option value="">Choose captain..</option>
                        {
                            players.map((player, i) => {
                            return <option key={player.name} value={i+1}>{player.name}</option>
                            })
                        }
                    </select>
                </div>
                <button type="submit">Next step</button>
            </form>
        </div>
    )
}

export default Captain;