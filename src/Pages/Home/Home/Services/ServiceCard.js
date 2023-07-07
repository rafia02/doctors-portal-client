import React from 'react';

const ServiceCard = ({ card }) => {
    const { title, img, text } = card
    return (
        <div className="card shadow-xl">
            <figure className="px-10 pt-10">
                <img className="rounded-xl" src={img} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default ServiceCard;