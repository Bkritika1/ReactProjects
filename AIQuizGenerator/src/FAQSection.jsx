import React from "react";
import "./FAQSection.css";

const FAQSection = () => {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Have questions? We've got answers. If you can't find what you're
            looking for, feel free to contact us.
          </p>
        </div>

        <div className="faq-list">
          <details className="faq-item">
            <summary>
              How does the live quiz work?
              <span className="arrow">&#9662;</span>
            </summary>
            <p>
              A host creates a quiz and shares a join code. Participants join on
              their devices, and the host controls the flow, revealing questions
              one by one. Scores are calculated and displayed on a live
              leaderboard instantly.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              Is it free to use?
              <span className="arrow">&#9662;</span>
            </summary>
            <p>
              Yes! We offer a generous free Starter plan that allows you to host
              up to 5 quizzes with 20 participants each. This is a great way to
              try out the platform's core features.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              Do participants need an account?
              <span className="arrow">&#9662;</span>
            </summary>
            <p>
              No, participants do not need to create an account. They can join a
              quiz simply by entering the join code and a nickname.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              What devices are supported?
              <span className="arrow">&#9662;</span>
            </summary>
            <p>
              QuizPlatform works on any modern device with a web browser,
              including smartphones, tablets, laptops, and desktops.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
