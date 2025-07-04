import React, { useState } from "react";
import AddDesignationModal from "../../components/common/AddDesignationModal";
import UpdateDesignationModal from "../../components/common/UpdateDesignationModal";
import DataTable from "../common/DataTable";
import TopBar from "../../components/common/TopBar";

const DesignationList = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedDesignation, setSelectedDesignation] = useState(null);

  const columns = [
    { name: "Sr. No", accessor: "serial" },
    { name: "Designation Name", accessor: "designationName" },
    { name: "Total Employee", accessor: "totalemployee" },
    { name: "Description", accessor: "description" },
  ];

  const data = [
    {
      serial: "01",
      designationName: "Production Manager",
      totalemployee: 12,
      description: "Handles production workflow and team operations.",
    },
    {
      serial: "02",
      designationName: "Software Developer",
      totalemployee: 25,
      description: "Responsible for product development and maintenance.",
    },
  ];

  return (
    <>
      <TopBar
        title="Designation List"
        showPrimaryButton
        primaryButtonText="New Designation"
        onPrimaryButtonClick={() => setShowAddModal(true)}
        showExportButton
        onExport={() => alert("Exporting data...")}
      />

      <DataTable
        columns={columns}
        data={data}
        title="All Designations"
        onActionClick={(row, type) => {
          if (type === "edit") {
            setSelectedDesignation(row);
            setShowUpdateModal(true);
          } else if (type === "view") {
            console.log("Viewing", row);
          } else if (type === "delete") {
            console.log("Deleting", row);
          }
        }}
      />

      {/* Modals */}
      <AddDesignationModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
      />

      <UpdateDesignationModal
        isOpen={showUpdateModal}
        designation={selectedDesignation}
        onClose={() => setShowUpdateModal(false)}
      />
    </>
  );
};

export default DesignationList;
