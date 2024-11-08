import { useEffect, useState } from "react";
import mqtt from "mqtt";

const MqttMessageDisplay = () => {
  const [waterLevel, setWaterLevel] = useState("No data yet.");

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
    });

    return () => {
      mqttClient.end(); // Clean up connection
    };
  }, []);

  return (
    <div>
      <h1>Water Level</h1>
      <p>{waterLevel} m</p>
    </div>
  );
};

export default MqttMessageDisplay;
