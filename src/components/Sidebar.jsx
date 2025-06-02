import React from 'react';
import {
  FaHome,
  FaBookOpen,
  FaCommentDots,
  FaBell,
  FaUserFriends,
  FaBookmark,
  FaCog,
  FaSignOutAlt,
  FaUserCircle,
  FaStream,
  FaRegNewspaper,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const menuItems = [
    { name: 'Home', icon: <FaHome />, path: '/' },
    { name: 'Courses', icon: <FaBookOpen />, path: '/courses' },
    { name: 'Stories', icon: <FaStream />, path: '/stories' },
    { name: 'News Feed', icon: <FaRegNewspaper />, path: '/feed' },
    { name: 'Chats', icon: <FaCommentDots />, path: '/chats' },
    { name: 'Notifications', icon: <FaBell />, path: '/notifications' },
    { name: 'Friends', icon: <FaUserFriends />, path: '/friends' },
    { name: 'Saved', icon: <FaBookmark />, path: '/saved' },
    { name: 'Settings', icon: <FaCog />, path: '/settings' },
    { name: 'Logout', icon: <FaSignOutAlt />, path: '/logout' },
  ];

  return (
    <div className="w-64 min-h-screen bg-white dark:bg-gray-900 shadow-lg p-4 hidden md:flex flex-col justify-between">
      {/* Profile */}
      <div>
        <div className="flex items-center mb-8 space-x-3">
          <FaUserCircle size={40} className="text-blue-600" />
          <div>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">John Doe</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">@johndoe</p>
          </div>
        </div>

        {/* Menu */}
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 space-x-3 rounded-md transition hover:bg-gray-200 dark:hover:bg-gray-800 ${
                    isActive
                      ? 'bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-white'
                      : 'text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                {item.icon}
                <span className="text-md">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-400 dark:text-gray-600">
        <p>© 2025 SoftRiseUp</p>
      </div>
    </div>
  );
}
