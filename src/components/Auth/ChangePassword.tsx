import React, { useState } from 'react';
import './Auth.css';
import login_img from '../../assets/login_img.png';
import axios from 'axios';

const ChangePassword = () => {
    const [currentPassword, setcurrentPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log(
            'Current Password:',
            currentPassword,
            'Password:',
            password,
            'Confirm Password:',
            confirmPassword
        );

        axios
            .post('http://localhost:3000/change-password', {
                password,
                confirmPassword,
                currentPassword,
            }) //backend URL would be used as params
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <div className="container">
            <div className="login-section">
                <h2>Change Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="password"
                            id="currentPassword"
                            placeholder="Current Password"
                            value={currentPassword}
                            onChange={(e) => setcurrentPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="login" type="submit">
                        Send Otp
                    </button>
                </form>
            </div>
            <div className="image-section">
                <img src={login_img} alt="Couple Image" />
            </div>
        </div>
    );
};

export default ChangePassword;
