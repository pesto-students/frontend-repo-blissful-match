import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="top-section">
                <div className="footer-logo">
                    <img
                        src={logo}
                        alt="Blissful Match Logo"
                        className="logo-img"
                    />
                </div>
                <div className="newsletter-section">
                    <input type="email" placeholder="Subscribe newsletter" />
                    <button>→</button>
                </div>
            </div>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About</h3>
                    <ul>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Testimonials</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Privacy & You</h3>
                    <ul>
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Be Safe Online</a>
                        </li>
                        <li>
                            <a href="#">Report Misuse</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Need Help</h3>
                    <ul>
                        <li>
                            <a href="#">Member Login</a>
                        </li>
                        <li>
                            <a href="#">Registration</a>
                        </li>
                        <li>
                            <a href="#">Partner Search</a>
                        </li>
                        <li>
                            <a href="#">Premium Membership</a>
                        </li>
                        <li>
                            <a href="#">Customer Support</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>More</h3>
                    <ul>
                        <li>
                            <a href="#">VIP BlissfulMatch</a>
                        </li>
                        <li>
                            <a href="#">Select BlissfulMatch</a>
                        </li>
                        <li>
                            <a href="#">Success Stories</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
