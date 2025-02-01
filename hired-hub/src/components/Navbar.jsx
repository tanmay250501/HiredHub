import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from '../assets/assets.js';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
    const { openSignIn } = useClerk();
    const { user } = useUser();
    const [scrolled, setScrolled] = useState(false);

    // Scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 w-full z-50 transition-all duration-300 
            ${scrolled ? "backdrop-blur-md bg-white/80 shadow-md" : "bg-white shadow-lg"}`}>
            <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center py-3">
                {/* Logo */}
                <Link to={'/'}>
                    <img className="h-12" src={assets.Logo1} alt="logo" />
                </Link>

                {/* Navigation */}
                {user ? (
                    <div className="flex items-center gap-3">
                        <Link to={'/applications'}>Applied Jobs</Link>
                        <p>|</p>
                        <p className="max-sm:hidden">Hi, {user.firstName}</p>
                        <UserButton />
                    </div>
                ) : (
                    <div className="flex gap-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                        <button className="text-gray-600">Recruiter Login</button>
                        <button 
                            onClick={() => openSignIn()} 
                            className="bg-blue-600 text-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 rounded-full"
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
