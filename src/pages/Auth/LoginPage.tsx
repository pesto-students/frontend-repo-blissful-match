import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Navbar from '@components/Navbar/Navbar';
import Login from '@components/Auth/Login';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';

const LoginPage = () => {
    return (
        <ErrorBoundary>
            <Navbar></Navbar>
            <Banner title="Login" />
            <Login></Login>
            <Footer></Footer>
        </ErrorBoundary>
    );
};

export default LoginPage;
