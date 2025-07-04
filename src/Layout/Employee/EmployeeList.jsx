import TopBar from "../../components/common/TopBar";
import DataTable from "../common/DataTable";
import { useNavigate } from "react-router-dom";


const EmployeeList = () => {

  const navigate = useNavigate();

  const columns = [
    { name: "Employee ID", accessor: "employeeId" },
    { name: "First Name", accessor: "firstName" },
    { name: "Last Name", accessor: "lastName" },
    { name: "Email Id", accessor: "emailId" },
    { name: "Official Email", accessor: "officialEmail" },
    { name: "Department", accessor: "department" },
    { name: "Phone", accessor: "phone" },
  ];

  const data = [
    {
      employeeId: "EMP001",
      firstName: "Atul",
      lastName: "Kumar",
      emailId: "atul.kumar@gmail.com",
      officialEmail: "atul.k@company.com",
      department: "Frontend",
      phone: "9876543210",
    },
    {
      employeeId: "EMP002",
      firstName: "Avantika",
      lastName: "Nautiyal",
      emailId: "avantika.nautiyal@gmail.com",
      officialEmail: "avantika.n@company.com",
      department: "UI/UX",
      phone: "9123456789",
    },
  ];
  return (
    <div>
      <TopBar
        title="Employee List"
        showPrimaryButton="true"
        primaryButtonText="New Employee"
        onPrimaryButtonClick={() => navigate("/personal-information")}
        showSecondaryButton="true"
        secondaryButtonClassName="bg-white text-gray-600 hover:bg-gray-400 hover:text-white"
        secondaryButtonText="Quick Add"
        onSecondaryButtonClick={() => navigate("/quick-addemployee")}
        showExportButton={true}
        onExport={() => {
          // Your export logic here
          alert("Exporting data...");
        }}
        showImportButton={true}
        onImport={() => {
          // Your export logic here
          alert("Importing data...");
        }}
      />
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default EmployeeList;
