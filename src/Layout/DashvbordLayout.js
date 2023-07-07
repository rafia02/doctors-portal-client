import React, { useContext, useState } from 'react';
import Navber from '../Pages/Sheared/Navber/Navber';
import { Outlet, Link } from 'react-router-dom'
import { AuthContex } from '../Context/AuthProvider'
import useAdmin from '../Hook/useAdmin';

const DashvbordLayout = () => {
 const {user} = useContext(AuthContex)
 const [isAdmin] = useAdmin(user?.email)
  return (
    <div>
      <Navber></Navber>
      <div className="drawer drawer-mobile">
        <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">

          <Outlet></Outlet>


        </div>
        <div className="drawer-side">
          <label htmlFor="dashbord-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            <li><Link to="/dashbord">My Appoinment</Link></li>

            {
              isAdmin && <>
            <li><Link to="/dashbord/allusers">All users</Link></li>
            <li><Link to="/dashbord/adddoctor">Add a doctor</Link></li>
            <li><Link to="/dashbord/managedoctor">Manage doctors</Link></li>
              
              </>
            }

          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashvbordLayout;