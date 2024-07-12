// src/components/Modal.jsx
import React, { useEffect } from 'react';
import { IoIosClose } from "react-icons/io";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-white  sm:max-w-2xl p-5 rounded-md shadow-md mx-4">
        <button
          className="absolute top-2.5 right-2.5 bg-transparent border-none text-3xl cursor-pointer p-2.5"
          onClick={onClose}
        >
          <IoIosClose size={40} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
