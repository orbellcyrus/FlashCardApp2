"use client"
import SignUpForm from "./sign-up-form";
import LoginForm from "./login-form";
import { useState } from "react";
import { Suspense } from "react";
export default function LoginOrSignUp(){
    const [currentForm,setCurrentForm] = useState("login");
    function handleSwapForms(){
        setCurrentForm( currentForm === "login" ? "signUp" : "login");
    }
    return(
        <div className=" flex flex-col items-center">
            
            <button onClick={handleSwapForms} className="bg-white text-black rounded-xl p-2 ">
               {currentForm == "login" && "Sign Up Instead"}
               {currentForm == "signUp" && "Log In Instead"}
            </button>

            {currentForm === "login" && 
                <Suspense>
                     <LoginForm></LoginForm>
                </Suspense>
            }

            {currentForm === "signUp" && 
                <Suspense>
                    <SignUpForm></SignUpForm>
                </Suspense>  
            }
        </div>
    );
}