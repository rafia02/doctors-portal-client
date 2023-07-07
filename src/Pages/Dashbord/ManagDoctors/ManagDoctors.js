import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../Sheared/ConfirmModal/ConfirmModal';

const ManagDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] =useState(null)

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    const closeModal =(doctor)=>{
        setDeletingDoctor(null)
    }

    const handleDelete=(doctor)=>{
        console.log(doctor)

        fetch(`http://localhost:5000/doctors/${doctor._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                refetch()
                toast.success('successfully delete')
            }
        })
       
    }


    return (
        <div>
            <h1>manage doctor {doctors.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((doctr, i) => <tr key={doctr._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={doctr.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctr.name}</td>
                                <td>{doctr.email}</td>
                                <td>{doctr.specialty}</td>
                                <td>
                                <label onClick={()=>setDeletingDoctor(doctr)} htmlFor="confirm-modal" className="btn btn-xs">Delete</label>
                                    
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && 
                <ConfirmModal
                title={`are you sure delete this doctor?`}
                message={`if you are sure to delete ${deletingDoctor.name}`}
                doctor={deletingDoctor}
                closeModal={closeModal}
                handleDelete={handleDelete}
                ></ConfirmModal>
            }
        </div>
    );
};

export default ManagDoctors;