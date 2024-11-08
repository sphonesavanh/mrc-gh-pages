import { useState, useEffect } from "react";
import "../assets/styles/mqtt/newMq.css"
import mqtt from "mqtt";

const MQTTComponent = () => {
  const [message, setMessage] = useState("");
  const [client, setClient] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Connect to HiveMQ broker
    const mqttClient = mqtt.connect("wss://broker.emqx.io:8084/mqtt");
 
    
    mqttClient.on("connect", () => {
      console.log("Connected to HiveMQ broker");
      setIsConnected(true);
      mqttClient.subscribe("MRC/NNN/Station1/sensor/data");
    });

    mqttClient.on("message", (topic, payload) => {
      console.log(`Message received from ${topic}: ${payload.toString()}`);
      setMessage(payload.toString());
    });

    mqttClient.on("error", (err) => {
      console.error("Connection error: ", err);
    });

    setClient(mqttClient);

    // Cleanup on component unmount
    return () => {
      if (mqttClient) {
        mqttClient.end();
      }
    };
  }, []);

  const sendMessage = () => {
    if (client) {
      client.publish(""); 
    }
  };

  return (
    <div id="mqtt">
      <div className="mqtt-container">
        <h2>MQTT with HiveMQ and React</h2>
        <p>Connection Status: {isConnected ? "Connected" : "Disconnected"}</p>
        <p>Received Message: {message}</p>
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  );
};

export default MQTTComponent;
