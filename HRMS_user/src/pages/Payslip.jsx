import React, { useState } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import Header from "../components/common/Header";
import PayslipDetails from "./PayslipDetails";

const Payslip = () => {
  // Sample data for the table
  const data = [
    { id: 1, payslip: '12345', payrollDate: 'August 31, 2024', payPeriod: 'August 1, 2024 - August 31, 2024', quarter: 'Q3 2024' },
    { id: 2, payslip: '12346', payrollDate: 'July 31, 2024', payPeriod: 'July 1, 2024 - July 31, 2024', quarter: 'Q2 2024' },
    // Add more sample data as needed
  ];

  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Sorting state
  const [sortConfig, setSortConfig] = useState({ key: 'payslip', direction: 'asc' });

  // State for modal
  const [selectedPayslip, setSelectedPayslip] = useState(null);

  // Filtered data based on search term
  const filteredData = data.filter(item =>
    item.payslip.includes(searchTerm) ||
    item.payrollDate.includes(searchTerm) ||
    item.payPeriod.includes(searchTerm) ||
    item.quarter.includes(searchTerm)
  );

  // Sorting logic
  const sortedData = filteredData.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);

  // Sorting handler
  const handleSort = (key) => {
    const direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
  };

  // Open Payslip Details
  const handleViewDetails = (payslip) => {
    setSelectedPayslip(payslip);
  };

  // Close Payslip Details
  const handleCloseDetails = () => {
    setSelectedPayslip(null);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      {/* Header Component */}
      <Header title="Payslip" />

      {/* Search Bar */}
      <div className="p-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-end items-center mb-8">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm w-1/3"
            />
          </div>

          {/* Payslip Table */}
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-lg">
            <table className="min-w-full bg-white rounded-lg">
              <thead className="bg-gradient-to-r from-gray-100 to-gray-200 border-b">
                <tr className="text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  <th
                    onClick={() => handleSort("payslip")}
                    className="py-2 px-4 border-b text-left cursor-pointer"
                  >
                    Employee Id
                    {sortConfig.key === "payslip" ? (
                      sortConfig.direction === "asc" ? (
                        <FaSortUp className="inline ml-2" />
                      ) : (
                        <FaSortDown className="inline ml-2" />
                      )
                    ) : (
                      <FaSort className="inline ml-2" />
                    )}
                  </th>
                  <th
                    onClick={() => handleSort("payrollDate")}
                    className="py-2 px-4 border-b text-left cursor-pointer"
                  >
                    Payroll Date
                    {sortConfig.key === "payrollDate" ? (
                      sortConfig.direction === "asc" ? (
                        <FaSortUp className="inline ml-2" />
                      ) : (
                        <FaSortDown className="inline ml-2" />
                      )
                    ) : (
                      <FaSort className="inline ml-2" />
                    )}
                  </th>
                  <th
                    onClick={() => handleSort("payPeriod")}
                    className="py-2 px-4 border-b text-left cursor-pointer"
                  >
                    Pay Period
                    {sortConfig.key === "payPeriod" ? (
                      sortConfig.direction === "asc" ? (
                        <FaSortUp className="inline ml-2" />
                      ) : (
                        <FaSortDown className="inline ml-2" />
                      )
                    ) : (
                      <FaSort className="inline ml-2" />
                    )}
                  </th>
                  <th
                    onClick={() => handleSort("quarter")}
                    className="py-2 px-4 border-b text-left cursor-pointer"
                  >
                    Quarter
                    {sortConfig.key === "quarter" ? (
                      sortConfig.direction === "asc" ? (
                        <FaSortUp className="inline ml-2" />
                      ) : (
                        <FaSortDown className="inline ml-2" />
                      )
                    ) : (
                      <FaSort className="inline ml-2" />
                    )}
                  </th>
                  <th className="py-2 px-4 border-b text-left">Tools</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map(row => (
                  <tr key={row.id} className="whitespace-nowrap text-sm text-gray-700">
                    <td className="py-2 px-4 border-b">{row.payslip}</td>
                    <td className="py-2 px-4 border-b">{row.payrollDate}</td>
                    <td className="py-2 px-4 border-b">{row.payPeriod}</td>
                    <td className="py-2 px-4 border-b">{row.quarter}</td>
                    <td className="py-2 px-4 border-b">
                      
                      <button
                          onClick={() => handleViewDetails(row)}
                          className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700"
                        >
                          View Details
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-end items-center mt-4 space-x-1">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`px-4 py-2 border border-gray-300 rounded-md ${
                      currentPage === pageNumber
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-gray-700"
                    } hover:bg-indigo-700 hover:text-white`}
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>

          {/* Display PayslipDetails Component */}
          {selectedPayslip && (
            <PayslipDetails payslip={selectedPayslip} onClose={handleCloseDetails} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Payslip;
