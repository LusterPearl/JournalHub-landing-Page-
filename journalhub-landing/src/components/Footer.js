// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className="logo-text">JOURNAL HUB</h2>
                    <p>
                        Journal Hub is dedicated to providing the best journal management solutions.
                    </p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> &nbsp; 7065693933</span>
                        <span><i className="fas fa-envelope"></i> &nbsp; info@journalhub.com</span>
                    </div>
                    <div className="socials">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>

                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>

                <div className="footer-section contact-form">
                    <h2>Newsletter</h2>
                    <br />
                    <form>
                        <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
                        <button type="submit" className="btn">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; journalhub.com | Designed by Journal Hub
            </div>
        </footer>
    );
};

export default Footer;
