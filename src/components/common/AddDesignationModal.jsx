import React, { useState, useEffect } from "react";

const UpdateDesignationModal = ({ isOpen, onClose, designation }) => {
  const [designationName, setDesignationName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (designation) {
      setDesignationName(designation.designationName || "");
      setDescription(designation.description || "");
    }
  }, [designation]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-10 flex justify-end">
      <div className="bg-[#f2f7fb] h-full w-full sm:w-[380px] md:w-[400px] rounded-l-3xl shadow-lg relative p-8 overflow-y-auto">
        {/* Close Button */}
       <div className="absolute top-4 right-4">
          <div className="bg-white shadow-sm rounded-md w-9 h-9 flex items-center justify-center">
            <button
              onClick={onClose}
              className="cursor-pointer text-gray-600 hover:text-red-500 text-2xl leading-none"
            >
              &times;
            </button>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 pb-3 border-b border-gray-300">
            Add New Designation
          </h2>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Updated:", { designationName, description });
            onClose();
          }}
          className="space-y-6 font-medium text-gray-700 text-[14px]"
        >
          <div>
            <label className="block mb-1">
              Designation Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={designationName}
              onChange={(e) => setDesignationName(e.target.value)}
              className="w-full bg-white border rounded px-4 py-3 text-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-white border rounded px-4 py-3 text-sm focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
            >
              Update
            </button>
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer border px-6 py-2.5 rounded text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDesignationModal;
