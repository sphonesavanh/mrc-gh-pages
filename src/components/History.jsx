import "../assets/styles/components/History.css";

const History = () => {
  return (
    <div id="history">
      <table className="history-container">
        <thead>
          <tr>
            <th className="history-header">Time</th>
            <th className="history-header">Water Level Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="history-cell">2024-06-08 14:00:00</td>
            <td className="history-cell">51.1m</td>
          </tr>
          <tr>
            <td className="history-cell">2024-06-08 14:30:00</td>
            <td className="history-cell">102m</td>
          </tr>
          <tr>
            <td className="history-cell">2024-06-08 15:00:00</td>
            <td className="history-cell">100m</td>
          </tr>
          <tr>
            <td className="history-cell">2024-06-08 15:30:00</td>
            <td className="history-cell">92m</td>
          </tr>
          <tr>
            <td className="history-cell">2024-06-08 16:00:00</td>
            <td className="history-cell">90.1m</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default History;
