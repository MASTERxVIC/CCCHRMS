import React, { useState, useEffect } from "react";

const UpdateDesignationModal = ({ isOpen, designation, onClose }) => {
  const [formData, setFormData] = useState({
    designationName: "",
    description: "",
  });

  useEffect(() => {
    if (designation) {
      setFormData({
        designationName: designation.designationName || "",
        description: designation.description || "",
      });
    }
  }, [designation]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Designation updated!");
    console.log("Updated Data:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-end">
      <div className="bg-[#f2f7fb] h-full w-full sm:w-[400px] md:w-[450px] rounded-l-3xl shadow-lg relative p-8 overflow-y-auto">
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

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 pb-3 border-b border-gray-300">
            Update Designation
          </h2>
        </div>

        <form
          className="space-y-6 font-medium text-gray-700 text-[14px]"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block mb-1">
              Designation Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="designationName"
              value={formData.designationName}
              onChange={handleChange}
              placeholder="Enter Designation Name"
              className="w-full bg-white border rounded px-4 py-3 text-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              rows={4}
              className="w-full bg-white border rounded px-4 py-3 text-sm focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 py-2.5 rounded hover:opacity-90"
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
