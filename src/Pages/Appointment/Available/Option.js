import React from 'react';



const Option = ({ opt , setTreatment}) => {
    const {slots, name} = opt
    return (
        <div className="card  shadow-lg">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary font-bold">{name}</h2>
                <h3>
                  {
                    slots.length > 0 ? <p>{slots[0]}</p>
                    : 'Try another day'
                  }
                </h3>
                <h3>
                    
                       { slots.length}  {slots.length > 1 ? 'spaces' : 'space'}
                    
                </h3>
                <div className="card-actions justify-end">
                    <label onClick={()=>setTreatment(opt)} htmlFor="book-modal" className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                    
                </div>
            </div>
        </div>
    );
};

export default Option;