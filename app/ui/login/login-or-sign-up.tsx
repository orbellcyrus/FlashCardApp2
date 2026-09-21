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
        <div>
            
            <button onClick={handleSwapForms}>
                Sign In or Login instead
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