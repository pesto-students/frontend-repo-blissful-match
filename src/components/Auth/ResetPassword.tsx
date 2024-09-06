import React, { useState } from 'react';
import './Auth.css';
import login_img from '../../assets/login_img.png';
import { ResetPasswordUserRequest } from '../../api';
import { ResetPasswordRequest } from '../../api/models';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<ResetPasswordRequest>({
        email: '',
        password: '',
        confirm_password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await ResetPasswordUserRequest(formData);
            console.log('Response:', response);
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <div className="login-section">
                <h2>Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    {/* <div className="input-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div> */}
                    <div className="input-group">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            value={formData.confirm_password}
                            onChange={handleInputChange}
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

export default ResetPassword;
