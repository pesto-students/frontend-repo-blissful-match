import React, { useState } from 'react';
import './Auth.css';
import login_img from '../../assets/login_img.png';
import { loginUserRequest } from '../../api';
import { LoginRequest } from '../../api/models';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '@store/LoggedInUser/reducer';

const Login = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [formData, setFormData] = useState<LoginRequest>({
        email_address: '',
        password: '',
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
            const response = await loginUserRequest(formData);
            const tmpUser = {
                ...response.user,
                password: undefined,
                token: response.token,
            };
            dispatch(addUser(tmpUser));
            // console.log('Response:', response);
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <div className="login-section">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group register">
                        {/* <label htmlFor="email">Email</label> */}
                        <input
                            type="email"
                            id="email"
                            name="email_address"
                            placeholder="Email"
                            value={formData.email_address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        {/* <label htmlFor="password">Password</label> */}
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
                    <div className="forgot-keep">
                        <Link to="/forget-password">Forgot Password ?</Link>
                        <label>
                            <input type="checkbox" /> Keep me logged in
                        </label>
                    </div>
                    <button className="login" type="submit">
                        Login
                    </button>
                </form>
                <p className="signup">
                    New to Blissfull Match?
                    <Link to="/register">Sign up for free</Link>
                </p>
            </div>
            <div className="image-section">
                <img src={login_img} alt="Couple Image" />
            </div>
        </div>
    );
};

export default Login;
