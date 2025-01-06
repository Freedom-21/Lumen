import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Make sure this path matches your structure

const LandingPage = () => {
  return (
    <>
      <div>
        {/* Navigation Menu */}
        <header>
          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </header>

        {/* Home Section */}
        <section id="home" className="full-screen">
          <div className="overlay">
            <div className="intro">
              <h1>Your journey begins here.</h1>
              <p>
                A modern and collaborative text editing tool designed for
                developers and writers alike.
              </p>
              <div className="Login-Logout">
                <Link to="/signup" className="btn">Sign Up</Link>
                <Link to="/login" className="btn">Log In</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-background">
          <h2>Features</h2>
          {/* Optional: Additional intro paragraph for Features */}
          <p style={{ margin: '1rem auto 3rem', maxWidth: '700px' }}>
            Explore a powerful set of functionalities tailored to streamline your
            collaboration and boost productivity.
          </p>

          <div className="feature feature-right">
            <div className="feature-text">
              <h3 className="user-friendly-title">Real-Time Collaboration</h3>
              <p className="user-friendly-desc">
                Collaborate seamlessly with multiple users, all in real-time.
              </p>
            </div>
            <div className="feature-image">
              <img
                src="/public/collaboration-image.png"
                alt="Collaboration"
              />
            </div>
          </div>

          <div className="feature feature-left">
            <div className="feature-image">
              <img
                src="/public/cursor-image.png"
                alt="Cursor Tracking"
              />
            </div>
            <div className="feature-text">
              <h3 className="user-friendly-title">Cursor Position Tracking</h3>
              <p className="user-friendly-desc">
                See where your collaborators are typing with visible cursors for
                everyone.
              </p>
            </div>
          </div>

          <div className="feature feature-right">
            <div className="feature-text">
              <h3 className="user-friendly-title">User Friendly</h3>
              <p className="user-friendly-desc">
                Our tool is designed with simplicity in mind, allowing users to focus on
                writing and collaboration without the need for complex setup or
                configurations.
              </p>
            </div>
            <div className="feature-image">
              <img
                src="/public/friendly.png"
                alt="User Friendly Feature"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-background">
          <h2>About the Project</h2>
          <p>
            This project is designed to facilitate collaborative writing. Built with love
            and dedication, it supports real-time updates and user-friendly features.
          </p>
          {/* Optional extra descriptive paragraph */}
          <p style={{ marginTop: '2rem', maxWidth: '700px', margin: '2rem auto' }}>
            We believe that the future of writing is collaborative, and our mission is
            to break barriers so you can focus on what matters most: your creativity and
            your audience.
          </p>

          <h3>Let's Connect:</h3>
          <div id="contact-links">
            <a
              href="https://github.com/Freedom-21"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/freedom-yenesew"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Freedom-21/Lumen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Repository
            </a>
          </div>
        </section>

        <footer>
          <p>&copy; 2025 Lumen &lt;/&gt; Text Editor Project | Built by Freedom</p>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
