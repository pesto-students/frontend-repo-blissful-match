import React, { useState } from 'react';
import './Login.css';
import login_img from '../../assets/login_img.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   // Handle login logic here
    //   console.log('Email:', email, 'Password:', password);
    // };

    return (
        <div className="container">
            <div className="login-section">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        {/* <label htmlFor="email">Email</label> */}
                        <input
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        {/* <label htmlFor="password">Password</label> */}
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="forgot-keep">
                        <a href="#">Forgot Password ?</a>
                        <label>
                            <input type="checkbox" /> Keep me logged in
                        </label>
                    </div>
                    <button className="login" type="submit">
                        Login
                    </button>
                </form>
                <p className="signup">
                    New to Blissfull Match? <a href="#">Sign up for free</a>
                </p>
            </div>
            <div className="image-section">
                <img src={login_img} alt="Couple Image" />
            </div>
        </div>
    );
};

export default Login;
