import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Risk Analytics Platform</h2>
        <p>
          Our platform provides comprehensive risk analysis and portfolio tracking for 
          National Stock Exchange (NSE) investments. We help investors make informed 
          decisions through data-driven insights.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">📈</span>
            <h3>Real-time Tracking</h3>
            <p>Monitor your portfolio performance in real-time with live updates.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📊</span>
            <h3>Risk Assessment</h3>
            <p>Advanced analytics to evaluate and manage investment risks.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📉</span>
            <h3>Performance Analytics</h3>
            <p>Detailed performance metrics and historical data analysis.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔔</span>
            <h3>Price Alerts</h3>
            <p>Custom alerts to keep you informed of market movements.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;