// import { useState } from "react";
// import Header from "../components/common/Header";
// import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Leave = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [validateOpen, setValidateOpen] = useState(false);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [selectedMenu, setSelectedMenu] = useState("Pending"); // New state to manage selected menu

//   const [employees, setEmployees] = useState([
//     {
//       employeeCode: "001",
//       fullname: "Ranjani",
//       validation: "Valid",
//       status: "Pending",
//       inclusiveLeaveDate: "2024-08-01 to 2024-08-07",
//       noOfDays: "7",
//       availableLeaveBalance: "12",
//       leaveType: "Sick Leave",
//       date: "2024-08-01",
//       reason: "Medical emergency",
//       contactNo: "123-456-7890",
//     },
//     // Add more employees as needed
//   ]);

//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   const [newEmployee, setNewEmployee] = useState({
//     employeeCode: "",
//     fullname: "",
//     validation: "",
//     status: "",
//     inclusiveLeaveDate: "",
//     noOfDays: "",
//     availableLeaveBalance: "",
//     leaveType: "",
//     date: "",
//     reason: "",
//     contactNo: "",
//   });

//   const handleDropdownToggle = (index) => {
//     setDropdownOpen(dropdownOpen === index ? null : index);
//   };

//   const handleActionClick = (action, employee) => {
//     if (action === "Validate Leave") {
//       setSelectedEmployee(employee);
//       setValidateOpen(true);
//     } else {
//       alert(action);
//     }
//     setDropdownOpen(null);
//   };

//   const handleInputChange = (e) => {
//     setNewEmployee({
//       ...newEmployee,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleAddEmployee = () => {
//     if (
//       newEmployee.employeeCode.trim() === "" ||
//       newEmployee.fullname.trim() === "" ||
//       newEmployee.validation.trim() === "" ||
//       newEmployee.status.trim() === "" ||
//       newEmployee.inclusiveLeaveDate.trim() === "" ||
//       newEmployee.noOfDays.trim() === "" ||
//       newEmployee.availableLeaveBalance.trim() === "" ||
//       newEmployee.leaveType.trim() === "" ||
//       newEmployee.date.trim() === "" ||
//       newEmployee.reason.trim() === "" ||
//       newEmployee.contactNo.trim() === ""
//     ) {
//       alert("All fields are required!");
//       return;
//     }

//     setEmployees([...employees, newEmployee]);
//     setNewEmployee({
//       employeeCode: "",
//       fullname: "",
//       validation: "",
//       status: "",
//       inclusiveLeaveDate: "",
//       noOfDays: "",
//       availableLeaveBalance: "",
//       leaveType: "",
//       date: "",
//       reason: "",
//       contactNo: "",
//     });
//     setValidateOpen(false);
//   };

//   const handleSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });
//   };

//   const sortedEmployees = [...employees].sort((a, b) => {
//     if (sortConfig.key) {
//       if (sortConfig.direction === "asc") {
//         return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
//       } else {
//         return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
//       }
//     }
//     return 0;
//   });

