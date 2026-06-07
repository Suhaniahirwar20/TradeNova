import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, YAxis } from "recharts";

const data = [
  { month: "Jan", value: 10450 },
  { month: "Feb", value: 11820 },
  { month: "Mar", value: 16650 },
  { month: "Apr", value: 17300 },
  { month: "May", value: 19750 },
  { month: "Jun", value: 20320 },
];

const DashboardPreview = () => {
  return (
    <div
      className="bg-white rounded-4 p-4"
      style={{
        boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h5 className="fw-bold mb-1">Market Dashboard</h5>
        </div>

        <span className="badge bg-success-subtle text-success px-3 py-2">
          Live
        </span>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">
        <div className="col-4">
          <div
            className="dashboard-card p-3 rounded-4 h-100"
            style={{ background: "#F8FAFC" }}
          >
            <div className="mb-2">
              <i
                className="fa-solid fa-chart-line"
                style={{ color: "#2563EB" }}
              ></i>

              <p className="text-muted small mb-1">Market Index</p>
            </div>

            <h4 className="fw-bold mb-1">20,320</h4>

            <span className="text-success fw-semibold">+2.1%</span>
          </div>
        </div>

        <div className="col-4">
          <div
            className="dashboard-card p-3 rounded-4 h-100"
            style={{ background: "#F8FAFC" }}
          >
            <div className="mb-2">
              <i
                className="fa-solid fa-arrow-trend-up"
                style={{ color: "#16A34A" }}
              ></i>
            </div>

            <p className="text-muted small mb-1">Sentiment</p>

            <h4 className="fw-bold mb-1">Bullish</h4>

            <span className="text-success">78% Confidence</span>
          </div>
        </div>

        <div className="col-4">
          <div
            className="dashboard-card p-3 rounded-4 h-100"
            style={{ background: "#F8FAFC" }}
          >
            <div className="mb-2">
              <i className="fa-solid fa-fire" style={{ color: "#F97316" }}></i>
            </div>

            <p className="text-muted small mb-1">Trending</p>

            <div className="small">
              <div className="d-flex justify-content-between">
                <span>RELIANCE</span>
                <span className="text-success">+2.36%</span>
              </div>

              <div className="d-flex justify-content-between">
                <span>TCS</span>
                <span className="text-success">+1.10%</span>
              </div>

              <div className="d-flex justify-content-between">
                <span>INFY</span>
                <span className="text-danger">-0.75%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="p-3 rounded-4" style={{ background: "#F8FAFC" }}>
        <div className="d-flex justify-content-between mb-3">
          <h6 className="fw-semibold">Market Performance Trend</h6>

          <span className="text-muted small">Last 6 Months</span>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            {/* <YAxis/> */}
            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563EB"
              strokeWidth={4}
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardPreview;
