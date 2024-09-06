import React, { useState } from 'react';
import './Auth.css';
import login_img from '../../assets/login_img.png';
import { ForgetPasswordUserRequest } from '../../api';
import { ForgetPasswordRequest } from '../../api/models';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<ForgetPasswordRequest>({
        email: '',
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
            const response = await ForgetPasswordUserRequest(formData);
            console.log('Response:', response);
            navigate('/forget-password-otp', {
                state: { email: formData.email },
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className="container">
            <div className="login-section">
                <h2>Forget Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button className="login">Send OTP</button>
                </form>
            </div>
            <div className="image-section">
                <img src={login_img} alt="Couple Image" />
            </div>
        </div>
    );
};

export default ForgetPassword;
