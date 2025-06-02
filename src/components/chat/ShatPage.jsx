import React, { useState } from 'react';
import ChatSidebar from './ChatSidebar';

export default function ShatPage() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    console.log('Selected user:', user);
    setSelectedUser(user); // You can use this state to show a chat window later
  };

  return (
    <div className="h-screen w-full flex bg-gray-100 dark:bg-gray-900">
      <ChatSidebar onSelectUser={handleSelectUser} />
      {/* For now, we only show the sidebar */}
    </div>
  );
}
