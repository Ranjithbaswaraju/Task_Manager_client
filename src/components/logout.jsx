import { useNavigate } from "react-router-dom";
import "../App.css";
const Logout = ({ setUser }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };
  return (
    <div>
      <button className="btn btn-danger" type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
