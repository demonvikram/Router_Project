import React from "react";
import frame from "../assets/frame.png"
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"

const Template=({title,desc1,desc2,image,formtype,setIsLoggedIn})=>{
    return(
        <div className="flex justify-evenly gap-5 mt-20 bg-slate-900">
            <div className="w-2/5">
                <h1 className="text-4xl text-white font-bold">{title}</h1>
                <p className="flex flex-col mt-3 capitalize text-xl">
                    <span className="text-zinc-300">{desc1}</span>
                    <span className="text-cyan-600 italic">{desc2}</span>
                </p>

                {
                    formtype==="signup"?
                    (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):
                    (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
                }
                <div className="flex w-auto mt-5">
                    <div className="w-1/2 bg-white h-0.5"></div>
                    <p className="text-xl text-yellow-500">OR</p>
                    <div className="w-1/2 bg-white h-0.5"></div>
                </div>
                <button className="bg-yellow-400 w-full py-2 px-3 rounded-md text-xl font-bold">
                    <p>Sign Up with Google</p>
                </button>
            </div>

            <div className="relative">
               <img className="block" src={frame}alt="fram Image" loading="lazy" width={500} height={440}/>
               <img className="absolute bottom-4 right-4" src={image} alt="login Image" loading="lazy" width={500} height={440}/>
            </div>
        </div>
    )
}

export default Template;