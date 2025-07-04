import React, { useState } from 'react';

const CheckBoxes = ({ title, permissions = [], includeApprove = false }) => {
  const [permissionData, setPermissionData] = useState(
    permissions.map((item) => ({
      name: item,
      view: true,
      edit: true,
      create: true,
      ...(includeApprove ? { approve: true } : {}),
    }))
  );

  const isAllSelected = permissionData.every(
    (perm) =>
      perm.view && perm.edit && perm.create && (includeApprove ? perm.approve : true)
  );

  const handleSelectAllToggle = () => {
    const newState = !isAllSelected;
    setPermissionData(
      permissionData.map((perm) => ({
        ...perm,
        view: newState,
        edit: newState,
        create: newState,
        ...(includeApprove ? { approve: newState } : {}),
      }))
    );
  };

  const handlePermissionChange = (index, permissionType) => {
    const updated = [...permissionData];
    updated[index][permissionType] = !updated[index][permissionType];
    setPermissionData(updated);
  };

  return (
    <div className="p-0">
      <div className="bg-white px-5 py-4 rounded shadow-sm">
        <div className="flex items-center justify-between mb-2 border-b pb-3">
          <h3 className="font-medium text-lg text-gray-800">{title}</h3>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isAllSelected}
              onChange={handleSelectAllToggle}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full relative peer-checked:bg-blue-500 transition-all">
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${
                  isAllSelected ? 'translate-x-5' : ''
                }`}
              />
            </div>
          </label>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-md">
            <thead>
              <tr>
                <th className="py-2 px-2 text-left"></th>
                <th className="py-2 px-2 text-left font-medium">View</th>
                <th className="py-2 px-2 text-left font-medium">Edit</th>
                <th className="py-2 px-2 text-left font-medium">Create</th>
                {includeApprove && (
                  <th className="py-2 px-2 text-left font-medium">Approve</th>
                )}
              </tr>
            </thead>
            <tbody>
              {permissionData.map((perm, index) => (
                <tr key={index}>
                  <td className="py-2 px-2 text-gray-700 whitespace-nowrap">{perm.name}</td>
                  {['view', 'edit', 'create'].map((type) => (
                    <td key={type} className="py-2 px-3">
                      <input
                        type="checkbox"
                        checked={perm[type]}
                        onChange={() => handlePermissionChange(index, type)}
                        className="accent-blue-500 w-5 h-5 cursor-pointer"
                      />
                    </td>
                  ))}
                  {includeApprove && (
                    <td className="py-2 px-3">
                      <input
                        type="checkbox"
                        checked={perm.approve}
                        onChange={() => handlePermissionChange(index, 'approve')}
                        className="accent-blue-500 w-5 h-5 cursor-pointer"
                      />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CheckBoxes;
