import React from "react";

const Address = ({
  title,
  addressData,
  onChange,
  showSameAsCheckbox = false,
  onSameAsChange = () => {},
  sameAsChecked = false,
}) => {
  return (
    <div className="px-6 py-5 bg-white shadow-sm rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold border-l-4 border-blue-500 pl-2">
          {title}
        </h2>

        {showSameAsCheckbox && (
          <label className="flex items-center text-sm font-normal space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={sameAsChecked}
              onChange={onSameAsChange}
              className="accent-blue-500 w-4 h-4"
            />
            <span>Same as Present Address</span>
          </label>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-normal mb-1">
            Address line 1 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Address line 1"
            value={addressData.line1}
            onChange={(e) =>
              onChange({ ...addressData, line1: e.target.value })
            }
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-normal mb-1">
            Address line 2
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Address line 2"
            value={addressData.line2}
            onChange={(e) =>
              onChange({ ...addressData, line2: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-normal mb-1">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={addressData.country}
            onChange={(e) =>
              onChange({ ...addressData, country: e.target.value })
            }
          >
            <option>Select country</option>
            <option>Country 1</option>
            <option>Country 2</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-normal mb-1">
            State <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={addressData.state}
            onChange={(e) =>
              onChange({ ...addressData, state: e.target.value })
            }
          >
            <option>Select State</option>
            <option>State 1</option>
            <option>State 2</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-normal mb-1">
            City <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={addressData.city}
            onChange={(e) =>
              onChange({ ...addressData, city: e.target.value })
            }
          >
            <option>Select City</option>
            <option>City 1</option>
            <option>City 2</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-normal mb-1">
            Postal Code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Postal Code"
            value={addressData.postalCode}
            onChange={(e) =>
              onChange({ ...addressData, postalCode: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
