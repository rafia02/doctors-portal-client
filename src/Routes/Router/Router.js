import { createBrowserRouter } from "react-router-dom";
import DashvbordLayout from "../../Layout/DashvbordLayout";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Allusers from "../../Pages/Allusers/Allusers";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashbord/AddDoctor/AddDoctor";
import Dashbord from "../../Pages/Dashbord/Dashbord";
import ManagDoctors from "../../Pages/Dashbord/ManagDoctors/ManagDoctors";
import Myappoinment from "../../Pages/Dashbord/Myappoinment/Myappoinment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import Signup from "../../Pages/Signup/Signup";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},
        {path: 'appointment', element: <Appointment></Appointment>},
        {path: '/login', element: <Login></Login>},
        {path: '/about', element: <About></About>},
        {path: '/signup', element: <Signup></Signup>},
        {path: '/reviews', element: <PrivetRoute><Review></Review></PrivetRoute>}
    ]},
    {path: '/dashbord', element: <PrivetRoute><DashvbordLayout></DashvbordLayout></PrivetRoute>, children: [
        {path: '/dashbord', element: <Myappoinment></Myappoinment>},
        {path: '/dashbord/allusers', element: <Allusers></Allusers>},
        {path: '/dashbord/adddoctor', element: <AddDoctor></AddDoctor>},
        {path: '/dashbord/managedoctor', element: <ManagDoctors></ManagDoctors>},
    ]}
])