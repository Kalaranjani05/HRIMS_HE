


// import {
// 	LayoutDashboard,
// 	ClipboardCheck,
// 	Menu,
// 	CalendarDays,

// 	NotebookPen,
	
// 	WalletCards,
// 	CircleChevronDown,
//   } from "lucide-react";
//   import { useState } from "react";
//   import { AnimatePresence, motion } from "framer-motion";
//   import { Link } from "react-router-dom";
  
//   const SIDEBAR_ITEMS = [
// 	{
// 	  name: "Dashboard",
// 	  icon: LayoutDashboard,
// 	  color: "#6366f1",
// 	  href: "/",
// 	},
	
// 	{
// 	  name: "Attendance",
// 	  icon: ClipboardCheck,
// 	  color: "35bc89",
// 	  href: "/attendance",
// 	},

// 	{
// 	  name: "Leave",
// 	  icon: NotebookPen,
// 	  color: "fa6d57 ",
// 	  href: "/leave",
// 	},
	
// 	{
// 	  name: "Payroll",
// 	  submenu: true,
// 	  submenuItems: [{ item: "Payslip", href: "Payroll/Payslip" }],
// 	  icon: WalletCards,
// 	  color: "#a569bd",
// 	  href: "/payroll",
// 	},
// 	{
// 	  name: "Calender",
// 	  icon: CalendarDays,
// 	  color: "#6EE7B7",
// 	  href: "/calendar",
// 	},
//   ];
  
//   const Sidebar = () => {
// 	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// 	const [SubmenuOpen, setSubmenuOpen] = useState(false);
  
// 	return (
// 	  <motion.div
// 		className={`relative z-10 transition-all duration-150 ease-linear flex-shrink-0 
// 				  ${isSidebarOpen ? "w-84" : "w-20"}`}
// 		animate={{ width: isSidebarOpen ? 256 : 80 }}
// 	  >
// 		<div className="h-full bg-white bg-opacity-0 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">

// 		  <div className="flex items-center justify-between">
// 			<motion.button
// 			  whileHover={{ scale: 1.2 }}
// 			  whileTap={{ scale: 0.9 }}
// 			  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// 			  className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
// 			>
// 			  <Menu size={24} />
// 			</motion.button>
// 			{isSidebarOpen && (
// 			  <span className=" text-lg font-semibold text-white-800 mr-6">
// 				HASH ENCHANTED
// 			  </span>
// 			)}
// 		  </div>
  
// 		  <nav className="mt-8 flex-grow">
// 			{SIDEBAR_ITEMS.map((item) => (
// 			  <Link key={item.href} to={item.href}>
// 				<motion.div className="flex items-center p-4 text-lg font-serif rounded-lg hover:bg-gray-700 transition-colors mb-2">
// 				  <item.icon
// 					size={20}
// 					style={{ color: item.color, minWidth: "20px" }}
// 				  />
// 				  <AnimatePresence>
// 					{isSidebarOpen && (
// 					  <motion.span
// 						className="ml-4 whitespace-nowrap"
// 						initial={{ opacity: 0, width: 0 }}
// 						animate={{ opacity: 1, width: "auto" }}
// 						exit={{ opacity: 0, width: 0 }}
// 						transition={{ duration: 0.2, delay: 0.3 }}
// 					  >
// 						<div className="relative">
// 						  {item.submenu && (
// 							<CircleChevronDown
// 							  className={`absolute left-32  ${
// 								SubmenuOpen && "rotate-180"
// 							  }`}
// 							  onClick={() => setSubmenuOpen(!SubmenuOpen)}
// 							/>
// 						  )}
// 						</div>
// 						<motion.div
// 						  initial={{ opacity: 0, y: 80 }}
// 						  animate={{ opacity: 1, y: 0 }}
// 						  transition={{ duration: 1 }}
// 						>
// 						  <motion.div
// 							whileHover={{ x: 23, scale: 1 }}
// 							animate={{ x: 0, scale: 1 }}
// 							transition={{ duration: 0.3 }}
// 						  >
// 							{item.name}
// 						  </motion.div>
// 						</motion.div>
// 					  </motion.span>
// 					)}
// 				  </AnimatePresence>
// 				</motion.div>
// 				{item.submenu && SubmenuOpen && isSidebarOpen && (
// 				  <ul>
// 					{item.submenuItems.map((submenuItem, index) => (
// 					  <Link key={index} to={submenuItem.href}>
// 						<li
// 						  key={index}
// 						  className="text-white text-lg font-serif cursor-pointer p-3 px-16 hover:bg-slate-600 rounded-md"
// 						>
// 						  {submenuItem.item}
// 						</li>
// 					  </Link>
// 					))}
// 				  </ul>
// 				)}
// 			  </Link>
// 			))}
// 		  </nav>
// 		</div>
// 	  </motion.div>
// 	);
//   };
//   export default Sidebar;
  