//   const totalPages = Math.ceil(sortedEmployees.length / itemsPerPage);
//   const paginatedEmployees = sortedEmployees.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="flex-1 overflow-auto relative z-10">
//       <Header title="Leave" />
//       <div className="p-6">
//         <div className="p-6 bg-white rounded-lg shadow-md">
//           <div className="flex justify-between items-center mb-8">
//             {/* Menu Buttons */}
//             <div className="space-x-4">
//               <button
//                 onClick={() => setSelectedMenu("Pending")}
//                 className={`px-4 py-2 rounded-md ${
//                   selectedMenu === "Pending"
//                     ? "bg-indigo-600 text-white"
//                     : "bg-gray-200 text-gray-800"
//                 }`}
//               >
//                 Pending
//               </button>
//               <button
//                 onClick={() => setSelectedMenu("Approved")}
//                 className={`px-4 py-2 rounded-md ${
//                   selectedMenu === "Approved"
//                     ? "bg-indigo-600 text-white"
//                     : "bg-gray-200 text-gray-800"
//                 }`}
//               >
//                 Approved
//               </button>
//             </div>
//             <div className="flex justify-between items-center mb-8">
//               <button
//                 onClick={() => setModalOpen(true)}
//                 className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md transform transition-transform hover:scale-105"
//               >
//                 <Link to="/file-leave">File a leave</Link>
//               </button>
//               <div className="flex space-x-4">
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-lg">
//             <table className="min-w-full bg-white rounded-lg">
//               <thead className="bg-gradient-to-r from-gray-100 to-gray-200 border-b">
//                 <tr>
//                   {selectedMenu === "Pending" && (
//                     <>
//                       <th
//                         onClick={() => handleSort("leaveType")}
//                         className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
//                       >
//                         Leave Type
//                         {sortConfig.key === "leaveType" ? (
//                           sortConfig.direction === "asc" ? (
//                             <FaSortUp className="inline ml-2" />
//                           ) : (
//                             <FaSortDown className="inline ml-2" />
//                           )
//                         ) : (
//                           <FaSort className="inline ml-2" />
//                         )}
//                       </th>
//                       <th
//                         onClick={() => handleSort("inclusiveLeaveDate")}
//                         className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
//                       >
//                         Inclusive Leave Date
//                         {sortConfig.key === "inclusiveLeaveDate" ? (
//                           sortConfig.direction === "asc" ? (
//                             <FaSortUp className="inline ml-2" />
//                           ) : (
//                             <FaSortDown className="inline ml-2" />
//                           )
//                         ) : (
//                           <FaSort className="inline ml-2" />
//                         )}
//                       </th>
//                       <th
//                         onClick={() => handleSort("validation")}
//                         className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
//                       >
//                         Validation
//                         {sortConfig.key === "validation" ? (
//                           sortConfig.direction === "asc" ? (
//                             <FaSortUp className="inline ml-2" />
//                           ) : (
//                             <FaSortDown className="inline ml-2" />
//                           )
//                         ) : (
//                           <FaSort className="inline ml-2" />
//                         )}
//                       </th>
//                       <th
//                         onClick={() => handleSort("status")}
//                         className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
//                       >
//                         Status
//                         {sortConfig.key === "status" ? (
//                           sortConfig.direction === "asc" ? (
//                             <FaSortUp className="inline ml-2" />
//                           ) : (
//                             <FaSortDown className="inline ml-2" />
//                           )
//                         ) : (
//                           <FaSort className="inline ml-2" />
//                         )}
//                       </th>
//                       <th
//                         onClick={() => handleSort("status")}
//                         className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
//                       >
//                         Tools
//                       </th>
//                     </>
//                   )}

