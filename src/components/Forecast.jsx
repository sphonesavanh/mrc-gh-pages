import "../assets/styles/components/Forecast.css";
import FloodIcon from "@mui/icons-material/Flood";
import Timee from "./Datetime.jsx";
import WaterIcon from "@mui/icons-material/Water";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";;
import { useState, useEffect } from "react";
import mqtt from "mqtt";

const Forecast = () => {
  const [waterLevel, setWaterLevel] = useState("No data yet");
  const [temperature, setTemperature] = useState("No data yet");
  const [humidity, setHumidity] = useState("No data yet");

  useEffect(() => {
    const mqttClient = mqtt.connect("wss://broker.emqx.io:8084/mqtt");

    mqttClient.on("connect", () => {
      console.log("Connected to MQTT broker");
      mqttClient.subscribe("MRC/NNN/Station1/sensor/data", (err) => {
        if (err) {
          console.error("Subscription error:", err);
        } else {
          console.log("Subscribed successfully!");
        }
      });
    });

    mqttClient.on("message", (topic, msg) => {
      const data = JSON.parse(msg.toString());
      setWaterLevel(data.water_level);
      setTemperature(data.temperature);
      setHumidity(data.humidity);
    });

    return () => {
      mqttClient.end();
    };
  }, []);

  return (
    <div id="forecast">
      <div className="forecast-container">
        <FloodIcon
          sx={{
            fontSize: "100px",
          }}
        />
        <div className="forecast-text">
          <h1>Flood</h1>
          <h2>
            <Timee />
          </h2>
        </div>
        <div className="forecast-icons">
          <WaterIcon
            sx={{
              fontSize: "50px",
              color: "#007AFF",
            }}
          />
          <p className="forecast-icons-text">Water level:</p>
          <p className="forecast-icons-text">{waterLevel} m</p>
          <ThermostatIcon
            sx={{
              fontSize: "50px",
              color: "#FFCC00",
            }}
          />
          <p className="forecast-icons-text">Temperature:</p>
          <p className="forecast-icons-text">{temperature} °C</p>
          <CloudQueueIcon
            sx={{
              fontSize: "50px",
            }}
          />
          <p className="forecast-icons-text">Humidity:</p>
          <p className="forecast-icons-text">{humidity} %</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
