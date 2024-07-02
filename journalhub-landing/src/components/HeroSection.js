// src/components/HeroSection.js
import React from 'react';
import '../styles/HeroSection.css'; // Import HeroSection component's CSS

const HeroSection = () => {
    return (
        <section className="hero">
            <h1>Welcome to Journal Hub</h1>
            <p>Your Personal Reflection Space</p>
            <button>Get Started</button>
        </section>
    );
};

export default HeroSection;
