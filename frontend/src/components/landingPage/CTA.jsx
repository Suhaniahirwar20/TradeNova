import React from "react";

const CTA = () => {
  return (
    <section className="container py-4 my-4 text-center">
      <h2 className="fw-bold mb-3" style={{ fontSize: "3rem" }}>
        Ready to Trade Smarter?
      </h2>

      <p className="text-muted mx-auto mb-4" style={{ maxWidth: "650px" }}>
        Join thousands of investors using TradeNova to track markets, analyze
        trends, and make informed investment decisions.
      </p>

      <button
        className="btn text-white px-4 py-3"
        style={{
          background: "linear-gradient(90deg,#2563EB,#7C3AED)",
          border: "none",
          borderRadius: "12px",
        }}
      >
        Get Started
      </button>
    </section>
  );
};

export default CTA;
