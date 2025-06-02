import React from 'react';
import {
  FaCog,
  FaEye,
  FaChartLine,
  FaHandshake,
  FaUserPlus,
  FaArrowUp,
  FaArrowDown,
  FaEdit,
  FaSlidersH,
} from 'react-icons/fa';

const DashboardSection = () => {
  // Sample data for the dashboard stats with trends and progress
  const stats = [
    {
      id: 1,
      title: 'Views',
      value: '12.4K',
      icon: <FaEye className="text-blue-500" />,
      description: 'Profile views in last 30 days',
      growth: 12, // positive means increase
    },
    {
      id: 2,
      title: 'Reach',
      value: '9.8K',
      icon: <FaChartLine className="text-green-500" />,
      description: 'People reached this month',
      growth: -5, // negative means decrease
    },
    {
      id: 3,
      title: 'Content Interactions',
      value: '3.2K',
      icon: <FaHandshake className="text-yellow-500" />,
      description: 'Likes, comments & shares',
      growth: 20,
    },
    {
      id: 4,
      title: 'New Followers',
      value: '850',
      icon: <FaUserPlus className="text-purple-500" />,
      description: 'Followers gained',
      growth: 8,
    },
  ];

  // Sample recent activity
  const recentActivities = [
    'You posted a new blog on React best practices.',
    'Your post on CSS tricks got 50 new likes.',
    'New follower: John Doe',
    'Profile updated successfully.',
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold flex items-center gap-3 text-gray-800">
          <FaCog className="text-blue-600 text-3xl" />
          Profile Overview
        </h3>
        <div className="flex gap-3">
          <button
            title="Edit Profile"
            className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition"
          >
            <FaEdit /> Edit Profile
          </button>
          <button
            title="Settings"
            className="flex items-center gap-1 bg-gray-200 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-300 transition"
          >
            <FaSlidersH /> Settings
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map(({ id, title, value, icon, description, growth }) => (
          <div
            key={id}
            className="flex flex-col p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl">{icon}</div>
              <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
            </div>
            <p className="text-3xl font-bold text-gray-800 mb-2">{value}</p>
            <p className="text-sm text-gray-500 mb-3">{description}</p>
            
            {/* Growth info with arrow */}
            <div className="flex items-center gap-1 text-sm font-semibold select-none">
              {growth > 0 ? (
                <FaArrowUp className="text-green-500" />
              ) : (
                <FaArrowDown className="text-red-500" />
              )}
              <span className={growth > 0 ? 'text-green-600' : 'text-red-600'}>
                {Math.abs(growth)}%
              </span>
              <span className="text-gray-400"> since last month</span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div
                className={`h-2 rounded-full ${
                  growth > 0 ? 'bg-green-500' : 'bg-red-500'
                }`}
                style={{ width: `${Math.min(Math.abs(growth), 100)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div>
        <h4 className="text-xl font-semibold mb-3 text-gray-800">Recent Activity</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {recentActivities.map((activity, idx) => (
            <li key={idx} className="hover:text-blue-600 cursor-pointer transition">
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSection;
