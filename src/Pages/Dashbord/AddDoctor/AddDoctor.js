import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from '@tanstack/react-query'
import {useNavigate} from 'react-router-dom'



const AddDoctor = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const navigate = useNavigate()

    const imgHosting = process.env.REACT_APP_IMGBB_KEY
    console.log(imgHosting)

    const handleaddDoctor = (data)=>{
        console.log(data.photo[0].name)
        const image = data.photo[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHosting}`
        
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(dataimg => {
            console.log(dataimg)




            
            const doctor = {
                name: data.name,
                email: data.email,
                specialty: data.specialty,
                image: dataimg.data.url
            }


            fetch('http://localhost:5000/doctors', {
                method: 'POST',
                headers:{
                    'Content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(doctor)
    
            })
            .then(res => res.json)
            .then(data=> {
                console.log(data)
                  navigate('/dashbord/managedoctor')
        
            })
            .catch(e => console.error(e))
       
            




        })


        
        

        
    }


    const {data: specialtys = []} = useQuery({
        queryKey: ['specialty'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/specialtys')
            const data = await res.json()
            return data
        }
    })

    return (
        <div>
            <h1 className="text-3xl font-bold my-5 text-center">Add a doctor</h1>

            <form onSubmit={handleSubmit(handleaddDoctor)} className="grid grid-cols-1 gap-4">


                <label className="input-group input-group-vertical">
                    <span>Name</span>
                    <input type="text" {...register("name")} className="input input-bordered" />

                </label>

                <label className="input-group input-group-vertical">
                    <span>Email</span>
                    <input type="text" {...register("email")} className="input input-bordered" />

                </label>

                <label className="input-group input-group-vertical">
                    <span>Specialty</span>
                    <select  type="text" {...register("specialty")} className="select select-bordered w-full ">

                        {
                            specialtys.map(s =><option key={s._id} value={s.name}>{s.name}</option> )
                        }
                        

                    </select>
                </label>


                <label className="input-group input-group-vertical">
                    <span>Photo</span>
                    <input type="file" {...register("photo")} className="input input-bordered" />

                </label>
                <input className='btn btn-primary btn-secondary' type="submit" />

            </form>
        </div>
    );
};

export default AddDoctor;