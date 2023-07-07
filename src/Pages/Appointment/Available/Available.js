import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Modal from './Modal/Modal';
import Option from './Option';

const Available = ({ selected }) => {
    // const [appointments, setAppointments] = useState([])
    const [treatment, setTreatment] = useState(null)
    const date = format(selected, 'PP')

    const {data: appointments = [], refetch} = useQuery({
        queryKey: ['appointment', date],
        queryFn: async ()=>{
          const res = await  fetch(`http://localhost:5000/appointment?date=${date}`)
          const data = await res.json()
          return data
        }
    })

 
    return (
        <div className='my-28'>
            <h1 className='text-center font-bold text-secondary text-xl mb-5'>Available Appointments on {format(selected, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    appointments.map(opt => <Option
                        key={opt._id}
                        opt={opt}
                        setTreatment={setTreatment}
                    ></Option>)
                }
            </div>
           { 
           treatment &&
           <Modal
                treatment={treatment}
                selected={selected}
                refetch={refetch}
                
            ></Modal>}
        </div>
    );
};

export default Available;