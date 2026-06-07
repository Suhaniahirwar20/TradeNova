import React from "react";

const Working = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span
            className="px-3 py-2 rounded-pill"
            style={{
              background: "#EEF2FF",
              color: "#4F46E5",
              fontWeight: "600",
            }}
          >
            HOW IT WORKS
          </span>

          <h2 className="fw-bold mt-3">Start Your Investment Journey</h2>

          <p className="text-muted">
            Get started with TradeNova in three simple steps.
          </p>
        </div>

        <div className="justify-content-center row g-4">
          {/* Step 1 */}
          <div className="col-md-3">
            <div className="step-card h-100 text-center p-4">
              <div className="step-icon">
                <i className="fa-solid fa-user-plus"></i>
              </div>

              <h5 className="fw-bold mt-4">Create Account</h5>

              <p className="text-muted">
                Sign up and personalize your dashboard to match your investment
                goals.
              </p>
            </div>
          </div>
          <div className="col-auto d-flex align-items-center">
            <i
              className="fa-solid fa-arrow-right-long"
              style={{
                fontSize: "40px",
                color: "#6366F1",
              }}
            ></i>
          </div>

          {/* Step 2 */}
          <div className="col-md-3">
            <div className="step-card h-100 text-center p-4">
              <div className="step-icon">
                <i className="fa-solid fa-chart-line"></i>
              </div>

              <h5 className="fw-bold mt-4">Analyze Markets</h5>

              <p className="text-muted">
                Track market trends, monitor stocks, and discover opportunities.
              </p>
            </div>
          </div>
          <div className="col-auto d-flex align-items-center">
            <i
              className="fa-solid fa-arrow-right-long"
              style={{
                fontSize: "40px",
                color: "#6366F1",
              }}
            ></i>
          </div>

          {/* Step 3 */}
          <div className="col-md-3">
            <div className="step-card h-100 text-center p-4">
              <div className="step-icon">
                <i className="fa-solid fa-rocket"></i>
              </div>

              <h5 className="fw-bold mt-4">Grow Smarter</h5>

              <p className="text-muted">
                Use insights and analytics to make confident investment
                decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
