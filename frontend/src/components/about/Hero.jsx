import React from "react";

const Hero = () => {
  return (
    <section className="container py-5 mt-3 text-center">
      <span className="section-badge">ABOUT TRADENOVA</span>

      <h1 className="fw-bold display-5 mt-3">Smarter Investing Starts Here</h1>

      <p className="text-muted mx-auto mt-3" style={{ maxWidth: "700px" }}>
        TradeNova is a modern investment intelligence platform designed to help
        investors track market trends, monitor stocks, and make informed
        financial decisions through powerful analytics and real-time insights.
      </p>
    </section>
  );
};

export default Hero;
