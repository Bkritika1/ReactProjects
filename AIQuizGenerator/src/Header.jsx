
import './Header.css';
export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                    <div className="logo-icon">
                        <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="logo-text">QuizPlatform</h2>
                </div>

                <nav className="nav">
                    <a href="#">Home</a>
                    <a href="#">Features</a>
                    <a href="#">How it Works</a>
                    <a href="#">Pricing</a>
                </nav>

                <div className="header-buttons">
                    <button className="btn-login">Login</button>
                    <button className="btn-primary">Get Started Free</button>
                </div>
            </div>
        </header>
    );
}
