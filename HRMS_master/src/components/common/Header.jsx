// const Header = ({ title }) => {
// 	return (
// 		<header className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700'>
// 			<div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
// 				<h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
// 			</div>
// 		</header>
// 	);
// };
// export default Header;


import { useState } from "react";
import { CircleUser, ChevronDown } from "lucide-react";

const Header = ({ title }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700'>
      <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
        <h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
        <div className='relative'>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className='flex items-center space-x-2 text-gray-300 hover:text-white'
          >
            <CircleUser size={24} />
            {/* <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} /> */}
          </button>
          {dropdownOpen && (
            <div className='absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-20'>
              <ul className='py-1'>
                <li>
                  <button
                    onClick={() => setDropdownOpen(false)}
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'
                  >
                    My Profile
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setDropdownOpen(false)}
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'
                  >
                    Settings
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setDropdownOpen(false)}
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
