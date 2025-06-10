import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center w-full px-12 py-4 bg-gray-200 ">
      {/* Logo */}
      <div className="text-3xl font-bold text-black">
        <Link to="/">
          Study<span className="text-blue-600">OU</span>
        </Link>
      </div>
      <form className="border border-gray-300" /*onSubmit={handleSearch}*/>
        <input
          type="search"
          placeholder="Search notes..."
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-2 outline-0 border-0 "
        />
        <button
          type="submit"
          className="text-blue-600  font-semibold p-2 hover:bg-blue-400 rounded-l-2xl hover:p-2 hover:text-xl"
        >
          🔍
        </button>
      </form>{" "}
      {/* Links */}
      <div className="flex space-x-10 font-semibold text-gray-700">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/notes" className="hover:text-blue-600">
          Notes
        </Link>
        <Link to="/about" className="hover:text-blue-600">
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-600">
          Contact
        </Link>
        <Link to="/signup" className="hover:text-blue-600">
          Sign Up
        </Link>
        <Link to="/login" className="hover:text-blue-600">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
