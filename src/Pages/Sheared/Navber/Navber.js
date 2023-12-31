import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContex } from '../../../Context/AuthProvider';

const Navber = () => {
    const { logout, user } = useContext(AuthContex)

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(e => console.error(e))
    }
    const manuItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/dashbord">Dashbord</Link></li>
        {user?.uid ?
            <li><button onClick={handleLogout}>Sign out</button></li>
            : <li><Link to="/login">Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manuItem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Doctors Care</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {manuItem}
                </ul>
            </div>

            <label htmlFor="dashbord-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navber;