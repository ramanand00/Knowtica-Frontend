// src/components/ActivitySection.jsx
import React, { useState } from 'react';

const activitiesData = [
  {
    icon: '📢',
    type: 'Blog',
    description: 'Shared a new blog on JavaScript Tips & Tricks',
    time: '2025-05-30T12:00:00Z'
  },
  {
    icon: '🛠️',
    type: 'Open Source',
    description: 'Contributed to an open-source React project',
    time: '2025-05-27T08:45:00Z'
  },
  {
    icon: '🎯',
    type: 'Challenge',
    description: 'Completed 100 days of code challenge',
    time: '2025-05-24T10:30:00Z'
  },
  {
    icon: '💼',
    type: 'Career',
    description: 'Started a new role as Frontend Engineer at TechCorp',
    time: '2025-05-17T09:15:00Z'
  }
];

const formatDate = (iso) => {
  const date = new Date(iso);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const ActivitySection = () => {
  const [filter, setFilter] = useState('All');

  const activityTypes = ['All', 'Blog', 'Open Source', 'Challenge', 'Career'];

  const filteredActivities =
    filter === 'All'
      ? activitiesData
      : activitiesData.filter((item) => item.type === filter);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Recent Activity</h3>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1 text-sm bg-white focus:outline-none"
        >
          {activityTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>

      <ul className="space-y-3">
        {filteredActivities.map((activity, index) => (
          <li
            key={index}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-2">
                <span
                  title={activity.type}
                  className="text-xl"
                >
                  {activity.icon}
                </span>
                <p className="text-gray-800 text-sm sm:text-base">
                  {activity.description}
                </p>
              </div>
              <span className="text-sm text-gray-400 whitespace-nowrap">
                {formatDate(activity.time)}
              </span>
            </div>
          </li>
        ))}

        {filteredActivities.length === 0 && (
          <li className="text-center text-gray-500 py-8">
            No activities found for <span className="font-semibold">{filter}</span>.
          </li>
        )}
      </ul>
    </div>
  );
};

export default ActivitySection;
