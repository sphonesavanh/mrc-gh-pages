import "../assets/styles/components/Nav.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import searchPic from "../assets/imgs/searchIcon.png";

const Navbar = () => {
  return (
    <div id="nav">
      <div className="nav-container">
        <div className="nav-text">Dashboard</div>

        <div className="nav-icon">
          <div className="nav-icon">
            <NotificationsIcon
              sx={{
                fontSize: "40px",
                margin: "0 20px",
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            />
            <AccountCircleIcon
              sx={{
                backgroundColor: "white",
                borderRadius: "16px",
                fontSize: "40px",
                margin: "0 20px",
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            />
            <ArrowDropDownIcon
              sx={{
                fontSize: "40px",
                margin: "0 20px",
                display: "flex",
                justifyContent: "end",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
