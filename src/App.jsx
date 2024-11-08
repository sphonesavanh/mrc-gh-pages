import "./App.css";
import Mainlayout from "./layouts/Mainlayout.jsx";
import MapComponent from "./components/Map.jsx";
import History from "./components/History.jsx";
import Predict from "./components/Predict.jsx";
import MQTTComponent from "./mqtt/newMq.jsx";
import Forecast from "./components/Forecast.jsx";
import { Route, Routes } from "react-router-dom";
import MqttMessageDisplay from "./mqtt/waterLevel.jsx";

const App = () => {
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<Mainlayout />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/map" element={<MapComponent />} />
        <Route path="/history" element={<History />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/mqtt" element={<MQTTComponent />} />
        <Route path="/water" element={<MqttMessageDisplay />} />
      </Routes>
    </div>
  );
};

export default App;
