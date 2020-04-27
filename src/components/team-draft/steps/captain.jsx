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
        <div>
            <h1>Who will be your captain?</h1>
            <form onSubmit={handleSubmit}>
                <select defaultValue={0} onChange={handleSelection} required>
                    <option value="">Choose captain..</option>
                    {
                        players.map((player, i) => {
                        return <option key={player.name} value={i+1}>{player.name}</option>
                        })
                    }
                </select>
                <button type="submit">Neste steg</button>
            </form>
        </div>
    )
}

export default Captain;