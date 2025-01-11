import React from "react";

import { assets } from '../assets/assets.js';
import  {useClerk, UserButton, useUser} from '@clerk/clerk-react';

const Navbar = () => {

    const {openSignIn} = useClerk();

    return(
        <div className="shadow py-3">
            <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
                <img src={assets.logo} alt="logo" />
                <div className="flex gap-4 max-sm:text-xs">
                    <button className="text-gray-600">Recruter Login</button>
                    <button onClick={ e => openSignIn()} className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;