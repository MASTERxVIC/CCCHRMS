import { useState } from "react";
import { useNavigate } from "react-router-dom";

const currentData = [
  { id: 1, role: "Admin", description: "Full access to all modules" },
  { id: 2, role: "Manager", description: "Can manage teams and view reports" },
  { id: 3, role: "Employee", description: "Limited access to own data" },
];

const RoleTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredData = currentData.filter((item) =>
    item.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (roleData) => {
    navigate("/update-role", { state: roleData });
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h2 className="text-xl font-semibold text-gray-800">Role Permission</h2>
        <input
          type="text"
          placeholder="Search role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse text-sm sm:text-base">
          <thead>
            <tr className="bg-[#0f172a] text-white text-left">
              <th className="p-3 text-center">Sr.No.</th>
              <th className="p-3">Role Name</th>
              <th className="p-3">Description</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, idx) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-50 last:border-b-0"
              >
                <td className="p-3 text-center">{idx + 1}</td>
                <td className="p-3 font-medium text-gray-600">{item.role}</td>
                <td className="p-3 text-gray-600">{item.description}</td>
                <td className="p-3 space-x-2 text-center">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredData.length === 0 && (
          <div className="text-center text-gray-500 py-4">
            No roles available
          </div>
        )}
      </div>
    </div>
  );
};

export default RoleTable;
