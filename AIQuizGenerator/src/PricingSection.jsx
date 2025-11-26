import React from "react";
import "./PricingSection.css";

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="header1">
          <h2>Find the Perfect Plan</h2>
          <p>
            Whether you're just starting or need enterprise-level power, we have a plan
            for you.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Starter Plan */}
          <div className="pricing-card">
            <h3>Starter</h3>
            <p className="subtitle">Perfect for trying things out.</p>

            <div className="price">
              <span className="amount">$0</span>
              <span className="duration">/ month</span>
            </div>

            <ul className="features">
              <li>5 Quizzes</li>
              <li>20 Participants per Quiz</li>
              <li>Basic Reporting</li>
            </ul>

            <button className="btn-light">Choose Plan</button>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card popular">
            <div className="badge">MOST POPULAR</div>
            <h3>Pro</h3>
            <p className="subtitle">For professionals and teams.</p>

            <div className="price">
              <span className="amount">$19</span>
              <span className="duration">/ month</span>
            </div>

            <ul className="features">
              <li>Unlimited Quizzes</li>
              <li>200 Participants per Quiz</li>
              <li>Full Analytics</li>
              <li>Priority Support</li>
            </ul>

            <button className="btn-primary">Choose Plan</button>
          </div>

          {/* Enterprise Plan */}
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <p className="subtitle">For large organizations.</p>

            <div className="price">
              <span className="amount">Custom</span>
            </div>

            <ul className="features">
              <li>Unlimited Everything</li>
              <li>Custom Branding</li>
              <li>Dedicated Support</li>
              <li>API Access & Integrations</li>
            </ul>

            <button className="btn-light">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