import {
	LayoutDashboard,
	ClipboardCheck,
	Menu,
	CalendarDays,
	NotebookPen,
	WalletCards,
	CircleChevronDown,
  } from "lucide-react";
  import { useState, useEffect, useRef } from "react";
  import { AnimatePresence, motion } from "framer-motion";
  import { Link } from "react-router-dom";
  
  const SIDEBAR_ITEMS = [
	{
	  name: "Dashboard",
	  icon: LayoutDashboard,
	  color: "#6366f1",
	  href: "/",
	},
	{
	  name: "Attendance",
	  icon: ClipboardCheck,
	  color: "#35bc89",
	  href: "/attendance",
	},
	{
	  name: "Leave",
	  icon: NotebookPen,
	  color: "#fa6d57",
	  href: "/leave",
	},
	{
	  name: "Payroll",
	  submenu: true,
	  submenuItems: [{ item: "Payslip", href: "/payroll/payslip" }],
	  icon: WalletCards,
	  color: "#a569bd",
	//   href: "/payroll",
	},
	{
	  name: "Calendar",
	  icon: CalendarDays,
	  color: "#6EE7B7",
	  href: "/calendar",
	},
  ];
  
  const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [SubmenuOpen, setSubmenuOpen] = useState(false);
	const [isCheckedIn, setIsCheckedIn] = useState(false);
	const [time, setTime] = useState(0); // Timer state
	const timerRef = useRef(null); // Ref for the timer interval
  
	// Toggle Check-In/Check-Out state and manage timer
	const handleToggle = () => {
	  if (isCheckedIn) {
		// Stop the timer on Check-Out
		clearInterval(timerRef.current);
	  } else {
		// Start the timer on Check-In
		timerRef.current = setInterval(() => {
		  setTime((prevTime) => prevTime + 1);
		}, 1000);
	  }
	  setIsCheckedIn(!isCheckedIn);
	};
  
	// Clear timer on component unmount
	useEffect(() => {
	  return () => clearInterval(timerRef.current);
	}, []);
  
	// Format time in HH:MM:SS
	const formatTime = (seconds) => {
	  const hrs = Math.floor(seconds / 3600);
	  const mins = Math.floor((seconds % 3600) / 60);
	  const secs = seconds % 60;
	  return `${hrs.toString().padStart(2, "0")}:${mins
		.toString()
		.padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
	};
  
	return (
	  <motion.div
		className={`relative z-10 transition-all duration-150 ease-linear flex-shrink-0 
				  ${isSidebarOpen ? "w-84" : "w-20"}`}
		animate={{ width: isSidebarOpen ? 256 : 80 }}
	  >
		<div className="h-full bg-white bg-opacity-0 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
		  <div className="flex items-center justify-between">
			<motion.button
			  whileHover={{ scale: 1.2 }}
			  whileTap={{ scale: 0.9 }}
			  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			  className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
			>
			  <Menu size={24} />
			</motion.button>
			{isSidebarOpen && (
			  <span className="text-lg font-semibold text-white-800 mr-6">
				HASH ENCHANTED
			  </span>
			)}
		  </div>
  
		  {/* Conditionally Render Check-In/Check-Out Slider with Timer */}
		  {isSidebarOpen && (
			<div className="mt-4">
			  <div className="flex items-center justify-between">
				<span
				  className={`text-lg font-medium ${
					isCheckedIn ? "text-green-500" : "text-red-500"
				  }`}
				>
				  {isCheckedIn ? "Checked In" : "Checked Out"}
				</span>
				<motion.button
				  onClick={handleToggle}
				  className={`p-2 rounded-full transition-colors max-w-fit ${
					isCheckedIn ? "bg-green-500" : "bg-red-500"
				  }`}
				  whileHover={{ scale: 1.1 }}
				>
				  <motion.div
					initial={{ x: isCheckedIn ? 0 : 20 }}
					animate={{ x: isCheckedIn ? 20 : 0 }}
					transition={{ type: "spring", stiffness: 300 }}
					className="w-6 h-6 bg-white rounded-full"
				  />
				</motion.button>
			  </div>
  
			  {/* Timer Display - Conditionally Rendered */}
			  {isCheckedIn && (
				<div className="mt-2 text-lg font-medium text-white-800">
				  Time: {formatTime(time)}
				</div>
			  )}
			</div>
		  )}
  
		  <nav className="mt-8 flex-grow">
			{SIDEBAR_ITEMS.map((item) => (
			  <Link key={item.href} to={item.href}>
				<motion.div className="flex items-center p-4 text-lg font-serif rounded-lg hover:bg-gray-700 transition-colors mb-2">
				  <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
				  <AnimatePresence>
					{isSidebarOpen && (
					  <motion.span
						className="ml-4 whitespace-nowrap"
						initial={{ opacity: 0, width: 0 }}
						animate={{ opacity: 1, width: "auto" }}
						exit={{ opacity: 0, width: 0 }}
						transition={{ duration: 0.2, delay: 0.3 }}
					  >
						<div className="relative">
						  {item.submenu && (
							<CircleChevronDown
							  className={`absolute left-32 ${
								SubmenuOpen && "rotate-180"
							  }`}
							  onClick={() => setSubmenuOpen(!SubmenuOpen)}
							/>
						  )}
						</div>
						<motion.div
						  initial={{ opacity: 0, y: 80 }}
						  animate={{ opacity: 1, y: 0 }}
						  transition={{ duration: 1 }}
						>
						  <motion.div
							whileHover={{ x: 23, scale: 1 }}
							animate={{ x: 0, scale: 1 }}
							transition={{ duration: 0.3 }}
						  >
							{item.name}
						  </motion.div>
						</motion.div>
					  </motion.span>
					)}
				  </AnimatePresence>
				</motion.div>
				{item.submenu && SubmenuOpen && isSidebarOpen && (
				  <ul>
					{item.submenuItems.map((submenuItem, index) => (
					  <Link key={index} to={submenuItem.href}>
						<li
						  key={index}
						  className="text-white text-lg font-serif cursor-pointer p-3 px-16 hover:bg-slate-600 rounded-md"
						>
						  {submenuItem.item}
						</li>
					  </Link>
					))}
				  </ul>
				)}
			  </Link>
			))}
		  </nav>
		</div>
	  </motion.div>
	);
  };
  
  export default Sidebar;