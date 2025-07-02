import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/studyMaterials") {
      setSearchBar(true);
    } else {
      setSearchBar(false);
    }
  }, [location]);

  return (
    <>
      <div id="nav">
        {/* <div className="flex justify-evenly items-center py-5 relative sm:justify-around bg-white  shadow-md mb-5"> */}
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex justify-evenly items-center py-5 sm:justify-around">
          <Link to="/" className="text-2xl sm:text-3xl font-bold text-black">
            Study<span className="text-blue-600">OU</span>
          </Link>

          <div className="gap-4 lg:gap-10 text-base font-medium sm:flex hidden items-center">
            <NavLink to="/" className="flex flex-col items-center gap-0.5">
              Home
              <hr className="border-none bg-gray-900 h-[1.5px] w-3/4 hidden" />
            </NavLink>
            <NavLink
              to="/studyMaterials"
              className="flex flex-col items-center gap-0.5"
            >
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
          <div className="flex gap-5 sm:gap-8 ml-2 sm:ml-0 items-center">
            <div className="flex sm:gap-8 gap-5 items-center">
              <Link to="/studyMaterials">
                <img
                  src={assets.search_icon}
                  alt="search"
                  className=" w-4.5  sm:w-5 sm:h-5 cursor-pointer  block"
                />
              </Link>
              <div className="relative">
                <img
                  src={assets.profile_icon}
                  alt="PROFILE ICON"
                  className="w-4.5 sm:w-5 cursor-pointer"
                  onClick={() => setDropDown(!dropDown)}
                />
                {dropDown && (
                  <div className="absolute right-0 pt-4 z-10">
                    <div className="flex flex-col gap-2 w-32 px-5 py-3 bg-slate-100 text-gray-500 rounded shadow-md z-50">
                      <Link
                        to="/login"
                        className="hover:text-black"
                        onClick={() => setDropDown(false)}
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="hover:text-black"
                        onClick={() => setDropDown(false)}
                      >
                        Signup
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <img
              src={assets.menu_icon}
              alt="menu"
              className="w-4.5 h-3.5 sm:w-5 sm:h-4   sm:hidden block cursor-pointer"
              onClick={() => {
                setVisible(true);
              }}
            />
          </div>
        </div>

        {/* Mobile SearchBar below Navbar */}
        {/* {searchBar && location.pathname === "/studyMaterials" && (
          <div className=" flex items-center gap-3   my-3 px-4 py-2 text-base rounded-2xl bg-white w-3/4 mx-auto shadow-md border ">
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
        )} */}
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
                to="/studyMaterials"
                className="border-t-1 border-b-1 py-3"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Study Materials
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
