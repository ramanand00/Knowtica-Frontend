import React from 'react';

export default function BscCsitNotes({ notes }) {
  return (
    <div className="grid gap-6">
      {notes.map((note) => (
        <div
          key={note.id}
          className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">{note.title}</h2>

          <a
            href={note.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm"
          >
            📄 View Full Notes
          </a>

          {note.chapters && note.chapters.length > 0 && (
            <div className="mt-4">
              <h3 className="font-medium mb-2 text-gray-800">Chapters:</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {note.chapters.map((chapter, index) => (
                  <li key={index}>
                    <a
                      href={chapter.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {chapter.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
