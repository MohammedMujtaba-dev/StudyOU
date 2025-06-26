import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div id="nav">
        {/* Top Navbar */}
        <div className="flex justify-evenly items-center py-5 relative sm:justify-around bg-white  shadow-md mb-5">
          <Link to="/" className="text-3xl font-bold text-black">
            Study<span className="text-blue-600">OU</span>
          </Link>

          <div className="gap-4 lg:gap-10 text-base font-medium sm:flex hidden items-center">
            {/* Search Bar for large screens */}

            {/* Nav Links */}
            <NavLink to="/" className="flex flex-col items-center gap-0.5">
              Home
              <hr className="border-none bg-gray-900 h-[1.5px] w-3/4 hidden" />
            </NavLink>
            <NavLink to="/notes" className="flex flex-col items-center gap-0.5">
              Study Material
              <hr className="border-none bg-gray-900 h-[1.5px] w-3/4 hidden" />
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center gap-0.5">
              About Us
              <hr className="border-none bg-gray-900 h-[1.5px] w-3/4 hidden" />
            </NavLink>
            <NavLink
              to="/contact"
              className="flex flex-col items-center gap-0.5"
            >
              Contact
              <hr className="border-none bg-gray-900 h-[1.5px] w-3/4 hidden" />
            </NavLink>
          </div>

          {/* Small Screen Icons */}
          <div className="flex gap-8 ">
            <div className="flex sm:gap-8 gap-10 items-center">
              {/* Toggle SearchBar for mobile */}
              <img
                src={assets.search_icon}
                alt="search"
                className=" w-5  sm:w-5 sm:h-5 cursor-pointer  block"
                onClick={() => setSearchBar(!searchBar)}
              />
              <img
                src={assets.profile_icon}
                alt="profile"
                className="w-5 sm:w-5 sm:h-5"
              />
            </div>

            <img
              src={assets.menu_icon}
              alt="menu"
              className="w-5 h-4   sm:hidden block"
              onClick={() => {
                setVisible(true);
              }}
            />
          </div>
        </div>

        {/* Mobile SearchBar below Navbar */}
        {searchBar && (
          <div className=" flex items-center gap-3   my-3 px-4 py-2 text-base rounded-2xl bg-white w-2/4 mx-auto shadow-md border ">
            <input
              type="search"
              placeholder="Search..."
              className="outline-none border-none w-full"
            />
            <img
              src={assets.search_icon}
              alt="search"
              className="w-4 cursor-pointer"
            />
            <img
              src={assets.cross_icon}
              alt=""
              className="w-4 cursor-pointer ml-2"
              onClick={() => {
                setSearchBar(false);
              }}
            />
          </div>
        )}
      </div>
      {visible && (
        <div>
          <div className="fixed inset-0 bg-black opacity-30 z-40"></div>
          <div className="fixed right-0 top-0 bg-white w-3/4 min-h-screen z-50 p-5">
            <div className="flex justify-between items-center mb-5">
              <p className="text-xl font-bold">Back</p>
              <img
                src={assets.cross_icon}
                alt="close"
                className="w-5 cursor-pointer"
                onClick={() => setVisible(false)}
              />
            </div>
            <div className="flex flex-col text-lg  mt-10">
              <Link
                to="/"
                className="border-t-1 border-b-1 py-3"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Home
              </Link>
              <Link
                to="/notes"
                className="border-t-1 border-b-1 py-3"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Notes
              </Link>
              <Link
                to="/about"
                className="border-t-1 border-b-1 py-3"
                onClick={() => {
                  setVisible(false);
                }}
              >
                About us
              </Link>
              <Link
                to="/contact"
                className="border-t-1 border-b-1 py-3"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
