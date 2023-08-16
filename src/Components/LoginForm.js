import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";

const LoginForm=({setIsLoggedIn})=>{
    const[formData,setFormData]=useState({email:"",password:""});
    const[showPassword,setShowPassword]=useState(false);

    function changeHandler(event){
        setFormData((prev)=>{
            return(
                {...prev,[event.target.name]:event.target.value}
            )
        })
    }

    const navigate=useNavigate();
    
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("logged In");
        navigate("/dashboard");

    }

    return(
        <form onSubmit={submitHandler} className="mt-4">
            <label>
                <p className="font-semibold text-white">Email Address<sup className="text-red-500">*</sup></p>
                <input type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    name="email"
                    onChange={changeHandler}
                    className="w-full rounded-md border h-10 py-1 px-2"
                />
            </label>
            <label className="relative">
                <p className="font-semibold text-white mt-3">Password<sup className="text-red-500">*</sup></p>
                <input 
                    type={showPassword?("text"):("password")}
                    required
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                    className="w-full rounded-md border h-10 py-1 px-2"
                />
                <span className=" absolute bottom-0 right-2"onClick={()=> setShowPassword((prev)=>!prev)}>
                    {
                      showPassword?(<AiOutlineEyeInvisible size={23}/>):(<AiOutlineEye size={23}/>)
                    }
                </span>  
            </label>
            <Link to="#" className="text-cyan-600 float-right mt-0.5 mb-8">Forgot Password ?</Link>
            <div>
                <button className="bg-yellow-400 w-full py-2 px-3 rounded-md text-xl font-medium">
                    <p>Sign In</p>
                </button>
            </div>
            
        </form>
    )
}

export default LoginForm;