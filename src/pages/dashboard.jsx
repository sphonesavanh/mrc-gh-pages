import "../assets/styles/pages/dashboard.css";
import Navbar from "../components/Nav.jsx";
import Sidebar from "../components/Sidebar.jsx";
import MapComponent from "../components/Map.jsx";
import History from "../components/History.jsx";
import Predict from "../components/Predict.jsx";
import Forecast from "../components/Forecast.jsx";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <Sidebar />
      <div className="main-component">
        <Navbar />
        <div className="top-section">
          <Forecast />
          <Predict />
        </div>
        <div className="history-map">
          <MapComponent />
          <History />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
