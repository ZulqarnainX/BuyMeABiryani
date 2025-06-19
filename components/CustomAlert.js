import React from 'react';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed top-5 right-5 z-50 bg-blue-950 text-white border border-blue-700 shadow-xl px-5 py-3 rounded-lg animate-fade-in w-[300px]">
      <div className="flex justify-between items-center">
        <p className="text-sm">{message}</p>
        <button
          onClick={onClose}
          className="ml-4 text-blue-300 hover:text-white text-xs"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
