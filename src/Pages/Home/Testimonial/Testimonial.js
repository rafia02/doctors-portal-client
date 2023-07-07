import React from 'react';
import img1 from '../../../assets/images/people1.png'
import img2 from '../../../assets/images/people2.png'
import img3 from '../../../assets/images/people3.png'
import TrestimoniCard from './TrestimoniCard';
import quote from '../../../assets/icons/quote.svg'

const Testimonial = () => {
    const cards = [
        {
            id: 1,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            city: 'California',
            img: img1
        },
        {
            id: 2,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            city: 'California',
            img: img2
        },
        {
            id: 3,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            city: 'California',
            img: img3
        }
    ]
    return (
        <section className='mt-24'>
            <div className=' mb-2 flex justify-between'>
                <div>
                    <h3 className='text-secondary font-bold'>Testimonial</h3>
                    <h1 className='text-2xl'>What Our Patients Says</h1>
                </div>
                <img src={quote} className="md:w-48 w-28 h-20 md:h-32" alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    cards.map(card => <TrestimoniCard
                        key={card.id}
                        card={card}
                    ></TrestimoniCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;