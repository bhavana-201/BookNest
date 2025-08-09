// src/pages/Home.jsx
// import React from "react";
// import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Features from "../components/Features";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
        <header>
            <nav className="container nav">
                <div className="title">BookNest</div>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link className = "link" to = "/">Home</Link>
                    </li>
                    <li className="nav-item">
                        {/* <Link className="link" to="/login">Login/Signup</Link> */}
                        <Link className="link" to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </header>

        <main>
            <section className="container hero-section">
                <h1 className="tagline">
                    Track.
                    <br />
                    Discover.
                    <br />
                    Read.
                </h1>
            </section>

            <section className="features-section">
            <Features />
            </section>
        </main>

        <footer>&copy; 2025 BookNest. All rights reserved.</footer>
    </>
  );
};

export default Home;
