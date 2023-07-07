import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContex } from '../../../Context/AuthProvider';

const Myappoinment = () => {
    const {user} = useContext(AuthContex)

console.log(`http://localhost:5000/bookings?email=${user?.email}`)
    const {data: bookings= []} = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async ()=>{ 
          const res = await  fetch(`http://localhost:5000/bookings?email=${user?.email}`,{
            headers:{
              authorization: `bearer ${localStorage.getItem('token')}`
            }
          })
          const data = await res.json()
          return data
    }
    })

 
    return (
        <div>
<div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Service Name</th>
        <th>Patient Name</th>
        <th>Time</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
     
     {
        bookings?.map((book, i) =><tr key={book._id}>
            <th>{i+1}</th>
            <td>{book.service_name}</td>
            <td>{book.name}</td>
            <td>{book.slot}</td>
            <td>{book.date}</td>
          </tr>
        )
     }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myappoinment;