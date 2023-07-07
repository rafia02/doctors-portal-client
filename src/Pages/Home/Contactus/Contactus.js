import React from 'react';
import img from '../../../assets/images/appointment.png'
import Button from '../../../Utilities/Button/Button';

const Contactus = () => {
    return (
        <section className='p-2 mt-20 px-0 mb-0 ' style={{background: `url(${img})`}}>
            <div className="card-body w-1/2 mx-auto">
                <div className='text-center mb-3'>
                    <h4 className='text-secondary font-bold'>Contact Us</h4>
                    <h1 className='text-white text-3xl'>Stay connected with us</h1>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="email address" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="subject" className="input input-bordered" />
                </div>
                <div className="form-control">
                <textarea className="textarea textarea-bordered" placeholder="message"></textarea>
                </div>
                <div className='justify-center flex mt-4'>
                <Button></Button>
                </div>
            </div>
        </section>
    );
};

export default Contactus;