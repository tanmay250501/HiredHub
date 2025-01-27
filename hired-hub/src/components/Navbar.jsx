import React  from "react";
import { Link } from "react-router-dom";

import { assets } from '../assets/assets.js';
import  {useClerk, UserButton, useUser} from '@clerk/clerk-react';

const Navbar = () => {

    const {openSignIn} = useClerk();
    const {user} = useUser();

    return(
        <div className="shadow py-3">
            <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
                <img className="h-12" src={assets.Logo1} alt="logo" />
                {
                    user
                    ?<div className="flex items-center gap-3">
                        <Link to={'/applications'}>Applied Jobs</Link>
                        <p>|</p>
                        <p className="max-sm:hidden">Hi, {user.firstName}</p>
                        <UserButton/>
                    </div>
                    :
                <div className="flex gap-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    <button className="text-gray-600">Ricruter Login</button>
                    <button onClick={ e => openSignIn()} className="bg-blue-600 text-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 rounded-full">Login</button>
                </div>
                }
            </div>
        </div>
    )
}

export default Navbar;