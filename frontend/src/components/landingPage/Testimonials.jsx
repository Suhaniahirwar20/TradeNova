import React, { useState } from "react";

const Testimonials = () => {
  const [showMore, setShowMore] = useState(false);

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Retail Investor",
      rating: 5,
      review:
        "TradeNova helped me understand market trends much better. The dashboard is clean and easy to use.",
    },
    {
      name: "Priya Verma",
      role: "Finance Student",
      rating: 5,
      review:
        "The analytics and watchlist features make market tracking simple and effective.",
    },
    {
      name: "Aman Gupta",
      role: "Swing Trader",
      rating: 4,
      review:
        "A modern platform with useful insights and a very intuitive user experience.",
    },
    {
      name: "Neha Kapoor",
      role: "Investor",
      rating: 5,
      review:
        "The clean dashboard helped me track market movements effortlessly.",
    },
    {
      name: "Rohit Singh",
      role: "Market Enthusiast",
      rating: 4,
      review: "Excellent design and useful insights for everyday investors.",
    },
    {
      name: "Sneha Patel",
      role: "Trader",
      rating: 3,
      review:
        "A simple platform that makes understanding the market much easier.",
    },
  ];
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <span className="section-badge">TESTIMONIALS</span>

        <h2 className="fw-bold mt-3">What Our Users Say</h2>

        <p className="text-muted">
          Trusted by investors and market enthusiasts.
        </p>
      </div>

      <div className="row g-4">
        {testimonials.slice(0, showMore ? 6 : 3).map((item, index) => (
          <div className="col-lg-4" key={index}>
            <div className="testimonial-card h-100">
              <div className="mb-3 text-warning">
                {[...Array(item.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>

              <p className="text-muted">{item.review}</p>

              <div className="d-flex align-items-center mt-4">
                <div className="avatar">{item.name.charAt(0)}</div>

                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">{item.name}</h6>

                  <small className="text-muted">{item.role}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <button
          className="btn btn-outline-primary px-4 py-2"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "View More Reviews"}

          <i
            className={`fa-solid ${
              showMore ? "fa-chevron-up" : "fa-chevron-down"
            } ms-2`}
          ></i>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