//                   {selectedMenu === "Approved" && (
//                     <>
//                       <th
//                         onClick={() => handleSort("leaveType")}
//                         className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
//                       >
//                         Leave Type
//                         {sortConfig.key === "leaveType" ? (
//                           sortConfig.direction === "asc" ? (
//                             <FaSortUp className="inline ml-2" />
//                           ) : (
//                             <FaSortDown className="inline ml-2" />
//                           )
//                         ) : (
//                           <FaSort className="inline ml-2" />
//                         )}
//                       </th>
//                       <th
//                         onClick={() => handleSort("date")}
//                         className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
//                       >
//                         Date Filed
//                         {sortConfig.key === "date" ? (
//                           sortConfig.direction === "asc" ? (
//                             <FaSortUp className="inline ml-2" />
//                           ) : (
//                             <FaSortDown className="inline ml-2" />
//                           )
//                         ) : (
//                           <FaSort className="inline ml-2" />
//                         )}
//                       </th>
//                       <th
//                         onClick={() => handleSort("inclusiveLeaveDate")}
//                         className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
//                       >
//                         Inclusive Leave Date
//                         {sortConfig.key === "inclusiveLeaveDate" ? (
//                           sortConfig.direction === "asc" ? (
//                             <FaSortUp className="inline ml-2" />
//                           ) : (
//                             <FaSortDown className="inline ml-2" />
//                           )
//                         ) : (
//                           <FaSort className="inline ml-2" />
//                         )}
//                       </th>
//                       <th
//                         onClick={() => handleSort("validation")}
//                         className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
//                       >
//                         Days
//                         {sortConfig.key === "validation" ? (
//                           sortConfig.direction === "asc" ? (
//                             <FaSortUp className="inline ml-2" />
//                           ) : (
//                             <FaSortDown className="inline ml-2" />
//                           )
//                         ) : (
//                           <FaSort className="inline ml-2" />
//                         )}
//                       </th>
//                       <th
//                         onClick={() => handleSort("validation")}
//                         className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
//                       >
//                         Validation
//                         {sortConfig.key === "validation" ? (
//                           sortConfig.direction === "asc" ? (
//                             <FaSortUp className="inline ml-2" />
//                           ) : (
//                             <FaSortDown className="inline ml-2" />
//                           )
//                         ) : (
//                           <FaSort className="inline ml-2" />
//                         )}
//                       </th>
//                       <th
//                         onClick={() => handleSort("reason")}
//                         className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
//                       >
//                         Reason
//                         {sortConfig.key === "reason" ? (
//                           sortConfig.direction === "asc" ? (
//                             <FaSortUp className="inline ml-2" />
//                           ) : (
//                             <FaSortDown className="inline ml-2" />
//                           )
//                         ) : (
//                           <FaSort className="inline ml-2" />
//                         )}
//                       </th>
//                       <th
//                         onClick={() => handleSort("contactNo")}
//                         className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
//                       >
//                         Contact No.
//                         {sortConfig.key === "contactNo" ? (
//                           sortConfig.direction === "asc" ? (
//                             <FaSortUp className="inline ml-2" />
//                           ) : (
//                             <FaSortDown className="inline ml-2" />
//                           )
//                         ) : (
//                           <FaSort className="inline ml-2" />
//                         )}
//                       </th>
//                       <th
//                         onClick={() => handleSort("status")}
//                         className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
//                       >
//                         Status
//                         {sortConfig.key === "status" ? (
//                           sortConfig.direction === "asc" ? (
//                             <FaSortUp className="inline ml-2" />
//                           ) : (
//                             <FaSortDown className="inline ml-2" />
//                           )
//                         ) : (
//                           <FaSort className="inline ml-2" />
//                         )}
//                       </th>
//                     </>
//                   )}
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginatedEmployees
//                   .filter((emp) =>
//                     selectedMenu === "Pending"
//                       ? emp.status === "Pending"
//                       : emp.status === "Approved"
//                   )
//                   .map((employee, index) => (
//                     <tr key={index} className="hover:bg-gray-100">
//                       {selectedMenu === "Pending" && (
//                         <>
//                           <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
//                             {employee.leaveType}
//                           </td>
//                           <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
//                             {employee.inclusiveLeaveDate}
//                           </td>
//                           <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
//                             {employee.validation}
//                           </td>
//                           <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
//                             {employee.status}
//                           </td>
//                         </>
//                       )}
//                       {selectedMenu === "Approved" && (
//                         <>
//                           <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
//                             {employee.leaveType}
//                           </td>
//                           <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
//                             {employee.date}
//                           </td>
//                           <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
//                             {employee.reason}
//                           </td>
//                           <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
//                             {employee.contactNo}
//                           </td>
//                         </>
//                       )}
//                       <td className="px-6 py-4">
//                         <div className="relative inline-block text-left">
//                           <div>
//                             <button
//                               onClick={() => handleDropdownToggle(index)}
//                               className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
//                             >
//                               Actions
//                             </button>
//                           </div>
//                           {dropdownOpen === index && (
//                             <div
//                               className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
//                               role="menu"
//                               aria-orientation="vertical"
//                               aria-labelledby="menu-button"
//                               tabIndex="-1"
//                             >
//                               <div className="py-1" role="none">
//                                 <button
//                                   onClick={() =>
//                                     handleActionClick("View Details", employee)
//                                   }
//                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                                 >
//                                   View Details
//                                 </button>
//                                 <button
//                                   onClick={() =>
//                                     handleActionClick(
//                                       "Validate Leave",
//                                       employee
//                                     )
//                                   }
//                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                                 >
//                                   Validate Leave
//                                 </button>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="flex justify-end items-center mt-4 space-x-1">
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               Previous
//             </button>

