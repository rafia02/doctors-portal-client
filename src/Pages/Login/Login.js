import React, { useContext } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Context/AuthProvider';
import useToken from '../../Hook/useToken';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { login, googlesigin } = useContext(AuthContex)
    // const location = useLocation()
    const navigate = useNavigate()
    // const from = location.state?.from?.pathname || ''
    const [createduser, setCreateduser] = useState('')
    const [token] = useToken(createduser)

    if (token) {
        navigate('/')
    }




    const handleonSubmit = (data) => {

        login(data.email, data.password)
            .then(res => {
                const user = res.user
                console.log(user)
                console.log(user.email)
                setCreateduser(user.email)
            })
            .catch(e => console.error(e))
    };

    const handlegoogle = () => {
        googlesigin()
            .then(res => console.log(res.user))
            .catch(e => console.error(e))
    }

    return (
        <div className='w-1/2 mx-auto my-20 shadow-xl p-10'>
            <h1 className="text-3xl font-bold text-center mb-5">Log in</h1>
            <form onSubmit={handleSubmit(handleonSubmit)} className="grid grid-cols-1 gap-4">

                <label className="input-group input-group-vertical">
                    <span>Email</span>
                    <input type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered" />
                    {errors.email && <p role="alert">{errors.email?.message}</p>}
                </label>
                <label className="input-group input-group-vertical">
                    <span>Password</span>
                    <input type="password" {...register("password", { required: "Password Address is required", minLength: { value: 6, message: "password must be 6 characters" } })} className="input input-bordered" />
                    {errors.password && <p role="alert">{errors.password?.message}</p>}
                </label>

                <input className='btn btn-primary btn-secondary' type="submit" />

            </form>
            <input onClick={handlegoogle} className='btn btn-primary btn-secondary w-full my-3' type="submit" value="CONTINUE WITH GOOGLE" />
            <p className='text-center'>New to this website? <Link className='text-secondary font-bold' to="/signup">Signup</Link></p>

        </div>
    );
};

export default Login;