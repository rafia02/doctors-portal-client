import React from 'react';

const TrestimoniCard = ({ card }) => {
    const {img, text, name, city} = card
    return (
        <div className="card shadow-xl text-content">
            <div className="card-body  ">
                <p>{text}</p>
                <div className="card-actions mt-3 ">
                   <img className='rounded-full border-4 border-secondary h-16 w-16' src={img} alt="" />
                    <div>
                        <p>{name}</p>
                        <small>{city}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrestimoniCard;