import React, { useState } from "react";
import AddDeptModal from "../../../components/common/AddDeptModal";
import UpdateDeptModal from "../../../components/common/UpdateDeptModal";
import DataTable from "../../common/DataTable";
import TopBar from "../../../components/common/TopBar";

const DepartmentList = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedDept, setSelectedDept] = useState(null);

  const columns = [
    { name: "Sr. No", accessor: "serial" },
    { name: "Department Name", accessor: "deptName" },
    { name: "Total Employee", accessor: "totalemployee" },
    { name: "Description", accessor: "description" },
  ];

  const data = [
    {
      serial: "01",
      deptName: "Human Resources",
      totalemployee: 12,
      description: "Handles hiring, onboarding, and employee relations.",
    },
    {
      serial: "02",
      deptName: "Engineering",
      totalemployee: 25,
      description: "Responsible for product development and maintenance.",
    },
  ];

  return (
    <>
      <TopBar
        title="Department List"
        showPrimaryButton
        primaryButtonText="New Department"
        onPrimaryButtonClick={() => setShowAddModal(true)}
        showExportButton
        onExport={() => alert("Exporting data...")}
      />

      <DataTable
        columns={columns}
        data={data}
        title="All Departments"
        onActionClick={(row, type) => {
          if (type === "edit") {
            setSelectedDept(row);
            setShowUpdateModal(true);
          } else if (type === "view") {
            console.log("Viewing", row);
          } else if (type === "delete") {
            console.log("Deleting", row);
          }
        }}
      />

      {/* Modals */}
      <AddDeptModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} />
      <UpdateDeptModal
        isOpen={showUpdateModal}
        department={selectedDept}
        onClose={() => setShowUpdateModal(false)}
      />
    </>
  );
};

export default DepartmentList;
