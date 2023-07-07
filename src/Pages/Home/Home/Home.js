import React from 'react';
import Banner from '../Banner/Banner';
import Contactus from '../Contactus/Contactus';
import Dental from '../Dental/Dental';
import Infocards from '../Infocards/Infocards';
import MakeApp from '../MakeApp/MakeApp';
import Testimonial from '../Testimonial/Testimonial';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='p-5'>
            <Banner></Banner>
            <Infocards></Infocards>
            <Services></Services>
            <Dental></Dental>
            <MakeApp></MakeApp>
            <Testimonial></Testimonial>
            <Contactus></Contactus>
        </div>
    );
};

export default Home;