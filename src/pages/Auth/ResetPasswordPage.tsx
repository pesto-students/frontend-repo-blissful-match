import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Navbar from '@components/Navbar/Navbar';
import ResetPassword from '@components/Auth/ResetPassword';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';

const ResetPasswordPage = () => {
    return (
        <ErrorBoundary>
            <Navbar></Navbar>
            <Banner title="Reset Password" />
            <ResetPassword></ResetPassword>
            <Footer></Footer>
        </ErrorBoundary>
    );
};

export default ResetPasswordPage;
