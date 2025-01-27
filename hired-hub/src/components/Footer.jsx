import React from "react";
import { assets} from '../assets/assets.js';

const Footer = ()=>{

    return(
        <div className="container px-4 2xl:px-20 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 py-3 mt-20 ">
  <div className="flex items-center gap-2">
    <img className="w-10 h-10 mt-2" src={assets.Logo} alt="Company Logo" />
    <img className="w-40" src={assets.Logo1} alt="Company Logo" />
  </div>
  <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 text-center max-sm:hidden">
    &copy; 2025 HiredHub. All rights reserved.
  </p>
  <div className="flex gap-2.5">
    <img className="w-8 h-8 hover:opacity-75 transition-opacity duration-200" src={assets.facebook_icon} alt="Facebook" />
    <img className="w-8 h-8 hover:opacity-75 transition-opacity duration-200" src={assets.twitter_icon} alt="Twitter" />
    <img className="w-8 h-8 hover:opacity-75 transition-opacity duration-200" src={assets.instagram_icon} alt="Instagram" />
  </div>
</div>

    )
}


export default Footer;