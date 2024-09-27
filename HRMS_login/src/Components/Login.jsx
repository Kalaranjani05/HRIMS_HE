import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ITProfessionalImage from "../assets/Untitled.png"; // Adjust the path as needed
import axios from "axios";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      console.log("___________");

      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      console.log("???????????????????????");

      newErrors.email = "Invalid email address";
    }

    if (!password) {
      console.log("passsss");

      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/Login", {
        email,
        password,
      });
      if (res.data.message === "Login successful") {
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/src/assets/Backround.jpg')` }}
    >
      <div className="w-full max-w-md p-8 m-auto lg:w-1/2">
        <h1 className="text-5xl font-bold text-center mb-6 font-roboto text-black">
          WELCOME TO <span className="text-green-600">HASHENCHANT</span>
        </h1>
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-3 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm transition-all duration-300 ease-in-out bg-transparent text-black"
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm transition-all duration-300 ease-in-out bg-transparent text-black"
            />
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-4 py-2 ${
              isLoading ? "bg-gray-400" : "bg-green-600"
            } text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300 ease-in-out`}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-center">
          <Link
            to="/forgot-password"
            className="text-green-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </p>
        <div className="mt-6 text-center">
          <a
            href="https://www.instagram.com"
            className="text-gray-500 hover:text-pink-500 mx-2 transition-colors duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com"
            className="text-gray-500 hover:text-blue-700 mx-2 transition-colors duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <img
          src={ITProfessionalImage}
          alt="IT Professional"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Login;
