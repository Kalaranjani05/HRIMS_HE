import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading'; // Import the Loading component

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Show loading screen

    let errorMessage = '';

    if (newPassword === '' || confirmPassword === '') {
      errorMessage = 'Both fields are required';
    } else if (newPassword !== confirmPassword) {
      errorMessage = 'Passwords do not match';
    }

    if (errorMessage) {
      setError(errorMessage);
      setLoading(false); // Hide loading screen
    } else {
      setError('');
      setTimeout(() => {
        alert('Password reset successful!');
        navigate('/login');
        setLoading(false); // Hide loading screen
      }, 2000); // Simulate a network request
    }
  };

  return (
    <>
      {loading && <Loading />} {/* Show loading screen if loading */}
      <div
        className="flex min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/src/assets/Backround.jpg')` }}
      >
        <div className="w-full max-w-md p-8 m-auto bg-white bg-opacity-50 rounded-lg shadow-md backdrop-blur-sm lg:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password:</label>
              <input
                type="password"
                id="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm transition-all duration-300 ease-in-out bg-white bg-opacity-80 backdrop-blur-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm transition-all duration-300 ease-in-out bg-white bg-opacity-80 backdrop-blur-md"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300 ease-in-out"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
