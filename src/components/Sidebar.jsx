import "../assets/styles/components/Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CellTowerIcon from "@mui/icons-material/CellTower";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HistoryIcon from "@mui/icons-material/History";
import InfoIcon from "@mui/icons-material/Info";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="sidebar-container">
        <div className="icons">
          <DashboardIcon sx={{ fontSize: "40px", paddingRight: "10px" }} />
          <p>Dashboard</p>
        </div>
        <div className="icons">
          <CellTowerIcon sx={{ fontSize: "40px", paddingRight: "10px" }} />
          <p>Station</p>
        </div>
        <div className="icons">
          <LocationOnIcon sx={{ fontSize: "40px", paddingRight: "10px" }} />
          <p>Map</p>
        </div>
        <div className="icons">
          <HistoryIcon sx={{ fontSize: "40px", paddingRight: "10px" }} />
          <p>History</p>
        </div>
        <div className="icons">
          <InfoIcon sx={{ fontSize: "40px", paddingRight: "10px" }} />
          <p>About us</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
