import React, { useState } from "react";
import { Trash2 } from "lucide-react";

const DynamicInputSection = ({ title, fields, addButtonLabel }) => {
  const [rows, setRows] = useState([
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}),
  ]);

  const handleInputChange = (rowIdx, name, value) => {
    const updatedRows = [...rows];
    updatedRows[rowIdx][name] = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([
      ...rows,
      fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}),
    ]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <div className="p-6 bg-white shadow-sm rounded-lg space-y-6">
      {/* Section Header */}
      <div className="flex justify-between items-center border-b pb-3 flex-wrap gap-2">
        <h2 className="text-lg font-semibold border-l-4 border-blue-500 pl-2">
          {title}
        </h2>
        <button
          type="button"
          onClick={handleAddRow}
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded cursor-pointer"
        >
          {addButtonLabel}
        </button>
      </div>

      {/* Input Rows */}
      {rows.map((row, idx) => (
       <div
  key={idx}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-8"
>

          {fields.map((field) => (
            <div key={field.name} className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                {field.label} <span className="text-red-500">*</span>
              </label>
              {field.type === "file" ? (
                <input
                  type="file"
                  name={field.name}
                  onChange={(e) =>
                    handleInputChange(idx, field.name, e.target.files[0])
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                />
              ) : (
                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={row[field.name]}
                  onChange={(e) =>
                    handleInputChange(idx, field.name, e.target.value)
                  }
                  placeholder={field.placeholder}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              )}
            </div>
          ))}

          {/* Delete Button */}
          <div className="flex justify-end items-start p-6">
            <button
              type="button"
              onClick={() => handleRemoveRow(idx)}
              className="text-red-600 hover:text-red-800 cursor-pointer"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicInputSection;
