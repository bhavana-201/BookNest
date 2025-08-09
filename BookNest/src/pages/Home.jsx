import { Link } from "react-router-dom";
import Features from "../components/Features";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <header className="home-header">
        <nav className="container nav">
          <Link to="/" className="title">
            BookNest
          </Link>
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="home-main">
        <section className="container hero-section">
          <div className="hero-content">
            <h1 className="tagline">
              Your next great read is waiting.
            </h1>
            <p className="subtitle">
              Track your reading, discover new books, and join a community of readers.
            </p>
            <Link to="/signup" className="cta-button">
              Get Started
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <h2 className="section-heading">Key Features</h2>
            <Features />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works-section">
          <div className="container">
            <h2 className="section-heading">How It Works</h2>
            <div className="steps-container">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Create Your Account</h3>
                <p>Sign up in seconds to start your reading journey.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Add Your Books</h3>
                <p>Easily search for and add books to your shelves.</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Start Reading!</h3>
                <p>Track your progress and connect with other readers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-banner">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to dive in?</h2>
              <p>Join thousands of book lovers and start your reading journey today.</p>
              <Link to="/signup" className="cta-button large">
                Join BookNest
              </Link>
            </div>
          </div>
        </section>

      </main>

      <footer className="home-footer">
        <div className="container">
          <p>&copy; 2025 BookNest. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;