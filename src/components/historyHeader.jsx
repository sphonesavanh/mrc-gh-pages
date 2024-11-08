import "../assets/styles/components/historyHeader.css";
import { Link } from "react-router-dom";

const hisHeader = () => {
  return (
    <div id="hisHeader">
      <h1>History</h1>
      <Link>
        <h2>View all</h2>
      </Link>
    </div>
  );
};

export default hisHeader;
