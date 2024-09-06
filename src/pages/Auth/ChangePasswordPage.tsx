import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Navbar from '@components/Navbar/Navbar';
import ChangePassword from '@components/Auth/ChangePassword';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';

const ChangePasswordPage = () => {
    return (
        <ErrorBoundary>
            <Navbar></Navbar>
            <Banner title="Change Password" />
            <ChangePassword></ChangePassword>
            <Footer></Footer>
        </ErrorBoundary>
    );
};

export default ChangePasswordPage;
