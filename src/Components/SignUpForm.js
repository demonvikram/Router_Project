import React, { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignUpForm=({setIsLoggedIn})=>{
    const [formData,setFormData]=useState({firstname:"",lastname:"",email:"",
    confirmpassword:"",password:""})

    const[showPasswordOne,setShowPasswordOne]=useState(false);
    const[showPasswordTwo,setShowPasswordTwo]=useState(false);
    const navigate=useNavigate();

    function changeHandler(event){
        setFormData((prev)=>{
            return(
                {...prev,[event.target.name]:event.target.value}
            )
        })
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Account Created")
        navigate("/dashboard")

    }
    return(
        <div>
            <div className="bg-slate-400 rounded-2xl w-1/3 flex gap-4 text-lg text-white">
                <button className="px-3 py-2 rounded-2xl hover:bg-slate-950 transition-all duration-700">Student</button>
                <button className="px-1 py-2 rounded-2xl hover:bg-slate-950 transition-all duration-700">Instructor</button>
            </div>
            
            <form onSubmit={submitHandler}>
            {/* name wala bhasad*/}
                <div className="flex gap-4">
                     <label className="w-1/2">
                        <p className="font-semibold text-white">First Name<sup className="text-red-500">*</sup></p>
                        <input 
                            required
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={changeHandler}
                            placeholder="Enter Your First Name"
                            className="w-full rounded-md border h-10 py-1 px-2"
                        />
                     </label>
                     <label className="w-1/2">
                        <p className="font-semibold text-white">Last Name<sup className="text-red-500">*</sup></p>
                        <input 
                            required
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={changeHandler}
                            placeholder="Enter your Last Name"
                            className="w-full rounded-md border h-10 py-1 px-2"
                        />
                     </label>
                </div>

                {/*email data*/}
                <div>
                    <label>
                        <p className="font-semibold text-white">Email<sup className="text-red-500">*</sup></p>
                        <input 
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={changeHandler}
                            placeholder="Enter your Email"
                            className="w-full rounded-md border h-10 py-1 px-2"
                        />
                        </label>
                </div>

                {/* password waali bhasad*/}
                <div className="flex gap-4">
                    <label className="w-1/2 relative">
                        <p className="font-semibold text-white">Password<sup className="text-red-500">*</sup></p>
                        <input 
                            required
                            type={showPasswordOne?("text"):("password")}
                            name="password"
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder="Enter your password"
                            className="w-full rounded-md border h-10 py-1 px-2"
                        />
                        <span className="absolute bottom-2 right-2 cursor-pointer" onClick={()=> setShowPasswordOne((prev)=>!prev)}>
                            {showPasswordOne?(<AiOutlineEyeInvisible size={23}/>):(<AiOutlineEye size={23}/>)}
                        </span>
                    </label>

                    <label className="w-1/2 relative">
                        <p className="font-semibold text-white">Confirm Password<sup className="text-red-500">*</sup></p>
                        <input 
                            required
                            type={showPasswordTwo?("text"):("password")}
                            name="confirmpassword"
                            value={formData.confirmpassword}
                            onChange={changeHandler}
                            placeholder="Enter your password again"
                            className="w-full rounded-md border h-10 py-1 px-2"
                        />
                        <span className="absolute bottom-2 right-2" onClick={()=> setShowPasswordTwo((prev)=>!prev)}>
                           {showPasswordTwo?(<AiOutlineEyeInvisible size={23}/>):(<AiOutlineEye size={23}/>)}
                        </span>
                    </label>
                </div>
                <div>
                    <button className="bg-yellow-400 mt-6 w-full py-2 px-3 rounded-md text-xl font-bold">
                        <p >Create Account</p>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm;