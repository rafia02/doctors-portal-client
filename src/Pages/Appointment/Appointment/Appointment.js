import React, { useState } from 'react';
import Available from '../Available/Available';
import AppoinBanner from './AppoinBanner/AppoinBanner';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date())

    return (
        <div>
            <AppoinBanner selected={selected} setSelected={setSelected}></AppoinBanner>
            <Available selected={selected}></Available>
        </div>
    );
};

export default Appointment;