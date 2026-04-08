import "./CleaningLoader.css";

function CleaningLoader() {
  return (
    <div className="cleaning-loader-overlay" role="status" aria-live="polite">
      <div className="cleaning-loader-card">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>

        <div className="loader-icon-wrap">
          <div className="loader-ring"></div>
          <div className="loader-core">
            <span className="sparkle sparkle-1"></span>
            <span className="sparkle sparkle-2"></span>
            <span className="sparkle sparkle-3"></span>
            <div className="foam"></div>
          </div>
        </div>

        <p className="loader-subtitle">Cleaning in progress</p>
        <h1 className="loader-title">A spotless welcome is on the way</h1>

        <div className="loader-dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default CleaningLoader;
