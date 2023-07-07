import React, { useContext, useState } from 'react';
import {useForm} from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContex } from '../../Context/AuthProvider';
import useToken from '../../Hook/useToken';

const Signup = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {signup,  undateprof} = useContext(AuthContex)
    const navigate = useNavigate()
    const [createdEmail, setCreatedEmail] = useState('')
    const [token] = useToken(createdEmail)

    if(token){
        navigate('/')
    }

    const handleSignup = (data)=>{
        console.log(data)
        signup(data.email, data.password)
        .then(res => {
            console.log(res.user)
            const profile = {displayName: data.name}
            console.log(profile)

            handleupdateprofile(profile)
            saveUser(data.name, data.email)
        })
        .catch(e => console.error(e))

        
    }


    const handleupdateprofile =(profile)=>{
        undateprof(profile)
        .then(()=>{})
        .catch(e => console.error(e))
    }

    const saveUser =(name, email)=>{
        const user = {
            name,
            email
        }

        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
             console.log(data)
            setCreatedEmail(email)  
        })
        .catch(e => console.error(e))
    }




 

    return (
        <div className='w-1/2 mx-auto my-20 shadow-xl p-10'>
        <h1 className="text-3xl font-bold text-center mb-5">Log in</h1>
        <form onSubmit={handleSubmit(handleSignup)} className="grid grid-cols-1 gap-4">
        
          <label className="input-group input-group-vertical">
                <span>Full Name</span>
                <input type="text" {...register("name", {required: true})}  className="input input-bordered" />
            </label>
        
            <label className="input-group input-group-vertical">
                <span>Email</span>
                <input type="text" {...register("email", {
                    required: 'email must be requred'
                })}  className="input input-bordered" />
            {errors.email && <p classemail='text-red-600'>{errors.name?.message}</p>}

            </label>
            <label className="input-group input-group-vertical">
                <span>Password</span>
                <input type="password" {...register("password", { required: true,
                minLength: {value: 6, message: 'you have must 6 characte'},
                pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, message: 'password must be stong'}
            })}  className="input input-bordered" />
            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
            </label>
           
            <input className='btn btn-primary btn-secondary' type="submit" />

        </form>
        <input className='btn btn-primary btn-secondary w-full my-3' type="submit" value="CONTINUE WITH GOOGLE" />
        <p className='text-center'>Have an account? <Link className='text-secondary font-bold' to="/login">login</Link></p>

    </div>
    );
};

export default Signup;