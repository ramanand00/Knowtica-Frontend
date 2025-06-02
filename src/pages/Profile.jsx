import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEdit, FaUsers, FaUserFriends, FaRegNewspaper, FaCog } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import AboutSection from '../components/news/AboutSection';
import ActivitySection from '../components/news/ActivitySection';
import FriendsSection from '../components/news/FriendsSection';
import DashboardSection from '../components/news/DashboardSection';
// import { motion } from 'framer-motion';


function Profile() {
  const [activeTab, setActiveTab] = useState('about');

  const user = {
    name: 'Ramanand Mandal',
    email: 'mrazzanand@gmail.com',
    profilePic: 'https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/485169268_683193054664296_8084320366813577644_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jESpcQu-OGEQ7kNvwE03G09&_nc_oc=Adn1hc0KeoY-2CtqYBl7rj51cfPj4pU3Yxw0gVzzTH6_MuMw3FNZ-DYN3eJ7p0KMzabHnO9SJyBpuhr1pbmXqSog&_nc_zt=23&_nc_ht=scontent.fktm21-1.fna&_nc_gid=2qSUoz3SSa0pmllfSblAcA&oh=00_AfI71btdDmqDCnP22oE9BuC6eqsah2hejqkXAHuJsjvOMw&oe=6841A1CC',
    backgroundImage: 'https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/489411555_699785599671708_8686615776211487376_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hZeSfuGFKj0Q7kNvwF_ke76&_nc_oc=Adnv5ovYHNIZO3HCN9OpqVpYn92DlwC9mq2p6gJy4qRrutPUWmkYsLdl6egMmTAuILjUESkiI8m5FIjAUGELn51X&_nc_zt=23&_nc_ht=scontent.fktm21-1.fna&_nc_gid=dKLLj_pupAR3CCsfd2QTXw&oh=00_AfLAjzHhDjxe1egWLRllxPVmtlpWnpvdhniXSe8MGbYiaQ&oe=6841BE89',
    bio: 'Full Stack Developer | JavaScript Enthusiast | Open Source Contributor',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    },
    stats: {
      posts: 32,
      followers: 1200,
      following: 180,
    },
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-blue-50">
      {/* Cover Image */}
      <div
        className="h-72 bg-cover bg-center relative rounded-b-xl shadow"
        style={{ backgroundImage: `url(${user.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-b-xl" />
      </div>

      {/* Profile Card */}
      <div className="max-w-5xl mx-auto -mt-32 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
                src={user.profilePic}
                alt="Profile"
              />
              <button
                className="absolute bottom-1 right-1 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700"
                title="Edit Profile"
              >
                <FaEdit />
              </button>
            </div>
            <h2 className="text-3xl font-bold mt-4">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="mt-2 text-center text-gray-700 max-w-xl">{user.bio}</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-4">
            <a href={user.social.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-gray-700 hover:text-black transition" />
            </a>
            <a href={user.social.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-900 transition" />
            </a>
            <a href={user.social.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-sky-500 hover:text-sky-700 transition" />
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mt-6 text-center">
            <div className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-md">
              <FaRegNewspaper className="mx-auto text-blue-600 text-2xl" />
              <p className="text-xl font-semibold">{user.stats.posts}</p>
              <p className="text-sm text-gray-600">Posts</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-md">
              <FaUsers className="mx-auto text-blue-600 text-2xl" />
              <p className="text-xl font-semibold">{user.stats.followers}</p>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-md">
              <FaUserFriends className="mx-auto text-blue-600 text-2xl" />
              <p className="text-xl font-semibold">{user.stats.following}</p>
              <p className="text-sm text-gray-600">Following</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-10">
            <div className="flex justify-center gap-8 border-b pb-3">
              {['about', 'posts', 'Friends','Dashboard'].map((tab) => (
                <button
                  key={tab}
                  className={`capitalize font-medium px-4 py-2 rounded-t-md ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-100'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-6 p-6 bg-gray-50 rounded-xl shadow-inner min-h-[200px] transition-all">
              {activeTab === 'about' && <AboutSection />}
              {activeTab === 'posts' && (  <ActivitySection />)}
              {activeTab === 'Friends' && <FriendsSection />}
              {activeTab === 'Dashboard' && <DashboardSection />}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
