import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets";

const DashBoard = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  // Listen for scroll events to update navbar styling
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
    <div className="min-h-screen w-screen">
      {/* Fixed Navbar for Recruiters */}
      <div
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-white/80 shadow-md" : "bg-white shadow-lg"
        }`}
      >
        <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/">
            <img
              className="cursor-pointer max-sm:w-32 h-10"
              src={assets.Logo1}
              alt="Our Logo"
            />
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Hide welcome text on small screens */}
            <p className="max-sm:hidden">Welcome, HiredHub</p>

            {/* Profile Dropdown */}
            <div className="relative group">
              <img
                className="w-8 border rounded-full"
                src={assets.company_icon}
                alt="User"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10 whitespace-nowrap hover:bg-gray-100">
                    My Profile
                  </li>
                  <li className="py-1 px-2 cursor-pointer pr-10 whitespace-nowrap hover:bg-gray-100">
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content (offset by navbar height) */}
      <div className="pt-16 flex">
        {/* Sidebar */}
        <div className="inline-block min-h-screen border-r-2">
          <ul className="flex flex-col items-start pt-5 text-gray-800">
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                }`
              }
              to={'/dashboard/add-job'}
            >
              <img className="min-w-4" src={assets.add_icon} alt="Add Icon" />
              <p className="max-sm:hidden">Add Job</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                }`
              }
              to={'/dashboard/manage-job'}
            >
              <img className="min-w-4" src={assets.home_icon} alt="Home Icon" />
              <p className="max-sm:hidden">Manage Job</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                }`
              }
              to={'/dashboard/view-applications'}
            >
              <img className="min-w-4" src={assets.person_tick_icon} alt="Applications Icon" />
              <p className="max-sm:hidden">View Applications</p>
            </NavLink>
          </ul>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
