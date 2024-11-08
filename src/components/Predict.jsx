import "../assets/styles/components/Predict.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import CloudIcon from "@mui/icons-material/Cloud";

const forecastData = [
  {
    time: "Now",
    icon: <ThunderstormIcon sx={{ fontSize: "60px" }} />,
    measurement: "99m",
  },
  {
    time: "12:00",
    icon: <ThunderstormIcon sx={{ fontSize: "60px" }} />,
    measurement: "90m",
  },
  {
    time: "13:00",
    icon: <ThunderstormIcon sx={{ fontSize: "60px" }} />,
    measurement: "82m",
  },
  {
    time: "14:00",
    icon: <BeachAccessIcon sx={{ fontSize: "60px" }} />,
    measurement: "70m",
  },
  {
    time: "15:00",
    icon: <CloudIcon sx={{ fontSize: "60px" }} />,
    measurement: "10m",
  },
];

const Predict = () => {
  return (
    <div id="forecast">
      <div className="weather-forecast">
        {/* Top Tabs */}
        <div className="tabs">
          <div className="tab">Yesterday</div>
          <div className="tab active">Today</div>
          <div className="tab">Tomorrow</div>
        </div>

        {/* Forecast Items */}
        <div className="forecast-items">
          {forecastData.map((item, index) => (
            <div key={index} className="forecast-item">
              <div className={`icon.${item.icon}.${item.color}`}></div>
              <p className="time">{item.time}</p>
              <p>{item.icon}</p>
              <p className="measurement">{item.measurement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Predict;
