import React, { useState } from 'react';
import './Auth.css';
import login_img from '../../assets/login_img.png';
import { Link } from 'react-router-dom';
import { RegisterRequest } from '../../api/models';
import { registerUserRequest } from '../../api';
import { GENDER } from '@constants/GENDER';
import { RELIGION } from '@constants/RELIGION';
import { SUB_CASTE } from '@constants/SUB_CASTE';
import { useNavigate } from 'react-router-dom';
// import Datepicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaCalendarAlt } from 'react-icons/fa';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<RegisterRequest>({
        first_name: '',
        last_name: '',
        date_of_birth: null,
        gender: '',
        religion: '',
        community: '',
        email_address: '',
        mobile: '',
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
            const response = await registerUserRequest(formData);
            console.log('Response:', response);
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="register-main">
            <div className="container">
                <div className="login-section">
                    <h2>Register</h2>
                    <form className="register" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                placeholder="First Name"
                                value={formData.first_name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                placeholder="Last Name"
                                value={formData.last_name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="date"
                                id="date_of_birth"
                                name="date_of_birth"
                                placeholder="DOB DD/MM/YYYY"
                                value={formData.date_of_birth}
                                onChange={handleInputChange}
                                required
                            />
                            {/* <Datepicker
                        selected={formData.date_of_birth}
                        id="date_of_birth"
                        name="date_of_birth"
                       // placeholder="DOB DD/MM/YYYY"
                        //value={formData.date_of_birth}
                        //onChange={handleInputChange}
                        onChange={date=>setFormData(date)}
                        required
                        /> */}
                        </div>
                        <div className="input-group">
                            <select
                                className="form-select"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                            >
                                <option value={null}>Gender</option>
                                {GENDER.map((item) => (
                                    <option key={item.key} value={item.value}>
                                        {item.key}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-group">
                            <select
                                className="form-select"
                                name="religion"
                                value={formData.religion}
                                onChange={handleInputChange}
                            >
                                <option value={null}>Religion</option>
                                {RELIGION.map((item) => (
                                    <option key={item.key} value={item.value}>
                                        {item.key}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-group">
                            <select
                                className="form-select"
                                name="community"
                                value={formData.community}
                                onChange={handleInputChange}
                            >
                                <option value={null}>Community</option>
                                {SUB_CASTE.map((item) => (
                                    <option key={item.key} value={item.value}>
                                        {item.key}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                id="email_address"
                                name="email_address"
                                placeholder="Email"
                                value={formData.email_address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                id="mobile"
                                name="mobile"
                                placeholder="Phone Number"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
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
                                id="confirm_password"
                                name="confirm_password"
                                placeholder="Confirm Password"
                                value={formData.confirm_password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button className="login" type="submit">
                            Register
                        </button>
                    </form>
                    <p className="mt-4">
                        <Link to="/login">Already a Member? Login</Link>
                    </p>
                </div>
                <div className="image-section">
                    <img src={login_img} alt="Couple Image" />
                </div>
            </div>
        </div>
    );
};

export default Register;
