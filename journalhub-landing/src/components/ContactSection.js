// src/components/ContactSection.js
import React from 'react';
import '../styles/ContactSection.css'; // Import ContactSection component's CSS

const ContactSection = () => {
    return (
        <section className="contact">
            <h2>Contact Us</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default ContactSection;