//             <div className="flex space-x-1">
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                 (pageNumber) => (
//                   <button
//                     key={pageNumber}
//                     onClick={() => handlePageChange(pageNumber)}
//                     className={`px-4 py-2 border border-gray-300 rounded-md ${
//                       currentPage === pageNumber
//                         ? "bg-indigo-600 text-white"
//                         : "bg-white text-gray-700"
//                     } hover:bg-indigo-700 hover:text-white`}
//                   >
//                     {pageNumber}
//                   </button>
//                 )
//               )}
//             </div>

//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               Next
//             </button>
//           </div>{" "}
//         </div>
//         {validateOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <div className="bg-white p-8 rounded-lg shadow-lg">
//               <h3 className="text-lg font-semibold mb-4">
//                 Validate Employee Leave
//               </h3>
//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   name="employeeCode"
//                   value={newEmployee.employeeCode}
//                   onChange={handleInputChange}
//                   placeholder="Employee Code"
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//                 <input
//                   type="text"
//                   name="fullname"
//                   value={newEmployee.fullname}
//                   onChange={handleInputChange}
//                   placeholder="Full Name"
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//                 <input
//                   type="text"
//                   name="validation"
//                   value={newEmployee.validation}
//                   onChange={handleInputChange}
//                   placeholder="Validation"
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//                 <input
//                   type="text"
//                   name="status"
//                   value={newEmployee.status}
//                   onChange={handleInputChange}
//                   placeholder="Status"
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//                 <input
//                   type="text"
//                   name="inclusiveLeaveDate"
//                   value={newEmployee.inclusiveLeaveDate}
//                   onChange={handleInputChange}
//                   placeholder="Inclusive Leave Date"
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//                 <input
//                   type="text"
//                   name="noOfDays"
//                   value={newEmployee.noOfDays}
//                   onChange={handleInputChange}
//                   placeholder="Number of Days"
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//                 <input
//                   type="text"
//                   name="availableLeaveBalance"
//                   value={newEmployee.availableLeaveBalance}
//                   onChange={handleInputChange}
//                   placeholder="Available Leave Balance"
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//               </div>
//               <div className="mt-6 flex justify-end space-x-4">
//                 <button
//                   onClick={handleAddEmployee}
//                   className="px-4 py-2 bg-indigo-500 text-white rounded-md"
//                 >
//                   Submit
//                 </button>
//                 <button
//                   onClick={() => setValidateOpen(false)}
//                   className="px-4 py-2 bg-gray-500 text-white rounded-md"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Leave;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaChevronDown, FaChevronUp, FaSort, FaSortUp, FaSortDown } from "react-icons/fa"; // Import the icons
import Header from "../components/common/Header"; // Assuming you have a Header component

const Leave = ({ leaveRequests }) => {
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null); // "asc" or "desc"

  const getStatusLabelColor = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleSort = (column) => {
    let direction = "asc";
    if (sortedColumn === column && sortDirection === "asc") {
      direction = "desc";
    }
    setSortedColumn(column);
    setSortDirection(direction);
  };

  const sortedRequests = [...leaveRequests].sort((a, b) => {
    if (!sortedColumn) return 0;
    const aVal = a[sortedColumn];
    const bVal = b[sortedColumn];

    if (sortDirection === "asc") {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  const getSortIcon = (column) => {
    if (sortedColumn === column) {
      return sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />;
    } else {
      return <FaSort />;
    }
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Leave Requests" />
      <div className="p-6">
        <div className="flex justify-end items-center mb-4">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <FaPlus className="inline mr-2" />
            <Link to="/file-leave">File a Leave</Link>
          </button>
        </div>

        {/* Leave Requests Table */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th
                  onClick={() => handleSort("name")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  Name {getSortIcon("name")}
                </th>
                <th
                  onClick={() => handleSort("id")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  ID {getSortIcon("id")}
                </th>
                <th
                  onClick={() => handleSort("department")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  Department {getSortIcon("department")}
                </th>
                <th
                  onClick={() => handleSort("typeOfLeave")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  Type of Leave {getSortIcon("typeOfLeave")}
                </th>
                <th
                  onClick={() => handleSort("startDate")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  Start Date {getSortIcon("startDate")}
                </th>
                <th
                  onClick={() => handleSort("endDate")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  End Date {getSortIcon("endDate")}
                </th>
                <th
                  onClick={() => handleSort("totalDays")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  Total Days {getSortIcon("totalDays")}
                </th>
                <th
                  onClick={() => handleSort("reason")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  Reason {getSortIcon("reason")}
                </th>
                <th
                  onClick={() => handleSort("contactNumber")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  Contact Number {getSortIcon("contactNumber")}
                </th>
                <th
                  onClick={() => handleSort("status")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  Status {getSortIcon("status")}
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedRequests.map((request, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.department}
                  </td>
                  <td className="py-4 px-5 text-gray-700">{request.typeOfLeave}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.startDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.endDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.totalDays}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.reason}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.contactNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span
                      className={`px-3 py-1 rounded-full font-semibold text-sm ${getStatusLabelColor(
                        request.status
                      )}`}
                    >
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leave;
