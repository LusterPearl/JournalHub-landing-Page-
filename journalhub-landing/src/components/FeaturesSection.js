// src/components/FeaturesSection.js
import React from 'react';
import '../styles/FeaturesSection.css'; // Import FeaturesSection component's CSS

const FeaturesSection = () => {
    return (
        <section className="features">
            <h2>Features</h2>
            <div className="feature-list">
                <div className="feature-item">
                    <h3>User Authentication</h3>
                    <p>Secure user registration and login with email verification.</p>
                </div>
                <div className="feature-item">
                    <h3>Rich Text Editor</h3>
                    <p>A robust editor to create and format journal entries.</p>
                </div>
                <div className="feature-item">
                    <h3>Search Functionality</h3>
                    <p>Quickly find journal entries by keywords.</p>
                </div>
                <div className="feature-item">
                    <h3>Privacy Controls</h3>
                    <p>Set journal entries as private or public.</p>
                </div>
                <div className="feature-item">
                    <h3>Responsive Design</h3>
                    <p>Accessible on both desktop and mobile devices.</p>
                </div>
                <div className="feature-item">
                    <h3>Profile Management</h3>
                    <p>Update and delete user profiles with ease.</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
