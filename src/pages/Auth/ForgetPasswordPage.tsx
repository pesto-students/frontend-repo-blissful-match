import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Navbar from '@components/Navbar/Navbar';
import ForgetPassword from '@components/Auth/ForgetPassword';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';

const ForgetPasswordPage = () => {
    return (
        <ErrorBoundary>
            <Navbar></Navbar>
            <Banner title="Forget Password" />
            <ForgetPassword></ForgetPassword>
            <Footer></Footer>
        </ErrorBoundary>
    );
};

export default ForgetPasswordPage;
