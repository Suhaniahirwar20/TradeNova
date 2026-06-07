import React from "react";
import DashboardPreview from "./DashboardPreview";

const Hero = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="hero-heading">
            <h1 className="trade-smarter mb-2">Trade Smarter.</h1>

            <h2 className="track-better mb-2">Track Better.</h2>

            <h3 className="grow-faster">Grow Faster.</h3>
          </div>
          <p className="lead text-muted mb-4">
            Stay ahead of the market with real-time analytics, trend tracking,
            and intelligent insights designed for modern investors.
          </p>
          <div className="d-flex gap-3 mb-4">
            <button
              className="btn text-white px-4 py-2"
              style={{
                background: "linear-gradient(90deg,#2563EB,#7C3AED)",
                border: "none",
              }}
            >
              Get Started Free
            </button>

            <button className="btn btn-light border px-4 py-2">
              Explore Features
            </button>
          </div>
          <div className="d-flex gap-4 mt-4">
            <span className="badge rounded-pill text-bg-light p-2">
              <i className="fa-solid fa-chart-line text-primary me-2"></i>
              Portfolio Tracking
            </span>

            <span className="badge rounded-pill text-bg-light p-2">
              <i className="fa-solid fa-chart-pie text-primary me-2"></i>
              Analytics
            </span>

            <span className="badge rounded-pill text-bg-light p-2">
              <i className="fa-solid fa-lightbulb text-primary me-2"></i>
              Insights
            </span>
          </div>
        </div>
        <div
          className="col-lg-6"
          style={{
            transform: "scale(0.93)",
            transformOrigin: "top center",
          }}
        >
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
};

export default Hero;
