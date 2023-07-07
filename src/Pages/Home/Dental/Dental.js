import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import Button from '../../../Utilities/Button/Button';

const Dental = () => {
    return (
            <div className=" flex mb-20 flex-col md:flex-row">
                <div className=' w-full md:w-1/2 h-96 mr-10'>
                <img src={treatment} className="w-full h-full rounded-lg  shadow-2xl" />

                </div>
                <div className='w-full md:w-1/2'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button></Button>
                </div>
            </div>
    );
};

export default Dental;