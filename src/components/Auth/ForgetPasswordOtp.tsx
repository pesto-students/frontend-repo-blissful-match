import React, { useState } from 'react';
import './Auth.css';
import login_img from '../../assets/login_img.png';
import { VerifyOtpUserRequest } from '../../api';
import { VerifyOtpRequest } from '../../api/models';
import { useNavigate } from 'react-router-dom';
//import { useLocation } from 'react-router-dom';

const ForgetPasswordOtp = () => {
    const navigate = useNavigate();
    //const location = useLocation();
    //console.log(location.state.email)
    const [formData, setFormData] = useState<VerifyOtpRequest>({
        email: '',
        otp: '',
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
            const response = await VerifyOtpUserRequest(formData);
            console.log('Response:', response);
            navigate('/reset-password');
            //navigate('/reset-password',{state:{email:location.state.email}});
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
                            placeholder="Enter Email"
                            value={formData.email}
                            //value={location.state.email}
                            //disabled
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            id="otp"
                            name="otp"
                            value={formData.otp}
                            onChange={handleInputChange}
                            placeholder="Enter OTP"
                            required
                        />
                    </div>
                    <button className="login">Verify OTP</button>
                </form>
            </div>
            <div className="image-section">
                <img src={login_img} alt="Couple Image" />
            </div>
        </div>
    );
};

export default ForgetPasswordOtp;
