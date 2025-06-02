import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaPlus, FaImage, FaVideo, FaFileAlt, FaPhone, FaVideo as FaVideoCall } from 'react-icons/fa';
import ChatSidebar from '../../components/chat/ChatSidebar';
import Navbar from '../../components/Navbar';

const dummyUser = {
  name: 'John',
  image: 'https://i.pravatar.cc/40?img=3',
  lastSeen: '10:05 AM'
};

const dummyMessages = [
  { id: 1, sender: 'John', text: 'Hey there!', time: '10:00 AM' },
  { id: 2, sender: 'Me', text: 'Hi John! How are you?', time: '10:01 AM' },
  { id: 3, sender: 'John', text: "I'm good, thanks! Working on the new project.", time: '10:02 AM' }
];

export default function ChatPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState(dummyMessages);
  const [input, setInput] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (input.trim() === '') return;
    const newMessage = {
      id: messages.length + 1,
      sender: 'Me',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <Navbar />

      <div className="flex h-screen pt-16 bg-gray-900 text-white">
        <ChatSidebar onSelectUser={() => setSelectedUser(dummyUser)} />

        {selectedUser && (
          <div className="flex flex-col flex-1 bg-gray-900 text-white">
            {/* Chat header */}
            <div className="p-4 bg-blue-600 text-white font-bold shadow flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src={selectedUser.image}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="text-lg">{selectedUser.name}</div>
                  <div className="text-xs font-normal opacity-80">Last seen at {selectedUser.lastSeen}</div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <button className="p-2 bg-blue-500 rounded-full hover:bg-blue-700">
                  <FaPhone />
                </button>
                <button className="p-2 bg-blue-500 rounded-full hover:bg-blue-700">
                  <FaVideoCall />
                </button>
              </div>
            </div>

            {/* Message list */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-900">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'Me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-sm px-4 py-2 rounded-lg shadow ${
                    msg.sender === 'Me' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'
                  }`}>
                    <div className="text-sm font-semibold">{msg.sender}</div>
                    <div>{msg.text}</div>
                    <div className="text-xs text-right opacity-70">{msg.time}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <div className="p-4 border-t border-gray-700 bg-gray-800 flex items-center gap-3 relative">
              <button
                onClick={() => setShowOptions(!showOptions)}
                className="p-2 bg-gray-700 rounded-full"
              >
                <FaPlus />
              </button>

              {showOptions && (
                <div className="absolute bottom-16 left-4 flex gap-2 bg-gray-800 p-2 rounded shadow">
                  <button title="Send Image"><FaImage className="text-blue-500" /></button>
                  <button title="Send Video"><FaVideo className="text-green-500" /></button>
                  <button title="Send File"><FaFileAlt className="text-yellow-500" /></button>
                </div>
              )}

              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-300 border border-gray-600 focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
