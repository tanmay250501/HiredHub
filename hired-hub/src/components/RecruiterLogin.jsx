import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const RecruiterLogin = () => {
    const [state, setState] = useState("Login");

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [image, setImage] = useState(false);

    const [textDataSubmited, setTextDataSubmited] = useState(false);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (state === "Sign Up" && !textDataSubmited) {
            setTextDataSubmited(true);
        }
    };

    const {setShowRecruiterLogin} = useContext(AppContext)

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        
        return() => {
            document.body.style.overflow = 'unset'

        }
    },[])

    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
            <form onSubmit={onSubmitHandler} className="relative bg-white p-10 rounded-xl text-slate-500 shadow-lg">
                <h1 className="text-center text-2xl text-neutral-700 font-medium mb-4">
                    Recruiter {state}
                </h1>
                <p className="text-sm mb-6">
                    {state === "Login"
                        ? "Welcome back, employee seeker! Time to log in and find perfect candidate."
                        : "New here? Create an account and start your employee hunt today!"}
                </p>

                {state === "Sign Up" && textDataSubmited ? (
                    <div className="flex flex-col items-center gap-3">
                        <label htmlFor="image" className="cursor-pointer flex flex-col items-center gap-2">
                            <img className="w-20 h-20 object-cover rounded-full border border-gray-400 p-2" src={image ? URL.createObjectURL(image) : assets.upload_area} alt="Upload" />
                            <input onChange={ e => setImage(e.target.files[0])} type="file" id="image" hidden required />
                            <p className="text-gray-600 text-sm">Upload Company Logo</p>
                        </label>
                    </div>
                ) : (
                    <>
                        {state !== "Login" && (
                            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                                <img src={assets.person_icon} alt="Icon" />
                                <input
                                    className="outline-none text-sm w-full"
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
                                className="outline-none text-sm w-full"
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
                                className="outline-none text-sm w-full"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                    </>
                )}
                {state === "Login" && (
                    <p className="text-sm text-blue-600 my-4 cursor-pointer">
                        Forgot Password?
                    </p>
                )}

                <button type="submit" className="bg-blue-600 w-full text-white py-2 rounded-full mt-3 mb-2 hover:bg-blue-700 transition">
                    {state === "Login" ? "Login" : textDataSubmited ? "Create Account" : "Next..."}
                </button>

                {state === "Login" ? (
                    <p className="text-center mt-4">
                        Don't have an account?{" "}
                        <span
                            className="text-blue-600 cursor-pointer"
                            onClick={() => setState("Sign Up")}
                        >
                            Sign Up
                        </span>
                    </p>
                ) : (
                    <p className="text-center mt-4">
                        Already have an account?{" "}
                        <span
                            className="text-blue-600 cursor-pointer"
                            onClick={() => setState("Login")}
                        >
                            Login
                        </span>
                    </p>
                )}

                <img onClick={ e => setShowRecruiterLogin(false)} className="absolute top-5 right-5 cursor-pointer" src={assets.cross_icon} alt="Cross Icon" />
            </form>
        </div>
    );
};

export default RecruiterLogin;
