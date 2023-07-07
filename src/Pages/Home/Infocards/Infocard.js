import React from 'react';

const Infocard = ({ card }) => {
    const {icon, bg, title, text} = card
    return (
        <div className={`card card-side px-3 text-white shadow-xl ${bg}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Infocard;