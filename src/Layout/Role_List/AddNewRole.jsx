import { useNavigate } from "react-router-dom";
import TopBar from "../../components/common/TopBar"
import RoleForm from "./components/RoleForm";

const AddNewRole = () => {
        const navigate = useNavigate();

  return (
    <div>
        <TopBar
        title="Add New Role"
        showClose
        onClose={() => navigate("/rolelist")}/>
        
        <RoleForm/>
        
    </div>
    
  )
}

export default AddNewRole