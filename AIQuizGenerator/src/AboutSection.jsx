import "./About.css";

export default function AboutSection() {
    return (
        <section className="about-section">
            <div className="about-container">

                <div className="about-header">
                    <h2 className="about-title">Why We Built QuizPlatform</h2>
                    <p className="about-description">
                        We built this platform to turn every classroom, meeting, or event 
                        into an interactive learning experience. No more boring quizzes, 
                        no slow results—just pure engagement.
                    </p>
                </div>

                <div className="about-grid">

                    <div className="about-card">
                        <div className="about-icon">
                            <span className="material-symbols-outlined">school</span>
                        </div>
                        <h3 className="about-card-title">For Educators</h3>
                        <p className="about-card-text">
                            Boost student participation and assess understanding in real-time 
                            with fun, interactive quizzes that make learning memorable.
                        </p>
                    </div>

                    <div className="about-card">
                        <div className="about-icon">
                            <span className="material-symbols-outlined">business_center</span>
                        </div>
                        <h3 className="about-card-title">For Offices</h3>
                        <p className="about-card-text">
                            Energize your team meetings, training sessions, and onboarding processes. 
                            Foster collaboration and knowledge retention effortlessly.
                        </p>
                    </div>

                    <div className="about-card">
                        <div className="about-icon">
                            <span className="material-symbols-outlined">celebration</span>
                        </div>
                        <h3 className="about-card-title">For Events</h3>
                        <p className="about-card-text">
                            Make your conferences, workshops, and social gatherings unforgettable 
                            by engaging your audience with live, competitive quizzes.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
