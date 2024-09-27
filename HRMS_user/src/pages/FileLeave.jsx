import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FileLeave = ({ addLeaveRequest }) => {
  const [leaveForm, setLeaveForm] = useState({
    name: '',
    id: '',
    department: '',
    typeOfLeave: '',
    startDate: '',
    endDate: '',
    totalDays: '',
    reason: '',
    contactNumber: '',
    status: 'Pending',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Contact Number Validation
    if (name === "contactNumber") {
      if (/^\d{0,10}$/.test(value)) {
        // Only update state if the value has 10 digits
        setLeaveForm((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    } else {
      setLeaveForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  
    // Date Validation and Calculation of Total Days
    if (name === 'startDate' || name === 'endDate') {
      const startDate = new Date(
        name === 'startDate' ? value : leaveForm.startDate
      );
      const endDate = new Date(name === 'endDate' ? value : leaveForm.endDate);
  
      if (startDate && endDate && startDate <= endDate) {
        const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
        setLeaveForm((prevState) => ({
          ...prevState,
          totalDays: totalDays,
        }));
      }
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    addLeaveRequest(leaveForm);
    navigate('/leave');
  };

  return (
    <div className="w-full p-4 mt-12">
    <div className="max-w-3xl mx-auto p-4 border border-gray-300 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">File a Leave</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Employee Name</label>
            <input
              type="text"
              name="name"
              value={leaveForm.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Employee ID</label>
            <input
              type="text"
              name="id"
              value={leaveForm.id}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Department</label>
            <select
              name="department"
              value={leaveForm.department}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
              required
            >
              <option value="">Select Department</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="IT">IT</option>
              <option value="IT">Marketing</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Type of Leave</label>
            <select
              name="typeOfLeave"
              value={leaveForm.typeOfLeave}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
              required
            >
              <option value="">Select Leave Type</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Annual Leave">Annual Leave</option>
              <option value="Annual Leave">Marriage Leave</option>
              <option value="Annual Leave">Others</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={leaveForm.startDate}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">End Date</label>
            <input
              type="date"
              name="endDate"
              value={leaveForm.endDate}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Total Days</label>
            <input
              type="number"
              name="totalDays"
              value={leaveForm.totalDays}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={leaveForm.contactNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
              required
              maxLength="10"
            />
          </div>
       </div>
          <div className="mt-4">
            <label className="block text-sm font-medium">Reason for Leave</label>
            <textarea
            //   type="text"
              name="reason"
              value={leaveForm.reason}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
              rows="3"
              required
            />
          </div>
    
        
        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-36"
          >
            Apply
          </button>
          <button
            type="button"
            onClick={() => navigate('/leave')}
            className="bg-red-500 text-white px-4 py-2 rounded w-36"
          >
            Close
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default FileLeave;
