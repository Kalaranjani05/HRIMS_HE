import React, { useState } from 'react';

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  const [newAttendance, setNewAttendance] = useState({
    name: '',
    date: '',
    checkInTime: '',
    checkOutTime: ''
  });

  // Handle Check-In time
  const handleCheckIn = () => {
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setNewAttendance({ ...newAttendance, checkInTime: now });
  };

  // Handle Check-Out time
  const handleCheckOut = () => {
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setNewAttendance({ ...newAttendance, checkOutTime: now });
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAttendance({ ...newAttendance, [name]: value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newAttendance.name && newAttendance.date && newAttendance.checkInTime && newAttendance.checkOutTime) {
      setAttendanceData([...attendanceData, { ...newAttendance, id: attendanceData.length + 1 }]);
      setNewAttendance({ name: '', date: '', checkInTime: '', checkOutTime: '' });
    } else {
      alert("Please fill out all fields and check-in/check-out before submitting.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Attendance</h1>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            name="name"
            value={newAttendance.name}
            onChange={handleChange}
            placeholder="Employee Name"
            className="p-2 border border-gray-300 rounded placeholder-gray-700"
            required
          />
          <input
            type="date"
            name="date"
            value={newAttendance.date}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded placeholder-black"
            required
          />
          <button
            type="button"
            onClick={handleCheckIn}
            className="bg-green-500 text-white p-2 rounded"
          >
            Check In
          </button>
          <button
            type="button"
            onClick={handleCheckOut}
            className="bg-red-500 text-white p-2 rounded"
          >
            Check Out
          </button>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </div>
      </form>

      <table className="min-w-full bg-white border border-black">
        <thead>
          <tr className="w-full bg-gray-200 text-left border-b-2 border-black">
            <th className="py-2 px-4 border-b-2 border-black text-black">S.NO</th>
            <th className="py-2 px-4 border-b-2 border-black text-black">Name</th>
            <th className="py-2 px-4 border-b-2 border-black text-black">Date</th>
            <th className="py-2 px-4 border-b-2 border-black text-black">Check-In</th>
            <th className="py-2 px-4 border-b-2 border-black text-black">Check-Out</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((attendance) => (
            <tr key={attendance.id} className="border-b-2 border-black">
              <td className="py-2 px-4 border-b-2 border-black text-black">{attendance.id}</td>
              <td className="py-2 px-4 border-b-2 border-black text-black">{attendance.name}</td>
              <td className="py-2 px-4 border-b-2 border-black text-black">{attendance.date}</td>
              <td className="py-2 px-4 border-b-2 border-black text-black">{attendance.checkInTime}</td>
              <td className="py-2 px-4 border-b-2 border-black text-black">{attendance.checkOutTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
