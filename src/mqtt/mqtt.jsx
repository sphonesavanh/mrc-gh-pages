// App.js
import { useEffect, useState } from "react";
import mqtt from "mqtt";

const MQTT_BROKER_URL = "wss://broker.emqx.io:8084/mqtt"; // Use a WebSocket URL for MQTT
const TOPIC = "test/topic"; // Replace with your topic

function mqttBroke() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Connect to the MQTT broker
    const client = mqtt.connect(MQTT_BROKER_URL);

    // When the client connects, subscribe to a topic
    client.on("connect", () => {
      console.log("Connected to MQTT Broker");
      client.subscribe(TOPIC, (err) => {
        if (!err) {
          console.log(`Subscribed to ${TOPIC}`);
        }
      });
    });

    // When a message is received, update the state
    client.on("message", (topic, payload) => {
      console.log(`Received message: ${payload.toString()}`);
      setMessage(payload.toString());
    });

    // Clean up the client on component unmount
    return () => {
      client.end();
    };
  }, []);

  return (
    <div>
      <h1>MQTT Message</h1>
      <p>{message}</p>
    </div>
  );
}

export default mqttBroke;
