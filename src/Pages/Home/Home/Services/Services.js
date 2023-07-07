import React from 'react';
import img1 from '../../../../assets/images/fluoride.png'
import img2 from '../../../../assets/images/cavity.png'
import img3 from '../../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const serviceinfo = [
        {
            id: 1,
            img: img1,
            title: 'Fluoride Treatment',
            text: 'Cosmetic dentistry, such as whitening, porcelain and composite veneers.'
        },
        {
            id: 2,
            img: img2,
            title: 'Cavity Filling',
            text: 'Cosmetic dentistry, such as whitening, porcelain and composite veneers.'
        },
        {
            id: 3,
            img: img3,
            title: 'Teeth Whitening',
            text: 'Cosmetic dentistry, such as whitening, porcelain and composite veneers.'
        },
    ]



    return (
        <div className='mb-20'>
            <div  className='text-center mt-36'>
                <h4 className='font-bold text-secondary'>OUR SERVICES</h4>
                <h1 className='text-2xl font-semibold'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-3'>
                {
                    serviceinfo.map(card => <ServiceCard
                        key={card.id}
                        card={card}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;