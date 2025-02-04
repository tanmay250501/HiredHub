import React from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const DashBoard = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Navbar for Recruiters */}
            <div className="w-full shadow py-3 sm:py-4 bg-white fixed top-0 left-0 right-0 z-50">
                <div className="px-4 sm:px-5 flex justify-between items-center max-w-7xl mx-auto">
                    {/* Logo */}
                    <img
                        onClick={() => navigate("/")}
                        className="w-28 sm:w-36 h-10 sm:h-12 cursor-pointer object-contain"
                        src={assets.Logo1}
                        alt="Our Logo"
                    />

                    {/* Right Side */}
                    <div className="flex items-center gap-3">
                        {/* Hide welcome text on small screens */}
                        <p className="hidden sm:block text-gray-700 font-medium">
                            Welcome, HiredHub
                        </p>

                        {/* Profile Dropdown */}
                        <div className="relative group">
                            <img
                                className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border cursor-pointer transition-transform transform group-hover:scale-105"
                                src={assets.company_icon}
                                alt="User"
                            />
                            <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                                    <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* Sidebar + Content Layout */}
            <div className="flex mt-20 w-full">
                {/* Sidebar */}
                <aside className="bg-white shadow-lg min-w-screen p-5 space-y-4 h-screen fixed left-0 top-20">
                    <ul className="space-y-4">
                        <li>
                            <NavLink
                                to="/dashboard/add-job"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? "bg-blue-500 text-white" : "text-gray-700"
                                    } hover:bg-blue-100`
                                }
                            >
                                <img className="min-w-4" src={assets.add_icon} alt="Add Job" />
                                <p className="max-sm:hidden">Add Job</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/manage-job"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? "bg-blue-500 text-white" : "text-gray-700"
                                    } hover:bg-blue-100`
                                }
                            >
                                <img className="min-w-4" src={assets.home_icon} alt="Manage Jobs" />
                                <p className="max-sm:hidden">Manage Job</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/view-applications"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? "bg-blue-500 text-white" : "text-gray-700"
                                    } hover:bg-blue-100`
                                }
                            >
                                <img
                                    className="min-w-4"
                                    src={assets.person_tick_icon}
                                    alt="View Applications"
                                />
                                <p className="max-sm:hidden">View Applications</p>
                            </NavLink>
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-5 ml-[200px] px-10">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashBoard;
