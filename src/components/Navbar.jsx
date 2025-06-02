import React, { useState } from 'react';
import {
  FaHome,
  FaBook,
  FaBell,
  FaComments,
  FaBars,
  FaTimes,
  FaSearch,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-700 shadow-sm transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
         <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
  <Link
    to="/"
    className="text-4xl font-extrabold font-serif text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
  >
    Knowtica
  </Link>
</div>


          {/* Search */}
          <div className="flex flex-1 justify-center px-45">
  <div className="relative w-full sm:max-w-xs md:max-w-sm lg:max-w-md">
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="Search topics, courses..."
      className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
    />
    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
  </div>
</div>


          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/courses" icon={<FaBook />}  />
            <NavLink to="/notifications" icon={<FaBell />}  />
            <NavLink to="/chatpage" icon={<FaComments />} />
            <NavLink to="/menu" icon={<FaBars />} />
          </div>

          {/* Profile + Toggle */}
          {/* Profile Image at Right */}
<div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-3">
  <Link to="/profile" title="Profile">
    <img
      src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/485169268_683193054664296_8084320366813577644_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jESpcQu-OGEQ7kNvwE03G09&_nc_oc=Adn1hc0KeoY-2CtqYBl7rj51cfPj4pU3Yxw0gVzzTH6_MuMw3FNZ-DYN3eJ7p0KMzabHnO9SJyBpuhr1pbmXqSog&_nc_zt=23&_nc_ht=scontent.fktm21-1.fna&_nc_gid=Z8TvSse62N-M7hQ-nsCHhg&oh=00_AfKQrr5IwAFeOxDj3VFfyOmGvaf2SywKpV3VvWTMms3Mnw&oe=6841DA0C"
      alt="Profile"
      className="w-10 h-10 rounded-full object-cover border-2 border-blue-500 hover:scale-105 shadow transition-transform"
    />
  </Link>
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="md:hidden text-2xl text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
    aria-label="Toggle Menu"
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </button>
</div>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 space-y-4 shadow-md animate-fadeIn">
          
          <MobileNavLink to="/courses" icon={<FaBook />} />
          <MobileNavLink to="/notifications" icon={<FaBell />} />
          <MobileNavLink to="/chatpage" icon={<FaComments />} />
          <MobileNavLink to="/menu" icon={<FaBars />} />
          <MobileNavLink to="/profile" icon={
            <img
              src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/485169268_683193054664296_8084320366813577644_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jESpcQu-OGEQ7kNvwE03G09&_nc_oc=Adn1hc0KeoY-2CtqYBl7rj51cfPj4pU3Yxw0gVzzTH6_MuMw3FNZ-DYN3eJ7p0KMzabHnO9SJyBpuhr1pbmXqSog&_nc_zt=23&_nc_ht=scontent.fktm21-1.fna&_nc_gid=Z8TvSse62N-M7hQ-nsCHhg&oh=00_AfKQrr5IwAFeOxDj3VFfyOmGvaf2SywKpV3VvWTMms3Mnw&oe=6841DA0C"
              alt="Profile"
              className="rounded-full w-6 h-6 object-cover border-2 border-blue-500"
            />
          } label="Profile" />
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-1 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
    >
      {React.cloneElement(icon, { className: "text-2xl" })} {label}
    </Link>
  );
}

function MobileNavLink({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition text-lg"
    >
      {React.cloneElement(icon, { className: "text-3xl" })} {label}
    </Link>
  );
}
