import React, { useState } from 'react';
import './Contact.css';
import login_img from '../../assets/login_img.png';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   // Handle login logic here
    //   console.log('Email:', email, 'Password:', password);
    // };

    return (
        <div className="container">
            <div className="login-section">
                <h2>Get in touch</h2>
                <div className="border-header"></div>
                <form>
                    <div className="input-group">
                        {/* <label htmlFor="input">Name</label> */}
                        <input
                            type="input"
                            id="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        {/* <label htmlFor="email">Email</label> */}
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        {/* <label>Content</label> */}
                        <textarea placeholder="Content" id="content"></textarea>
                    </div>
                    <button className="contact" type="submit">
                        Submit
                    </button>
                </form>
                <p className="signup">
                    <input type="checkbox" id="newsletter" /> I would like to
                    recieve the newsletter.
                </p>
            </div>
            <div className="image-section">
                <img src={login_img} alt="Couple Image" />
            </div>
        </div>
    );
};

export default Contact;
