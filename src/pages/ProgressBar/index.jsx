import "./index.css"; 

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-label">{label}</div>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
