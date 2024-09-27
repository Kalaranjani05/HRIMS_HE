import React from 'react';

const PayslipDetails = ({ payslip, onClose }) => {
  // Sample details, replace with actual data from props or state
  const details = {
    employeeId: 'E12345',
    employeeName: 'John Doe',
    department: 'HR',
    payrollDate: 'August 31, 2024',
    position: 'Manager',
    quarter: 'Q3 2024',
    earnings: '$5000',
    taxableAmount: '$4000',
    deduction: '$500',
    amount: '$4500',
  };

  const handlePrint = () => {
    window.print(); // Simple print functionality, you can customize this
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-600">Payslip Details</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-600 mb-4">
          {/* First Column */}
          <div>
            <p><strong>Employee ID:</strong> {details.employeeId}</p>
            <p><strong>Employee Name:</strong> {details.employeeName}</p>
            <p><strong>Department:</strong> {details.department}</p>
          </div>

          {/* Second Column */}
          <div>
            <p><strong>Payroll Date:</strong> {details.payrollDate}</p>
            <p><strong>Position:</strong> {details.position}</p>
            <p><strong>Quarter:</strong> {details.quarter}</p>
          </div>
        </div>

        {/* Earnings and Deductions Section */}
        <div className="grid grid-cols-2 gap-4 text-gray-600 mb-4">
          {/* First Column */}
          <div>
            <p><strong>Earnings:</strong> {details.earnings}</p>
            <p><strong>Taxable Amount:</strong> {details.taxableAmount}</p>
          </div>

          {/* Second Column */}
          <div>
            <p><strong>Deduction:</strong> {details.deduction}</p>
            <p><strong>Amount:</strong> {details.amount}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2">
          <button
            onClick={handlePrint}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
          >
            Print
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayslipDetails;
