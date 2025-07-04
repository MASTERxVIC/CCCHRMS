import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CheckBoxes from "./components/CheckBoxes";
import ButtonGroup from "../../components/common/ButtonGroup";
import TopBar from "../../components/common/TopBar";

const UpdateRole = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const receivedData = location.state || { role: "", description: "" };

  const [formData, setFormData] = useState({
    roleName: "",
    description: "",
  });

  useEffect(() => {
    setFormData({
      roleName: receivedData.role,
      description: receivedData.description,
    });
  }, [receivedData]);

  const handleSave = () => alert("Updated Role Successfully");
  const handleCancel = () => alert("Cancelled.");

  const hrmsPermissions = [
    "Organisation Profile",
    "Branches",
    "Shift Management",
    "Document types",
    "Holiday List",
    "Employment type",
    "Salary Head",
    "Pay Schedule",
    "Tax Slabs",
  ];

  const documentPermissions = ["Document"];

  return (
    <div>
      <TopBar
        title="Update Role"
        showClose
        onClose={() => navigate("/rolelist")}
      />

      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Role Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Role Name"
            value={formData.roleName}
            onChange={(e) =>
              setFormData({ ...formData, roleName: e.target.value })
            }
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Please Enter Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <div className="pt-4 space-y-6">
            <CheckBoxes
              title="Employee"
              permissions={[
                "Basic And Personal Details",
                "Company Information",
                "Leaves",
                "Documents",
              ]}
            />

            <CheckBoxes
              title="Approvals"
              includeApprove={true}
              permissions={["Leaves", "Attendance", "Regularization Requests"]}
            />
            <CheckBoxes title="HRMS Set-Up" permissions={hrmsPermissions} />
            <CheckBoxes title="Documents" permissions={documentPermissions} />
          </div>

          <ButtonGroup
            primaryText="Update"
            secondaryText="Cancel"
            onPrimaryClick={handleSave}
            onSecondaryClick={handleCancel}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateRole;
