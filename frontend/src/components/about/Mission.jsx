import React from "react";

const Mission = () => {
  return (
    <section className="container py-5 mt-5">
      <div className="text-center">
        <span className="section-badge">OUR MISSION</span>

        <h1 className="display-5 fw-bold mt-3 mb-4">
          Helping You Invest With Confidence
        </h1>

        <div
          className="mx-auto mb-4 d-flex justify-content-center align-items-center"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "linear-gradient(135deg,#2563EB,#7C3AED)",
          }}
        >
          <i
            className="fa-solid fa-bullseye text-white"
            style={{ fontSize: "3rem" }}
          ></i>
        </div>

        <p
          className="text-muted mx-auto"
          style={{
            maxWidth: "700px",
            fontSize: "1.1rem",
          }}
        >
          We believe investing should be accessible, understandable, and
          data-driven.
        </p>

        <p
          className="text-muted mx-auto"
          style={{
            maxWidth: "700px",
          }}
        >
          TradeNova empowers investors with real-time market intelligence,
          advanced analytics, and actionable insights to help users make smarter
          investment decisions.
        </p>
      </div>
    </section>
  );
};

export default Mission;
