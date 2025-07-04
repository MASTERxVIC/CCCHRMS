// src/routes.js
import Dashboard from "./Layout/Dashboard/HRDashboard";
import EmployeeDashboard from "./Layout/Dashboard/EmployeeDashboard";
import RoleList from "./Layout/Role_List/RoleList";
import AddNewRole from "./Layout/Role_List/AddNewRole";
import UpdateRole from "./Layout/Role_List/UpdateRole";
import EmployeeList from "./Layout/Employee/EmployeeList";
import Profile from "./Layout/Profile/Profile";
import DepartmentList from "./Layout/Department/components/DepartmentList";
import DesignationList from "./Layout/Designation/DesignationList";
import PersonalInformation from "./Layout/Employee/PersonalInformation";
import ProfessionalInformation from "./Layout/Employee/ProInformation";
import CompanyInformation from "./Layout/Employee/CompanyInformation";
import FinancialInformation from "./Layout/Employee/FinancialInformation";
import UploadDocuments from "./Layout/Employee/UploadDocuments";
import QuickAddEmployee from "./Layout/Employee/QuickAddEmployee";
import LeaveRequest from "./Layout/Leave/LeaveRequest";
// Layouts
import MainLayout from "./Layout/MainLayout";
import ProfileLayout from "./Layout/ProfileLayout";

export const protectedRoutes = [
  { path: "/dashboard", element: <Dashboard />, layout: MainLayout },
  { path: "/dashboard/employee", element: <EmployeeDashboard/>, layout: MainLayout},
  { path: "/rolelist", element: <RoleList />, layout: MainLayout },
  { path: "/add-role", element: <AddNewRole />, layout: MainLayout },
  { path: "/update-role", element: <UpdateRole />, layout: MainLayout },
  { path: "/employee-list", element: <EmployeeList />, layout: MainLayout },
  { path: "/quick-addemployee", element: <QuickAddEmployee />, layout: MainLayout },
  { path: "/personal-information", element: <PersonalInformation />, layout: MainLayout },
  { path: "/pro-information", element: <ProfessionalInformation/>, layout: MainLayout},
  { path: "/company-information", element: <CompanyInformation />, layout: MainLayout },
  { path: "/financial-information", element: <FinancialInformation />, layout: MainLayout },
  { path: "/upload-documents", element: <UploadDocuments/>, layout: MainLayout},
  { path: "/dept-list", element: <DepartmentList />, layout: MainLayout },
  { path: "/designation-list", element: <DesignationList />, layout: MainLayout },
  { path: "/leave-request", element: <LeaveRequest />, layout: MainLayout },
  { path: "/profile", element: <Profile />, layout: ProfileLayout },
  
];
