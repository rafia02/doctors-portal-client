import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'
import Infocard from './Infocard';

const Infocards = () => {
    const cards =[
        {
            id: 1,
            title: 'Opening Hours',
            icon: clock,
            text: 'It is open 8 am to 6 pm',
            bg: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            id: 2,
            title: 'Visit our location',
            icon: marker,
            text: 'Visit our location',
            bg: "bg-gradient-to-r from-accent to-accent"
        },
        {
            id: 3,
            title: 'Contact us now',
            icon: phone,
            text: '456789',
            bg: "bg-gradient-to-r from-secondary to-primary"
        }
    ]


    return (
        <div className='grid  mt-14 grid-cols-1 md:grid-cols-3 gap-6'>
            {
                cards.map(card => <Infocard
                key={card.id}
                card={card}
                ></Infocard>)
            }
        </div>
    );
};

export default Infocards;