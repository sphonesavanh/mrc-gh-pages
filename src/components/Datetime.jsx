import "../assets/styles/components/Datetime.css";
import { format } from "date-fns";

const Timee = () => {
  const currentDate = format(new Date(), "EEEE, dd/MM/yyyy");

  return (
    <div id="time">
      <div className="time-container">
        <div className="time-component">{currentDate}</div>
      </div>
    </div>
  );
};

export default Timee;
