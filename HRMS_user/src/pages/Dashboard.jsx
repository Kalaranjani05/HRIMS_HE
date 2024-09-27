import { useState } from "react";
import { BarChart2, CheckCircle, FileCheck, ClipboardList, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [tasks] = useState([
    { id: 1, title: "Submit Project Report", completed: false },
    { id: 2, title: "Team Meeting at 2 PM", completed: true },
    { id: 3, title: "Complete Code Review", completed: false },
  ]);

  return (
    <div className="flex-1 overflow-auto relative z-10 min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Employee Dashboard</h1>
        <p className="text-gray-600">Welcome back! </p>
      </header>

      {/* STATS OVERVIEW */}
      <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <FileCheck className="text-blue-600" size={30} />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Attendance Overview</h3>
              <p className="text-gray-500">Present: 95%</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <BarChart2 className="text-green-600" size={30} />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Leave Balance</h3>
              <p className="text-gray-500">4 Days Available</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <CheckCircle className="text-purple-600" size={30} />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Tasks Completed</h3>
              <p className="text-gray-500">3 out of 5</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <Calendar className="text-red-600" size={30} />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Upcoming Events</h3>
              <p className="text-gray-500">2 Meetings Today</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ATTENDANCE OVERVIEW */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Attendance Overview</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">You have attended 22 out of 25 working days this month.</p>
          <p className="text-gray-600">Next leave: September 25, 2024</p>
        </div>
      </section>

      {/* TASK LIST */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tasks</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul>
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`flex justify-between p-3 rounded-md mb-2 ${
                  task.completed ? "bg-green-100" : "bg-gray-100"
                }`}
              >
                <span className={task.completed ? "line-through text-gray-500" : "text-gray-800"}>
                  {task.title}
                </span>
                <span className={task.completed ? "text-green-600" : "text-gray-500"}>
                  {task.completed ? "Completed" : "Pending"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
