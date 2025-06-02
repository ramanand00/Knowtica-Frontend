import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaDownload } from 'react-icons/fa';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'MongoDB', level: 80 },
  { name: 'Express.js', level: 75 },
  { name: 'TypeScript', level: 70 },
  { name: 'Tailwind CSS', level: 95 },
];

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-gray-800"
    >
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-600">About Me</h2>
        <p className="text-sm text-gray-500 mt-2">A short brief about my background and expertise</p>
      </div>

      {/* Bio & Personal Info Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Bio */}
        <div>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            I’m John Doe, a dedicated and detail-oriented Full Stack Developer with over 3 years of
            experience in building scalable and high-performance web applications. I specialize in
            JavaScript technologies and have a strong passion for open source contributions.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            I enjoy working with modern frameworks, solving complex problems, and continually
            expanding my technical and soft skills in collaborative environments.
          </p>

          {/* Resume Button */}
          <div className="mt-6">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>

        {/* Right: Info + Skills */}
        <div className="space-y-4">
          {/* Info Rows */}
          <div className="flex items-center gap-3 text-gray-700">
            <FaMapMarkerAlt className="text-blue-600" />
            <span className="font-medium">San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaBriefcase className="text-blue-600" />
            <span className="font-medium">Full Stack Developer at OpenDev</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaClock className="text-blue-600" />
            <span className="font-medium">Available for freelance or full-time</span>
          </div>

          {/* Skills Progress */}
          <div className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Core Skills</h4>
            {skills.map((skill) => (
              <div key={skill.name} className="mb-3">
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
