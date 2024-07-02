// src/components/Header.js
import React from 'react';
import '../styles/Header.css'; // Adjust the path as per your project structure

const Header = () => {
    return (
        <header className="header">
            <div className="logo">JOURNAL HUB</div>
            {/* Navigation links */}
            <nav className="navigation">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
