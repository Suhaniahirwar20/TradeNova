import React from "react";

const Features = () => {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Powerful Features</h2>
        <p className="text-muted">
          Everything you need to stay ahead of the market.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="feature-card p-4 h-100">
            <div className="feature-icon mb-4">
              <i className="fa-solid fa-chart-line"></i>
            </div>

            <h5 className="fw-bold">Portfolio Tracking</h5>

            <p className="text-muted">
              Track stocks, mutual funds and investments in one place.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="feature-card p-4 h-100">
            <div className="feature-icon mb-4">
              <i className="fa-solid fa-bolt"></i>
            </div>

            <h5 className="fw-bold">Real-Time Market Data</h5>

            <p className="text-muted">
              Stay updated with live stock and index movements.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="feature-card p-4 h-100">
            <div className="feature-icon mb-4">
              <i className="fa-solid fa-brain"></i>
            </div>

            <h5 className="fw-bold">AI Insights</h5>

            <p className="text-muted">
              Get smart analysis and market intelligence.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="feature-card p-4 h-100">
            <div className="feature-icon mb-4">
              <i className="fa-solid fa-eye"></i>
            </div>

            <h5 className="fw-bold">Smart Watchlists</h5>

            <p className="text-muted">
              Track stocks and sectors that matter most.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="feature-card p-4 h-100">
            <div className="feature-icon mb-4">
              <i className="fa-solid fa-bell"></i>
            </div>

            <h5 className="fw-bold">Instant Alerts</h5>

            <p className="text-muted">
              Receive notifications on important market events.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="feature-card p-4 h-100">
            <div className="feature-icon mb-4">
              <i className="fa-solid fa-chart-pie"></i>
            </div>

            <h5 className="fw-bold">Advanced Analytics</h5>

            <p className="text-muted">
              Visualize trends with powerful charts and metrics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
