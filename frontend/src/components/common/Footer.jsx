import React from "react";

const Footer = () => {
  return (
    <footer
      className="mt-5 pt-5"
      style={{
        borderTop: "1px solid #E5E7EB",
      }}
    >
      <div className="container">
        <div className="row g-5">
          {/* Brand */}
          <div className="col-lg-4">
            <h3 className="fw-bold">
              <span style={{ color: "#2563EB" }}>Trade</span>
              <span style={{ color: "#7C3AED" }}>Nova</span>
            </h3>

            <p className="text-muted mt-3">
              TradeNova helps investors monitor market trends, discover
              opportunities, and make informed decisions through real-time
              insights, advanced analytics, and powerful visualization tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2">
            <h6 className="fw-bold mb-3">Quick Links</h6>

            <ul className="list-unstyled">
              <li className="mb-2">Home</li>
              <li className="mb-2">Features</li>
              <li className="mb-2">How It Works</li>
              <li className="mb-2">Testimonials</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-3">
            <h6 className="fw-bold mb-3">Resources</h6>

            <ul className="list-unstyled">
              <li className="mb-2">Market News</li>
              <li className="mb-2">Help Center</li>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms of Service</li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-lg-3">
            <h6 className="fw-bold mb-3">Connect</h6>

            <div className="d-flex gap-2 fs-4">
              <i className="fa-solid fa-envelope me-2"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-x-twitter"></i>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="text-center text-muted pb-4">
          © 2026 TradeNova. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
