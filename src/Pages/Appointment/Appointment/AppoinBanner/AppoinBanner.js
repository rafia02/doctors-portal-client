import React, { useState } from 'react';
import chair from '../../../../assets/images/chair.png'
import bg from '../../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppoinBanner = ({selected, setSelected}) => {
    return (
        <div style={{background: `url(${bg})`}}  className="hero px-10 py-5 my-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="w-1/2 rounded-lg ml-10 shadow-2xl" alt=''/>
                <div>
                    
                    <DayPicker
                    mode='single'
                    selected={selected}
                    onSelect={setSelected}
                    ></DayPicker>
                    
                </div>
            </div>
        </div>
    );
};

export default AppoinBanner;