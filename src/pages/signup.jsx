import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        { name, email, password }
      );

      if (response.data.success) {
        toast.success("Signup successful");
        navigate("/login");
      } else {
        // If backend returns success: false
        if (response.data.message === "User already exists") {
          toast.error("Account already exists. Please log in.");
        } else {
          toast.error(response.data.message || "Signup failed");
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        if (error.response.data.message === "User already exists") {
          toast.error("Account already exists. Please log in.");
        } else {
          toast.error(error.response.data.message || "Signup failed");
        }
      } else {
        toast.error("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="bg-none sm:bg-gray-50 min-h-screen pt-6 ">
      <div className="max-w-md mx-auto space-y-6 bg-white shadow-md p-6 sm:p-12 rounded-lg">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-600 ">
            SignUp
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col  ">
          <div className="flex flex-col gap-1 mb-4 ">
            <label htmlFor="name">Name :</label>
            <input
              name="name"
              type="text"
              placeholder="Enter name"
              required
              className="border border-gray-300 px-4 py-3 rounded-md outline-none "
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="email">Email :</label>
            <input
              name="email"
              type="text"
              placeholder="Enter email"
              required
              className="border border-gray-300 px-4 py-3 rounded-md outline-none "
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="password">Password :</label>
            <input
              name="password"
              type="text"
              placeholder="Enter password"
              required
              className="border border-gray-300 px-4 py-3 rounded-md outline-none "
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition mb-3"
          >
            Signup
          </button>
          <p className="text-gray-700 text-center">
            Already have account?
            <Link to="/login" className="text-blue-500">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default signup;
