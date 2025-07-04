import TopBar from "../../components/common/TopBar";
import RoleTable from "./components/RoleTable";
import { useNavigate } from "react-router-dom";



const RoleList = () => {
    const navigate = useNavigate();
  return (
    <>
      <TopBar
        title="Role List"
        showPrimaryButton="true"
        primaryButtonText="New Role"
        onPrimaryButtonClick={() => navigate("/add-role")}
    />
      <RoleTable />
    </>
  );
};

export default RoleList;
