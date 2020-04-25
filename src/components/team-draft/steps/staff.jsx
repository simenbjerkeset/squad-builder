import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import STAFF from '../../../data/staff/other-staff';

const Staff = () => {
    const { updateStaff, nextStep } = useContext(GlobalContext);

    const handleSelection = event => {
        const { value } = event.target;
        updateStaff(value);
        nextStep();
    }

    return (
        <div className="staff">
            <h1>Pick a staff member to be part the team</h1>
            {
                STAFF.map(staff => {
                    return <button onClick={handleSelection} key={staff.id} value={staff.name}>{staff.name}</button>
                })
            }
        </div>
    )
}

export default Staff;