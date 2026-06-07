import React from "react";

const WhyChoose = () => {
  return (
    <section className="container py-5 mt-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Why Investors Choose TradeNova
        </h2>

        <p className="text-muted">
          Everything you need to stay ahead in the market.
        </p>
      </div>

      <div className="row g-4">

        <div className="col-md-6 col-lg-3">
          <div className="card feature-card  border-0 shadow-sm h-100 rounded-4">
            <div className="card-body text-center">
              <i className="fa-solid fa-chart-line fs-1 icon mb-3" ></i>

              <h5 className="fw-bold">
                Real-Time Data
              </h5>

              <p className="text-muted">
                Monitor market movements as they happen.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card feature-card border-0 shadow-sm h-100 rounded-4">
            <div className="card-body text-center">
              <i className="fa-solid fa-chart-pie fs-1 icon mb-3"></i>

              <h5 className="fw-bold">
                Advanced Analytics
              </h5>

              <p className="text-muted">
                Understand trends with visual insights.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card feature-card border-0 shadow-sm h-100 rounded-4">
            <div className="card-body text-center">
              <i className="fa-solid fa-bell fs-1 icon mb-3"></i>

              <h5 className="fw-bold">
                Smart Alerts
              </h5>

              <p className="text-muted">
                Never miss important market updates.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card feature-card border-0 shadow-sm h-100 rounded-4">
            <div className="card-body text-center">
              <i className="fa-solid fa-lightbulb fs-1 icon mb-3"></i>

              <h5 className="fw-bold">
                AI Insights
              </h5>

              <p className="text-muted">
                Get actionable recommendations instantly.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default WhyChoose;