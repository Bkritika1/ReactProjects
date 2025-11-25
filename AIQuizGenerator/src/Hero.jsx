
import './Hero.css';
export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">

                <div className="hero-content">
                    <h1 className="hero-title">
                        Host Live Quizzes. Engage Instantly.
                    </h1>

                    <p className="hero-subtitle">
                        Create, host, and run live quizzes with real-time leaderboards, interactive gameplay, 
                        and instant results—designed for teachers, trainers, and teams.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary big">Create Quiz</button>
                        <button className="btn-light big">Join as Participant</button>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-bg-blur"></div>
                    <img 
                        className="hero-image"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb_dcPj8nQ12Hs1dL-2dFAeVuZtQgyytCNthAL9zpQbjdef99uxK8Q0HQDsevD8LeaApqM7ZF0pQjtN-3M-R3ewNBtWQkxQvKquGJXEtC_yoEGTHoKXflfIWtHwdA4g5ZHGm4CrPwi1CtlQN5UysY6hXJ6oQjIJCgpdrcO0QzOwy3WVpMPY_ARuwKr_cKmKVU-AQClZf0mwCg9H7O2hhiAwUuo3LtUeLxdx4lU3M-S5MExtHYnLAfAiaboCDbXLAPNqNb5kTPdLewi"
                        alt="Quiz mockup"
                    />
                </div>

                <div className="hero-stats">
                    <div className="stat-card">
                        <p className="stat-label">Hosts</p>
                        <p className="stat-value">1200+</p>
                    </div>

                    <div className="stat-card">
                        <p className="stat-label">Questions Answered</p>
                        <p className="stat-value">500,000+</p>
                    </div>

                    <div className="stat-card">
                        <p className="stat-label">Live Uptime</p>
                        <p className="stat-value">99.9%</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
