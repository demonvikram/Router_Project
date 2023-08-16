import React from "react";
import logo from "../assets/Logo.svg";
import {Link, useNavigate} from "react-router-dom";
import { toast } from "react-hot-toast";

const NavBar=(props)=>{
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    const navigate=useNavigate()

    return(
        <div className="flex gap-4 justify-evenly font-bold text-xl text-white py-4 ">
            <Link to="/">
                <img src={logo} width={160} height={32} loading="lazy" alt="logo"/>
            </Link>

            <nav>
                <ul className="flex gap-6">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </nav> 

            <div className="flex ml-3 gap-3">
            {
                
                !isLoggedIn &&
                <Link to="/login">
                    <button className="bg-gray-500 rounded-md py-1.5 px-3 hover:bg-gray-700 transition-all duration-500">Log In</button>
                </Link>
            }
            {
                !isLoggedIn &&
                <Link to="/signup">
                    <button className="bg-gray-500 rounded-md py-1.5 px-3 hover:bg-gray-700 transition-all duration-500">Sign Up</button>
                </Link>
            }
            {
                isLoggedIn &&
                <Link to="/">
                    <button className="bg-gray-500 rounded-md py-1 px-3 hover:bg-gray-700 transition-all duration-500" onClick={()=>{
                        setIsLoggedIn(!isLoggedIn);
                        toast.success("Logged Out")
                        
                    }}>Log out</button>
                </Link>
            }
            {
                isLoggedIn &&
                <Link to="/dashboard">
                    <button className="bg-gray-500 rounded-md py-1 px-3 hover:bg-gray-700 transition-all duration-500">Dashboard</button>
                </Link>
            }
            </div> 
        </div>
    )
}

export default NavBar;