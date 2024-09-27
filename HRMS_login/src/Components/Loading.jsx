import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white bg-opacity-50">
      <div className="w-16 h-16 border-4 border-t-4 border-green-600 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
