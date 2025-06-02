import React, { useState } from 'react';
import { FaUsers, FaSearch, FaCircle, FaUserPlus, FaComments } from 'react-icons/fa';

// Example: These are current friends
const currentFriends = [
  {
    id: 1,
    name: 'Alice Johnson',
    avatar: 'https://i.pravatar.cc/150?img=1',
    status: 'online',
  },
  {
    id: 3,
    name: 'Charlie Davis',
    avatar: 'https://i.pravatar.cc/150?img=3',
    status: 'online',
  },
];

// Suggested friends (not yet friends)
const suggestedFriendsData = [
  {
    id: 2,
    name: 'Bob Smith',
    avatar: 'https://i.pravatar.cc/150?img=2',
    lastSeen: '10 minutes ago',
  },
  {
    id: 4,
    name: 'Diana Prince',
    avatar: 'https://i.pravatar.cc/150?img=4',
    lastSeen: '1 hour ago',
  },
];

const FriendsListSection = () => {
  const [search, setSearch] = useState('');
  const [sentRequests, setSentRequests] = useState([]);

  const handleSendRequest = (id) => {
    if (!sentRequests.includes(id)) {
      setSentRequests([...sentRequests, id]);
    }
  };

  // Filter current friends by search
  const filteredFriends = currentFriends.filter((friend) =>
    friend.name.toLowerCase().includes(search.toLowerCase())
  );

  // Filter suggested friends by search
  const filteredSuggested = suggestedFriendsData.filter((friend) =>
    friend.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FaUsers className="text-blue-600" /> Friends List
      </h3>

      {/* Search Input */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search friends or suggested..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>

      {/* Current Friends */}
      <ul className="space-y-3 mb-8">
        {filteredFriends.length > 0 ? (
          filteredFriends.map((friend) => (
            <li
              key={friend.id}
              className="flex items-center bg-white shadow-sm p-3 rounded-lg border border-gray-200 hover:shadow-md transition"
            >
              <img
                src={friend.avatar}
                alt={friend.name}
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-800">{friend.name}</p>
                <span className="text-sm flex items-center gap-1 text-green-500">
                  <FaCircle className="text-xs" />
                  Online
                </span>
              </div>
              <button className="text-sm px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition flex items-center gap-1">
                <FaComments />
                Message
              </button>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No friends found.</p>
        )}
      </ul>

      {/* Suggested Friends Section */}
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FaUserPlus className="text-green-600" /> Suggested Friends
      </h3>
      <ul className="space-y-3">
        {filteredSuggested.length > 0 ? (
          filteredSuggested.map((friend) => (
            <li
              key={friend.id}
              className="flex items-center bg-white shadow-sm p-3 rounded-lg border border-gray-200 hover:shadow-md transition"
            >
              <img
                src={friend.avatar}
                alt={friend.name}
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-800">{friend.name}</p>
                <span className="text-sm flex items-center gap-1 text-gray-400">
                  Last seen {friend.lastSeen}
                </span>
              </div>
              <button
                onClick={() => handleSendRequest(friend.id)}
                disabled={sentRequests.includes(friend.id)}
                className={`text-sm px-3 py-1 rounded-md transition flex items-center gap-1 ${
                  sentRequests.includes(friend.id)
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                <FaUserPlus />
                {sentRequests.includes(friend.id) ? 'Requested' : 'Add'}
              </button>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No suggested friends found.</p>
        )}
      </ul>
    </div>
  );
};

export default FriendsListSection;
