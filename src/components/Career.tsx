import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>QuantLab</h5>
              </div>
              <h3>July 2025 – Sep 2025</h3>
            </div>
            <p>
              Built scalable backend integrations for high-frequency financial
              platforms, developed REST APIs and data-processing services, and
              optimized Redis-backed workflows for faster user-facing
              responsiveness.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Software Engineer</h4>
                <h5>Sigma Crane</h5>
              </div>
              <h3>May 2025 – June 2025</h3>
            </div>
            <p>
              Delivered backend-driven ERP modules with modular service
              architecture, improved maintainability, and developed validation
              layers for enterprise workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open Source Contributor</h4>
                <h5>react-big-schedule</h5>
              </div>
              <h3>June 2025</h3>
            </div>
            <p>
              Contributed production-ready code to improve responsiveness,
              resolve UI-state synchronization issues, and enhance modular
              architecture for predictable state transitions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
