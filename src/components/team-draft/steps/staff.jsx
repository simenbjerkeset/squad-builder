import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import STAFF from '../../../data/staff/other-staff';

const Staff = () => {
    const { updateStaff, nextStep } = useContext(GlobalContext);

    const handleSelection = event => {
        updateStaff(STAFF[event.target.value]);
        nextStep();
    }

    return (
        <div className="staff">
            <h1>Pick a staff member to be part the team</h1>
            {
                STAFF.map((staff, i) => {
                    return <button onClick={handleSelection} key={staff.id} value={i}>{staff.name}</button>
                })
            }
        </div>
    )
}

export default Staff;