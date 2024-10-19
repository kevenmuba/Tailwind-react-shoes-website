// Sidebar.jsx
import React from 'react';

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white z-40 transform transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4">
        <h2 className="text-lg">Hi!</h2>
        <button onClick={onClose} className="mt-4 p-2 bg-red-500 rounded">
          Close
        </button>
      </div>
    </div>
  );
}

export default Sidebar;