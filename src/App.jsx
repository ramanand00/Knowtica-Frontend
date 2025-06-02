// client/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/news/Home';
import Profile from './pages/Profile';
import Chat from './pages/chat/Chat';
import ChatList  from './pages/chat/ChatList';
import Courses from './pages/Course/Courses';
import ChatPage from './pages/chat/ChatPage';
import ShatPage from './components/chat/ShatPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/chatpage" element={<ChatPage />} />
      <Route path="/shatpage" element={<ShatPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/chat-list" element={<ChatList />} />
      <Route path="/courses" element={<Courses />} />
      {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
    </Routes>
  );
};

export default App;
