import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Navbar from '@components/Navbar/Navbar';
import ForgetPasswordOtp from '@components/Auth/ForgetPasswordOtp';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';

const ForgetPasswordOtpPage = () => {
    return (
        <ErrorBoundary>
            <Navbar></Navbar>
            <Banner title="Forget Password" />
            <ForgetPasswordOtp></ForgetPasswordOtp>
            <Footer></Footer>
        </ErrorBoundary>
    );
};

export default ForgetPasswordOtpPage;
