import React from 'react';
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast';

const Allusers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return data
        }
    })


    const handleAdmin =(id)=>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('admin role succesfullu')
                refetch()
            }
        })
    }



    return (
      
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    {
                            users.map((user, i)=><tr key={user._id}>
                            <th>{i+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{ !user?.role && <button onClick={()=>handleAdmin(user._id)} className='btn btn-xs btn-secondary'>Make Admin</button>}</td>
                            <td><button className='btn btn-xs btn-primary btn-accent'>Delete</button></td>
                        </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
      
    );
};

export default Allusers;