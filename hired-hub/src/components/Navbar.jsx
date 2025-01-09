import React from "react";

import { assets } from '/src/assets/assets.js';

const Navbar = () => {

    return(
        <div>
            <div>
                <img src={assets.Logo} alt="logo" />
            </div>
        </div>
    )
}

export default Navbar;