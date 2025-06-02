import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { FaThumbsUp, FaCommentDots } from 'react-icons/fa';

const stories = [
  { id: 1, name: 'Alice', image: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Bob', image: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Charlie', image: 'https://via.placeholder.com/100' },
  { id: 4, name: 'Daisy', image: 'https://via.placeholder.com/100' },
  { id: 5, name: 'Eve', image: 'https://via.placeholder.com/100' },
];

const posts = [
  {
    id: 1,
    user: 'Alice',
    avatar: 'https://via.placeholder.com/40',
    time: '2h ago',
    content: 'Excited to start the new semester! 🚀',
    image: 'https://via.placeholder.com/600x300',
    likes: 10,
    comments: 3,
  },
  {
    id: 2,
    user: 'Bob',
    avatar: 'https://via.placeholder.com/40',
    time: '5h ago',
    content: 'Check out this beautiful view!',
    image: 'https://via.placeholder.com/600x300?text=Scenery',
    likes: 20,
    comments: 5,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 p-20 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
          {/* Stories */}
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-2">Stories</h2>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="flex-shrink-0 w-24 h-32 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center"
                >
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-20 object-cover rounded-t-lg"
                  />
                  <p className="text-sm mt-1 font-medium">{story.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* News Feed */}
          <section>
            <h2 className="text-lg font-bold mb-4">News Feed</h2>
            <div className="space-y-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
                >
                  {/* Post header */}
                  <div className="flex items-center mb-3">
                    <img
                      src={post.avatar}
                      alt={post.user}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold">{post.user}</p>
                      <p className="text-xs text-gray-500">{post.time}</p>
                    </div>
                  </div>

                  {/* Post content */}
                  <p className="mb-2">{post.content}</p>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full h-60 object-cover rounded-lg mb-3"
                    />
                  )}

                  {/* Post actions */}
                  <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                      <FaThumbsUp />
                      <span>{post.likes} Likes</span>
                    </div>
                    <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                      <FaCommentDots />
                      <span>{post.comments} Comments</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
