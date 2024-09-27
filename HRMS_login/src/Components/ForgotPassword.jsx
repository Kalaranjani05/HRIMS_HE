import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      setError("Email is required");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/Login/reset_password",
        { email }
      );

      if (res.data.message === "OTP sent successfully") {
        setSuccess("OTP sent successfully");
        setError(""); // Clear any previous error

        // If the response contains a token, extract it
        const token = res.data.token; // Assuming your API returns a token

        // Navigate to OTP page (with token if required)
        // navigate("/otp");  // Pass the token to the OTP page if needed
        navigate(`/otp/${token}`);
      } else {
        setError(res.data.message || "Failed to send OTP. Please try again.");
      }
    } catch (error) {
      setError(
        "Failed to send OTP. Please check your connection or try again later."
      );
    }
  };

  return (
    <div
      className="flex min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/src/assets/Backround.jpg')` }}
    >
      <div className="w-full max-w-md p-8 m-auto bg-white bg-opacity-50 rounded-lg shadow-md backdrop-blur-sm lg:w-1/2">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm transition-all duration-300 ease-in-out bg-white bg-opacity-80 backdrop-blur-md"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300 ease-in-out"
          >
            Send OTP
          </button>
        </form>
        <p className="mt-4 text-center">
          <Link to="/login" className="text-green-600 hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
