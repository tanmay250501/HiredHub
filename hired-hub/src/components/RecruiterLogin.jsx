import React, { useState } from "react";
import { assets } from "../assets/assets";

const RecruiterLogin = () => {
    const [state, setState] = useState("Login");

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [image, setImage] = useState(false);

    const [textDataSubmited, setTextDataSubmited] = useState(false);

    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
            <form className="relative bg-white p-10 rounded-xl text-slate-500">
                <h1 className="text-center text-2xl text-neutral-700 font-medium">
                    Recruiter {state}
                </h1>
                <p className="text-sm">
                    {state === "Login"
                        ? "Welcome back! Please sign in to continue"
                        : "Create an account to get started"}
                </p>

                {state === "Sign Up" && textDataSubmited
                    ? <>
                        
                    </>
                    :
                    <>
                        {state !== "Login" && (
                            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                                <img src={assets.person_icon} alt="Icon" />
                                <input
                                    className="outline-none text-sm"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    type="text"
                                    placeholder="Company Name"
                                    required
                                />
                            </div>
                        )}
                        <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                            <img src={assets.email_icon} alt="Icon" />
                            <input
                                className="outline-none text-sm"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder="Company Email Id"
                                required
                            />
                        </div>
                        <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                            <img src={assets.lock_icon} alt="Icon" />
                            <input
                                className="outline-none text-sm"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                    </>

                }
                <p className="text-sm text-blue-600 my-4 cursor-pointer">
                    Forgot Password?
                </p>

                <button className="bg-blue-600 w-full text-white py-2 rounded-full">
                    {state === "Login" ? "Login" : "Create Account"}
                </button>

                {state === "Login" ? (
                    <p>
                        Don't have an account?{" "}
                        <span
                            className="text-blue-600 cursor-pointer"
                            onClick={() => setState("Sign Up")}
                        >
                            Sign Up
                        </span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span
                            className="text-blue-600 cursor-pointer"
                            onClick={() => setState("Login")}
                        >
                            Login
                        </span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default RecruiterLogin;
