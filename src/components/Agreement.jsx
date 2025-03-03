"use client";

import React from 'react'

const Agreement = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-fit w-full mx-4">
          <h2 className="text-xl font-bold mb-4">Agreement</h2>
          <p className='font-semibold text-lg'>This is a notice before proceeding.</p>
          <p className="mb-4 leading-9">🚫 We are not responsible for any copyrighted or illegal file downloads.
                 <br/> 🔗 Ensure that all download links are valid and publicly accessible.
                 <br/> 🛑 Always scan downloaded files for viruses before opening them. We do not verify file safety.
                 <br/> 📴 Scheduled downloads may not work if your system enters sleep mode or is shut down.
                 <br/> 🛠 Use this tool responsibly and within legal guidelines.</p>
          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Agree
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Agreement;
  