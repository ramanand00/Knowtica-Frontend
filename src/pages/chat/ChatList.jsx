import React, { useState } from 'react';
import { FaUserCircle, FaTrash, FaSearch, FaSortAmountDown } from 'react-icons/fa';
import Navbar from '../../components/Navbar'; // Assuming you have a Navbar component

const chatUsersData = [
  {
    id: 1,
    name: 'Alice',
    profileImage: '',
    lastMessage: 'Hello there!',
    time: '2:00 PM',
    unread: 3,
    online: true,
  },
  {
    id: 2,
    name: 'Bob',
    profileImage: '',
    lastMessage: 'How are you?',
    time: '1:30 PM',
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: 'Charlie',
    profileImage: '',
    lastMessage: 'Meeting at 5?',
    time: '12:00 PM',
    unread: 1,
    online: true,
  },
];

export default function ChatSidebar() {
  const [users, setUsers] = useState(chatUsersData);
  const [search, setSearch] = useState('');
  const [sortType, setSortType] = useState('time');
  const [onlyOnline, setOnlyOnline] = useState(false);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  ).filter(user => onlyOnline ? user.online : true);

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortType === 'unread') return b.unread - a.unread;
    if (sortType === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <>
    <Navbar/>
    <div className="w-80 h-screen border-r bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      {/* Search & Sort Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2 mb-2">
          <FaSearch />
          <input
            type="text"
            placeholder="Search chats..."
            className="flex-1 bg-transparent outline-none border-b border-gray-400 dark:border-gray-600 px-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mt-2">
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="bg-gray-100 dark:bg-gray-700 text-sm p-1 rounded"
          >
            <option value="time">Default</option>
            <option value="unread">Unread</option>
            <option value="name">Name</option>
          </select>
          <label className="text-sm flex items-center space-x-1">
            <input
              type="checkbox"
              checked={onlyOnline}
              onChange={() => setOnlyOnline(!onlyOnline)}
              className="accent-blue-600"
            />
            <span>Online only</span>
          </label>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {sortedUsers.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">No chats found.</div>
        ) : (
          sortedUsers.map((user) => (
            <div
              key={user.id}
              className="px-4 py-3 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer border-b border-gray-100 dark:border-gray-700"
              onClick={() => alert(`Open chat with ${user.name}`)}
            >
              <div className="flex items-center">
                <div className="relative w-10 h-10 mr-3">
                  {user.profileImage ? (
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className="rounded-full w-10 h-10"
                    />
                  ) : (
                    <FaUserCircle size={40} />
                  )}
                  <span
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                      user.online ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  ></span>
                </div>
                <div>
                  <div className="font-semibold text-base">{user.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {user.lastMessage}
                  </div>
                </div>
              </div>
              <div className="text-right text-xs text-gray-500 space-y-1">
                <div>{user.time}</div>
                {user.unread > 0 && (
                  <div className="inline-block bg-blue-600 text-white rounded-full px-2 py-0.5 text-xs">
                    {user.unread}
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(user.id);
                  }}
                  className="text-red-500 hover:text-red-700"
                  title="Delete Chat"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
}
