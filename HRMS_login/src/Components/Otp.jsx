import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        document.getElementById(`otp${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.join('').length < 4) {
      setError('Please enter a valid 4-digit OTP');
      return;
    }
    setError('');
    alert('OTP verified successfully');
    navigate('/new-password');
  };

  return (
    <div
      className="flex min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/src/assets/Backround.jpg')` }}
    >
      <div className="w-full max-w-md p-8 m-auto bg-white bg-opacity-50 rounded-lg shadow-md backdrop-blur-sm lg:w-1/2">
        <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex justify-center space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 transition-all duration-300 ease-in-out"
            />
          ))}
          <button
            type="submit"
            className="ml-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300 ease-in-out"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;


// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// const Otp = () => {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();
//   const { token } = useParams(); // Getting token from URL parameters

//   const handleChange = (e, index) => {
//     const { value } = e.target;
//     if (/^\d*$/.test(value) && value.length <= 1) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);
//       if (value && index < 3) {
//         document.getElementById(`otp${index + 1}`).focus();
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const otpString = otp.join("");

//     if (otpString.length < 4) {
//       setError("Please enter a valid 4-digit OTP");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         `http://localhost:5000/api/Login/reset_password/${token}`, // Using the token from params
//         { otp: otpString }
//       );

//       if (res.data.message === "OTP verified successfully") {
//         navigate("/new-password");
//       } else {
//         setError("Invalid OTP. Please try again.");
//       }
//     } catch (error) {
//       setError("Failed to verify OTP. Please try again later.");
//     }
//   };

//   return (
//     <div
//       className="flex min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url('/src/assets/Backround.jpg')` }}
//     >
//       <div className="w-full max-w-md p-8 m-auto bg-white bg-opacity-50 rounded-lg shadow-md backdrop-blur-sm lg:w-1/2">
//         <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         {success && <p className="text-green-500 mb-4">{success}</p>}
//         <form onSubmit={handleSubmit} className="flex justify-center space-x-2">
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               id={`otp${index}`}
//               type="text"
//               maxLength="1"
//               value={digit}
//               onChange={(e) => handleChange(e, index)}
//               className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 transition-all duration-300 ease-in-out"
//             />
//           ))}
//           <button
//             type="submit"
//             className="ml-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300 ease-in-out"
//           >
//             Verify OTP
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Otp;
