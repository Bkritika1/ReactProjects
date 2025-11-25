import "./features.css";

export default function FeaturesSection() {
    return (
        <section className="features-section">
            <div className="features-container">

                <div className="features-header">
                    <h2 className="features-title">Packed with Powerful Features</h2>
                    <p className="features-description">
                        Everything you need to create and host engaging live quizzes that captivate your audience.
                    </p>
                </div>

                <div className="features-grid">

                    <div className="feature-card">
                        <span className="material-symbols-outlined feature-icon">leaderboard</span>
                        <h3 className="feature-title">Real-time Leaderboard</h3>
                        <p className="feature-text">
                            Watch the excitement build as scores update instantly after every question.
                        </p>
                    </div>

                    <div className="feature-card">
                        <span className="material-symbols-outlined feature-icon">podium</span>
                        <h3 className="feature-title">Live Quiz Hosting</h3>
                        <p className="feature-text">
                            Host quizzes for small groups or large audiences with our robust, scalable platform.
                        </p>
                    </div>

                    <div className="feature-card">
                        <span className="material-symbols-outlined feature-icon">bolt</span>
                        <h3 className="feature-title">Lightning-fast Auto Scoring</h3>
                        <p className="feature-text">
                            No manual grading. Get instant results and feedback for every participant.
                        </p>
                    </div>

                    <div className="feature-card">
                        <span className="material-symbols-outlined feature-icon">pin</span>
                        <h3 className="feature-title">Join with a Single Code</h3>
                        <p className="feature-text">
                            Participants can join your quiz in seconds with a simple, unique code.
                        </p>
                    </div>

                    <div className="feature-card">
                        <span className="material-symbols-outlined feature-icon">devices</span>
                        <h3 className="feature-title">Works on Any Device</h3>
                        <p className="feature-text">
                            Fully responsive design ensures a seamless experience on phones, tablets, and desktops.
                        </p>
                    </div>

                    <div className="feature-card">
                        <span className="material-symbols-outlined feature-icon">style</span>
                        <h3 className="feature-title">Beautiful Question Cards</h3>
                        <p className="feature-text">
                            Engage players with visually appealing question layouts, including image support.
                        </p>
                    </div>

                    <div className="feature-card">
                        <span className="material-symbols-outlined feature-icon">edit_square</span>
                        <h3 className="feature-title">Advanced Quiz Builder</h3>
                        <p className="feature-text">
                            Create quizzes with multiple question types, time limits, and custom scoring.
                        </p>
                    </div>

                    <div className="feature-card">
                        <span className="material-symbols-outlined feature-icon">monitoring</span>
                        <h3 className="feature-title">Analytics Dashboard</h3>
                        <p className="feature-text">
                            Get insights into performance, identify knowledge gaps, and track engagement.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
