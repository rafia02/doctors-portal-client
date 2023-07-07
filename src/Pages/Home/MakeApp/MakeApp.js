import React from 'react';
import img from '../../../assets/images/appointment.png'
import img2 from '../../../assets/images/doctor.png'
import Button from '../../../Utilities/Button/Button';

const MakeApp = () => {
    return (
        <section className='mt-48'  style={{background: `url(${img})`}}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img2} className="w-1/2 md:block hidden -mt-28 rounded-lg " />
                    <div className='text-white'>
                        <h2 className='text-secondary font-bold'>Appointment</h2>
                        <h1 className="text-3xl mt-1 font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button></Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeApp;