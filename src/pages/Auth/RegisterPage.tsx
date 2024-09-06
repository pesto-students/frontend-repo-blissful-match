import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Navbar from '@components/Navbar/Navbar';
import Register from '@components/Auth/Register';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';

const RegisterPage = () => {
    return (
        <ErrorBoundary>
            <Navbar></Navbar>
            <Banner title="Member Registration" />
            <Register></Register>
            <Footer></Footer>
        </ErrorBoundary>
    );
};

export default RegisterPage;
